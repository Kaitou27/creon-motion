import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, rating, message } = body;

    if (!rating || !message) {
      return NextResponse.json({ error: 'Rating and message are required' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const toAddress = 'info@creonmotion.com';
    const subject = `⭐ NEW FEEDBACK: ${rating}/5 from ${name || 'Anonymous'}`;

    const text = `NEW FEEDBACK SUBMISSION\n\nName: ${name || 'Anonymous'}\nEmail: ${email || 'Not provided'}\nRating: ${rating}/5\nMessage: ${message}`;

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
              <p style="margin: 5px 0; font-size: 16px; font-weight: bold;">${name || 'Anonymous'}</p>
              <p style="margin: 0; font-size: 14px; color: #00B8CC;">${email || 'Not provided'}</p>
            </div>
            <div style="background-color: #0A0F1A; padding: 20px; border-radius: 8px; border: 1px solid rgba(0, 224, 255, 0.1);">
              <span style="color: #00E0FF; font-size: 11px; font-weight: bold; text-transform: uppercase;">Message</span>
              <p style="margin: 10px 0 0 0; font-size: 15px; line-height: 1.6; color: rgba(255, 255, 255, 0.9);">${message}</p>
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
