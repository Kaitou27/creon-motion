import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/app/lib/supabaseAdmin';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const token = searchParams.get('token');

    if (!id || !token) {
      return new NextResponse('Missing ID or Token', { status: 400 });
    }

    // 1. Verify Token
    const approveSecret = process.env.APPROVE_SECRET || '';
    const expectedToken = crypto
      .createHash('sha256')
      .update(`${id}-${approveSecret}`)
      .digest('hex');

    if (token !== expectedToken) {
      return new NextResponse('Invalid or Expired Token', { status: 403 });
    }

    // 2. Get Booking Data
    const { data: booking, error: fetchError } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .eq('id', id)
      .single();

    if (fetchError || !booking) {
      console.error('Fetch Error:', fetchError);
      return new NextResponse('Booking not found', { status: 404 });
    }

    // If already approved, redirect to confirmation anyway (to see the link)
    if (booking.status === 'approved') {
        const baseUrl = request.nextUrl.origin;
        const successUrl = new URL(`${baseUrl}/thanks/confirmation`);
        successUrl.searchParams.set('name', booking.full_name);
        successUrl.searchParams.set('brand', booking.brand || '');
        // Note: For already approved, we'd need to fetch the original meet link if stored.
        return NextResponse.redirect(successUrl.toString());
    }

    // 3. Setup Google Auth
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // 4. Create Google Calendar Event
    const event = {
      summary: `Discovery Call: ${booking.full_name} (${booking.brand})`,
      description: `
        Project Details:
        - Topic: ${booking.topic || 'Not provided'}
        - Brand: ${booking.brand}
        - Socials: ${booking.socials || 'Not provided'}
        - Client Email: ${booking.email}
      `,
      start: {
        dateTime: booking.start_iso,
        timeZone: 'Asia/Manila',
      },
      end: {
        dateTime: booking.end_iso,
        timeZone: 'Asia/Manila',
      },
      attendees: [
        { email: 'info@creonmotion.com' },
        { email: booking.email }
      ],
      conferenceData: {
        createRequest: {
          requestId: Math.random().toString(36).substring(7),
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    };

    console.log('Approve API: Creating Calendar Event...');
    // We must await this because the success page needs the link
    const calendarResponse = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      conferenceDataVersion: 1,
      sendUpdates: 'all',
    });

    const meetLink = calendarResponse.data.hangoutLink || 'https://meet.google.com/placeholder-link';

    // 5 & 6. Update status and Send Emails in PARALLEL to save time
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });

    const adminEmail = 'info@creonmotion.com';

    console.log('Approve API: Updating DB and Sending Final Emails in parallel...');
    await Promise.all([
        supabaseAdmin.from('bookings').update({ status: 'approved' }).eq('id', id),
        transporter.sendMail({
            from: process.env.SMTP_USER,
            to: booking.email,
            replyTo: adminEmail,
            subject: `Confirmed: Discovery Call with Creon Motion`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 20px auto; background: #001A1F; color: white; padding: 40px; border: 1px solid #00E0FF; border-radius: 16px;">
                <h1 style="color: #00E0FF; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Your Call is Confirmed!</h1>
                <p style="color: #888; font-size: 14px;">Hi ${booking.full_name}, we've confirmed your discovery call. We're excited to learn more about ${booking.brand}.</p>
                
                <div style="background: rgba(255,255,255,0.05); padding: 25px; border-radius: 12px; margin: 30px 0;">
                  <h2 style="font-size: 12px; text-transform: uppercase; color: #00E0FF; margin-bottom: 20px;">Meeting Details</h2>
                  <p><strong>Date:</strong> ${booking.date_str}</p>
                  <p><strong>Your Local Time:</strong> <span style="color: #00E0FF;">${booking.time_local}</span></p>
                </div>
      
                <div style="text-align: center; margin: 40px 0;">
                  <p style="margin-bottom: 20px; font-weight: bold;">Join via Google Meet:</p>
                  <a href="${meetLink}" style="background: #00E0FF; color: #001A1F; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: inline-block;">
                    Join Meeting
                  </a>
                  <p style="font-size: 12px; color: #888; margin-top: 15px;">A calendar invitation has also been sent to your inbox.</p>
                </div>
      
                <div style="text-align: center; margin-top: 40px; border-top: 1px solid rgba(0,224,255,0.2); padding-top: 30px;">
                  <p style="font-size: 10px; color: #555; text-transform: uppercase; letter-spacing: 2px;">Creon Motion | Video Editing & Strategy</p>
                </div>
              </div>
            `
        })
    ]);

    // 7. Success Redirect to Premium Page
    const baseUrl = request.nextUrl.origin;
    const successUrl = new URL(`${baseUrl}/thanks/confirmation`);
    successUrl.searchParams.set('name', booking.full_name);
    successUrl.searchParams.set('brand', booking.brand || '');
    successUrl.searchParams.set('meet', meetLink);

    return NextResponse.redirect(successUrl.toString());

  } catch (error: any) {
    console.error('Approval Error:', error);
    return new NextResponse(`Error: ${error.message}`, { status: 500 });
  }
}
