import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { supabase } from '@/app/lib/supabase';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = body || {};

    // Validate required fields
    if (!data.fullName || !data.email || !data.brand || !data.startISO || !data.endISO) {
      console.log('Missing data:', { fullName: !!data.fullName, email: !!data.email, brand: !!data.brand, startISO: !!data.startISO });
      return NextResponse.json({ error: 'Missing required booking fields' }, { status: 400 });
    }

    // --- SAVE TO SUPABASE ---
    const { data: dbData, error: dbError } = await supabase
      .from('bookings')
      .insert([
        {
          full_name: data.fullName,
          email: data.email,
          brand: data.brand,
          socials: data.socials || null,
          topic: data.topic || null,
          start_iso: data.startISO,
          end_iso: data.endISO,
          date_str: data.date,
          time_pht: data.timePHT,
          time_local: data.timeLocal,
          timezone: data.timezone,
          status: 'pending'
        }
      ])
      .select();

    if (dbError) {
      console.error('Database Error:', dbError);
      return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 });
    }

    const insertedId = dbData?.[0]?.id;
    const approveSecret = process.env.APPROVE_SECRET || '';
    
    // Generate secure token for one-click approval
    const token = crypto
      .createHash('sha256')
      .update(`${insertedId}-${approveSecret}`)
      .digest('hex');

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const approveUrl = `${baseUrl}/api/approve-booking?id=${insertedId}&token=${token}`;

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const adminEmail = 'info@creonmotion.com';

    // --- EMAIL TO ADMIN (APPROVAL) ---
    const adminSubject = `🚨 ACTION REQUIRED: Approve Booking from ${data.fullName}`;
    const adminHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 20px auto; background: #001A1F; color: white; padding: 40px; border: 1px solid #00E0FF; border-radius: 16px;">
        <h1 style="color: #00E0FF; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">New Booking Request</h1>
        <p style="color: #888; font-size: 14px;">A client has requested a discovery call. Review the details below and click confirm to add it to your calendar and send them the Google Meet link.</p>
        
        <div style="background: rgba(255,255,255,0.05); padding: 25px; border-radius: 12px; margin: 30px 0;">
          <h2 style="font-size: 12px; text-transform: uppercase; color: #00E0FF; margin-bottom: 20px;">Requested Time</h2>
          <p><strong>Date:</strong> ${data.date}</p>
          <p><strong>Time (Philippines):</strong> <span style="color: #00E0FF;">${data.timePHT}</span></p>
          <p><strong>Time (Client Local):</strong> ${data.timeLocal} (${data.timezone})</p>
        </div>

        <div style="margin: 30px 0;">
          <h2 style="font-size: 12px; text-transform: uppercase; color: #00E0FF; margin-bottom: 20px;">Client Info</h2>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Brand:</strong> ${data.brand}</p>
          <p><strong>Socials:</strong> ${data.socials || 'Not provided'}</p>
          <p><strong>Topic:</strong> ${data.topic || 'Not provided'}</p>
        </div>
        
        <div style="text-align: center; margin: 40px 0;">
          <a href="${approveUrl}" style="background: #00E0FF; color: #001A1F; padding: 18px 36px; border-radius: 12px; text-decoration: none; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; display: inline-block; box-shadow: 0 10px 20px rgba(0,224,255,0.2);">
            Confirm Booking
          </a>
          <p style="font-size: 12px; color: #555; margin-top: 15px;">Clicking this will automatically create the Google Meet and notify the client.</p>
        </div>

        <div style="text-align: center; margin-top: 40px; border-top: 1px solid rgba(0,224,255,0.2); padding-top: 30px;">
          <p style="font-size: 10px; color: #555; text-transform: uppercase; letter-spacing: 2px;">Creon Motion Approval System</p>
        </div>
      </div>
    `;

    // --- EMAIL TO CLIENT (PENDING) ---
    const clientSubject = `Booking Received: Discovery Call with Creon Motion`;
    const clientHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 20px auto; background: #001A1F; color: white; padding: 40px; border: 1px solid #00E0FF; border-radius: 16px;">
        <h1 style="color: #00E0FF; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Request Received</h1>
        <p style="color: #888; font-size: 14px;">Hi ${data.fullName}, we've received your request for a discovery call regarding ${data.brand}.</p>
        
        <div style="background: rgba(255,255,255,0.05); padding: 25px; border-radius: 12px; margin: 30px 0;">
          <p>Our team is currently reviewing the schedule. Once confirmed, you will receive a <strong>final email with the Google Meet link</strong> and a calendar invitation.</p>
        </div>

        <div style="background: rgba(255,255,255,0.05); padding: 25px; border-radius: 12px; margin: 30px 0;">
          <h2 style="font-size: 12px; text-transform: uppercase; color: #00E0FF; margin-bottom: 20px;">Requested Details</h2>
          <p><strong>Date:</strong> ${data.date}</p>
          <p><strong>Your Local Time:</strong> <span style="color: #00E0FF;">${data.timeLocal}</span></p>
        </div>

        <div style="text-align: center; margin-top: 40px; border-top: 1px solid rgba(0,224,255,0.2); padding-top: 30px;">
          <p style="font-size: 10px; color: #555; text-transform: uppercase; letter-spacing: 2px;">Creon Motion | Video Editing & Strategy</p>
        </div>
      </div>
    `;

    // Delivery settings
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass }
    });

    // Send to Admin
    await transporter.sendMail({
      from: smtpUser,
      to: adminEmail,
      replyTo: data.email,
      subject: adminSubject,
      html: adminHtml
    });

    // Send to Client
    await transporter.sendMail({
      from: smtpUser,
      to: data.email,
      replyTo: adminEmail,
      subject: clientSubject,
      html: clientHtml
    });

    console.log('Emails sent successfully.');
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('--- BOOKING ERROR REPORT ---');
    console.error('Message:', error?.message);
    if (error?.response?.data) {
      console.error('Google API Error Details:', JSON.stringify(error.response.data, null, 2));
    }
    console.error('----------------------------');
    
    // Send more specific error to frontend for debugging
    const errorMessage = error?.response?.data?.error_description || error?.message || 'Internal Server Error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
