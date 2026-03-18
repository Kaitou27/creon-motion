import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      company,
      role,
      website,
      contentType,
      contentVolume,
      videoLength,
      productionComplexity,
      investmentRange,
      timeline,
      objective,
      references,
      assetsStatus,
    } = body || {};

    if (!fullName || !email || !company || !role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const toAddress = 'info@creonmotion.com';
    const subject = `New Partnership Application from ${fullName}`;
    
    const fieldsList = [
      ['Name', fullName],
      ['Email', email],
      ['Company', company],
      ['Role', role],
      ['Website', website],
      ['Content Type', contentType],
      ['Content Volume', contentVolume],
      ['Video Length', videoLength],
      ['Complexity', productionComplexity],
      ['Budget', investmentRange],
      ['Timeline', timeline],
      ['Objective', objective],
      ['References', references],
      ['Assets Status', assetsStatus],
    ];

    const text = `A new partnership application has been submitted.\n\n` +
      fieldsList.map(([label, value]) => `${label}: ${value || 'N/A'}`).join('\n');

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #00E0FF;">New Partnership Application</h2>
        <table style="width: 100%; border-collapse: collapse;">
          ${fieldsList.map(([label, value]) => `
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9; color: #666; font-weight: bold; width: 150px;">${label}</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${(value || 'N/A').replace(/\n/g, '<br/>')}</td>
            </tr>
          `).join('')}
        </table>
      </div>
    `;

    // Prefer SMTP if configured
    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          connectionTimeout: 10000, // 10 seconds
          greetingTimeout: 5000,    // 5 seconds
          socketTimeout: 10000,     // 10 seconds
          pool: true,
          maxConnections: 1,
          maxMessages: 1,
        });

        // Verify connection before sending
        await transporter.verify();

        await transporter.sendMail({
          from: smtpUser,
          to: toAddress,
          replyTo: email, // This ensures replies go to the original sender
          subject,
          text,
          html,
        });
      } catch (smtpError) {
        console.error('SMTP Error:', smtpError);
        console.log('Falling back to Resend...');
        
        // Fallback to Resend if SMTP fails
        if (process.env.RESEND_API_KEY) {
          const resend = new Resend(process.env.RESEND_API_KEY as string);
          await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: toAddress,
            replyTo: email,
            subject,
            html,
          });
        } else {
          throw smtpError; // Re-throw if no fallback available
        }
      }
    } else {
      // If using Resend, suppress `any` type warnings
      const resend = new Resend(process.env.RESEND_API_KEY as string);
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: toAddress,
        replyTo: email, // This ensures replies go to the original sender
        subject,
        html,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    // Handle unused variable 'e' by naming error 'error'
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

