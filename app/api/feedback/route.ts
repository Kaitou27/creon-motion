import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import { supabaseAdmin } from '@/app/lib/supabaseAdmin';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, rating, message } = body;

    if (!rating || !message) {
      return NextResponse.json({ error: 'Rating and message are required' }, { status: 400 });
    }

    // Save to Supabase using ADMIN client to bypass RLS
    const { data: dbData, error: dbError } = await supabaseAdmin
      .from('testimonials')
      .insert([
        { 
          name: name || 'Anonymous', 
          email: email || null, 
          rating: Number(rating), 
          text: message 
        }
      ])
      .select('id');

    if (dbError) {
      console.error('Feedback API: Supabase Error:', dbError);
      return NextResponse.json({ error: 'Failed to save feedback' }, { status: 500 });
    }

    const insertedId = dbData?.[0]?.id;
    if (!insertedId) {
      return NextResponse.json({ error: 'Failed to retrieve entry ID' }, { status: 500 });
    }

    const secret = process.env.APPROVE_SECRET || '';
    
    // Generate secure token for one-click approval
    const token = crypto
      .createHash('sha256')
      .update(`${insertedId}-${secret}`)
      .digest('hex');

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const approveUrl = `${baseUrl}/api/approve-feedback?id=${insertedId}&token=${token}`;

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const toAddress = 'info@creonmotion.com';
    const subject = `⭐ NEW FEEDBACK: ${rating}/5 from ${name || 'Anonymous'}`;

    const text = `NEW FEEDBACK SUBMISSION\n\nName: ${name || 'Anonymous'}\nEmail: ${email || 'Not provided'}\nRating: ${rating}/5\nMessage: ${message}\n\nAPPROVE & PUBLISH: ${approveUrl}`;

    const html = `
      <!DOCTYPE html>
      <html>
      <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: sans-serif;">
        <div style="max-width: 600px; margin: 40px auto; background-color: #001A1F; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #00E0FF;">
          <div style="background-color: #0A0F1A; padding: 30px; text-align: center; border-bottom: 2px solid #00E0FF;">
            <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px;">CREON MOTION</h1>
            <p style="color: #00E0FF; margin: 5px 0 0 0; font-size: 12px; letter-spacing: 3px;">FEEDBACK REPORT</p>
          </div>
          <div style="padding: 40px;">
            <div style="margin-bottom: 30px;">
              <span style="color: #00E0FF; font-size: 12px; font-weight: bold; text-transform: uppercase;">Rating</span>
              <div style="font-size: 32px; font-weight: 900; color: #00E0FF; margin-top: 5px;">${rating} / 5</div>
            </div>
            <div style="margin-bottom: 20px;">
              <span style="color: #00E0FF; font-size: 12px; font-weight: bold; text-transform: uppercase;">From</span>
              <p style="margin: 5px 0; font-size: 16px; font-weight: bold;"><span style="color: #00B8CC; font-weight: normal; font-size: 13px;">Name:</span> ${name || 'Anonymous'}</p>
              <p style="margin: 0; font-size: 14px; color: #00B8CC;"><span style="color: #00B8CC; font-weight: normal; font-size: 13px;">Email:</span> ${email || 'Not provided'}</p>
            </div>
            <div style="background-color: #0A0F1A; padding: 20px; border-radius: 8px; border: 1px solid rgba(0, 224, 255, 0.1); margin-bottom: 30px;">
              <span style="color: #00E0FF; font-size: 11px; font-weight: bold; text-transform: uppercase;">Message</span>
              <p style="margin: 10px 0 0 0; font-size: 15px; line-height: 1.6; color: rgba(255, 255, 255, 0.9);">${message}</p>
            </div>

            <div style="text-align: center; margin-top: 40px;">
              <a href="${approveUrl}" style="display: inline-block; background-color: #00E0FF; color: #001A1F; padding: 18px 36px; border-radius: 12px; font-weight: 900; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; font-size: 14px; box-shadow: 0 10px 20px rgba(0,224,255,0.2);">
                APPROVE & PUBLISH
              </a>
              <p style="color: #666; font-size: 10px; margin-top: 15px;">Clicking this will immediately show the testimonial on your homepage.</p>
            </div>
          </div>
          <div style="background-color: #0A0F1A; padding: 20px; text-align: center; font-size: 10px; color: rgba(0, 224, 255, 0.5); letter-spacing: 1px;">
            &copy; CREON MOTION INTERNAL FEEDBACK SYSTEM
          </div>
        </div>
      </body>
      </html>
    `;

    // Delivery logic
    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: { user: smtpUser, pass: smtpPass },
        });
        await transporter.sendMail({ from: smtpUser, to: toAddress, subject, text, html });
      } catch (smtpError) {
        console.error('SMTP Error:', smtpError);
        if (process.env.RESEND_API_KEY) {
          const resend = new Resend(process.env.RESEND_API_KEY);
          await resend.emails.send({ from: 'onboarding@resend.dev', to: toAddress, subject, html });
        } else { throw smtpError; }
      }
    } else if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({ from: 'onboarding@resend.dev', to: toAddress, subject, html });
    } else {
      return NextResponse.json({ error: 'Email configuration missing' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Feedback Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
