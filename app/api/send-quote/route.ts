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

    const formatValue = (label: string, value: any) => {
      const val = String(value || '').trim();
      if (!val) return null;

      if (label === 'Video Length') {
        const v = val.toLowerCase();
        if (v.includes('<60s') || v.includes('60s') || v.includes('under 60')) return 'UNDER 60 SECONDS';
        if (v.includes('3-8')) return '3-8 MINUTES';
        if (v.includes('8-15')) return '8-15 MINUTES';
        if (v.includes('15+')) return '15+ MINUTES';
        return val.toUpperCase() + (val.toLowerCase().includes('min') ? '' : ' MINUTES');
      }

      if (label === 'Content Volume') {
        const v = val.toLowerCase();
        if (v.includes('4-8')) return '4-8 VIDEOS PER MONTH';
        if (v.includes('9-15')) return '9-15 VIDEOS PER MONTH';
        if (v.includes('16+')) return '16+ VIDEOS PER MONTH';
        if (v.includes('one-time') || v.includes('one time')) return 'ONE-TIME PROJECT';
      }

      if (label === 'Complexity') {
        const v = val.toLowerCase();
        if (v.includes('basic')) return 'BASIC EDITING AND CAPTION';
        if (v.includes('mixed')) return 'MIXED FOOTAGE AND MOTION GRAPHICS';
        if (v.includes('documentary')) return 'RESEARCH DRIVEN DOCUMENTARY EDITING';
        if (v.includes('high')) return 'HIGH PRODUCTION CONTENT WITH CUSTOM VISUALS';
      }

      if (label === 'Budget') {
        const v = val.toLowerCase();
        if (v.includes('1,000') || v.includes('1k')) return '$1,000 - $,2000';
        if (v.includes('2,500') || v.includes('2.5k')) return '$2,500-$5,000';
        if (v.includes('5,000') || v.includes('5k')) return '$5,000';
        if (v.includes('not sure')) return 'NOT SURE YET';
      }

      if (label === 'Timeline') {
        const v = val.toLowerCase();
        if (v.includes('2-4')) return '2-4 WEEKS';
      }

      if (label === 'Email') return val;
      return val.toUpperCase();
    };

    const fieldsList = [
      ['Name', formatValue('Name', fullName)],
      ['Email', formatValue('Email', email)],
      ['Company', formatValue('Company', company)],
      ['Role', formatValue('Role', role)],
      ['Website', formatValue('Website', website)],
      ['Content Type', formatValue('Content Type', contentType)],
      ['Content Volume', formatValue('Content Volume', contentVolume)],
      ['Video Length', formatValue('Video Length', videoLength)],
      ['Complexity', formatValue('Complexity', productionComplexity)],
      ['Budget', formatValue('Budget', investmentRange)],
      ['Timeline', formatValue('Timeline', timeline)],
      ['Objective', formatValue('Objective', objective)],
      ['References', formatValue('References', references)],
      ['Assets Status', formatValue('Assets Status', assetsStatus)],
    ];

    const text = `A new partnership application has been submitted.\n\n` +
      fieldsList.map(([label, value]) => `${label}: ${value || 'N/A'}`).join('\n');

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @media only screen and (max-width: 480px) {
            .mobile-container { padding: 10px !important; }
            .mobile-header { padding: 25px 20px !important; }
            .mobile-body { padding: 30px 20px !important; }
            .mobile-table-cell { 
              display: block !important; 
              width: 100% !important; 
              padding: 5px 0 !important;
              border-bottom: none !important;
            }
            .mobile-value { 
              border-bottom: 1px solid #00B8CC !important; 
              padding-bottom: 15px !important; 
              margin-bottom: 10px !important;
              word-break: break-word !important;
            }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0;">
        <div class="mobile-container" style="font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 0; background-color: #001A1F; border-radius: 12px; overflow: hidden; box-shadow: 0 12px 32px rgba(0,0,0,0.15); border: 1px solid #00B8CC;">
          <div class="mobile-header" style="background-color: #0A0F1A; padding: 36px 30px; text-align: center; border-bottom: 2px solid #00E0FF;">
            <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 800; letter-spacing: 1px;">CREON MOTION</h1>
            <p style="color: #00E0FF; margin: 10px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">PARTNERSHIP APPLICATION</p>
          </div>
          <div class="mobile-body" style="padding: 40px 30px; background-color: #001A1F;">
            <p style="color: #00E0FF; font-size: 16px; line-height: 1.6; margin-top: 0; margin-bottom: 30px; text-transform: uppercase;">
              A NEW PARTNERSHIP APPLICATION HAS BEEN SUBMITTED BY <strong style="color: #ffffff;">${fullName.toUpperCase()}</strong>. BELOW ARE THE DETAILS OF THE REQUEST:
            </p>
            <div style="background-color: #0A0F1A; border: 1px solid #00B8CC; border-radius: 10px; padding: 10px 25px; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);">
              <table style="width: 100%; border-collapse: collapse;">
                ${fieldsList.map(([label, value]) => `
                  <tr>
                    <td class="mobile-table-cell" style="padding: 18px 10px 18px 0; border-bottom: 1px solid #00B8CC; color: #00E0FF; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600; width: 35%; vertical-align: top;">${label}</td>
                    <td class="mobile-table-cell mobile-value" style="padding: 18px 0; border-bottom: 1px solid #00B8CC; color: #ffffff; font-size: 15px; font-weight: 500; vertical-align: top; word-break: break-all;">
                      ${value ? String(value).replace(/\n/g, '<br/>') : '<span style="color: #007a88; font-style: italic;">Not provided</span>'}
                    </td>
                  </tr>
                `).join('')}
              </table>
            </div>
          </div>
          <div style="background-color: #001A1F; padding: 24px 30px; text-align: center; border-top: 1px solid #00B8CC;">
            <p style="margin: 0; font-size: 11px; color: #00E0FF; text-transform: uppercase; letter-spacing: 1px;">
              CREON MOTION AUTOMATED SYSTEM
            </p>
          </div>
        </div>
      </body>
      </html>
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
      if (!process.env.RESEND_API_KEY) {
        console.error('Missing RESEND_API_KEY environment variable. Email could not be sent.');
        return NextResponse.json(
          { error: 'Server email configuration is missing (SMTP or Resend)' },
          { status: 500 }
        );
      }

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

