import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = body || {};

    // Validate absolute minimum required fields
    if (!data.fullName || !data.email || !data.company) {
      return NextResponse.json({ error: 'Missing required fields (Name, Email, or Brand)' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const toAddress = 'info@creonmotion.com';
    const subject = `🚀 PROJECT DISCOVERY: ${data.company} - ${data.fullName}`;

    // Helper to format values for the email
    const format = (val: any) => {
      if (Array.isArray(val)) return val.join(', ').toUpperCase();
      if (typeof val === 'string') return val.trim() ? val.toUpperCase() : 'NOT PROVIDED';
      return val ? String(val).toUpperCase() : 'NOT PROVIDED';
    };

    const sections = [
      {
        title: "1. CONTACT & BRAND",
        fields: [
          ["Full Name", data.fullName],
          ["Email", data.email],
          ["Company", data.company],
          ["Socials/Website", data.socials]
        ]
      },
      {
        title: "2. PROJECT CONTEXT",
        fields: [
          ["Trigger", data.trigger],
          ["Success Impact", data.successImpact]
        ]
      },
      {
        title: "3. OBJECTIVE CLARITY",
        fields: [
          ["Primary Goal", data.primaryGoal],
          ["Success Metric", data.successMetric]
        ]
      },
      {
        title: "4. AUDIENCE BREAKDOWN",
        fields: [
          ["Audience desc", data.audience],
          ["Knowledge level", data.audienceKnowledge]
        ]
      },
      {
        title: "5. CONTENT DIRECTION",
        fields: [
          ["Has Script?", data.hasScript],
          ["Has Voiceover?", data.hasVoiceover],
          ["Has Footage?", data.hasFootage],
          ["Nothing yet?", data.nothingYet],
          ["Concept/Idea", data.ideaDescription]
        ]
      },
      {
        title: "6. CREATIVE DIRECTION",
        fields: [
          ["References", data.references],
          ["Likes about ref", data.likeAboutRef],
          ["Production Level", data.productionLevel],
          ["Complexity", data.complexity]
        ]
      },
      {
        title: "7. DELIVERABLES",
        fields: [
          ["Video Length", data.videoLength],
          ["Video Count", data.videoCount],
          ["Target platform", data.platform],
          ["Format", data.format]
        ]
      },
      {
        title: "8. TIMELINE",
        fields: [
          ["Ideal Deadline", data.deadline],
          ["Is Flexible?", data.deadlineFlexible]
        ]
      },
      {
        title: "9. BUDGET ALIGNMENT",
        fields: [
          ["Investment Range", data.investmentRange]
        ]
      },
      {
        title: "10. COLLABORATION FIT",
        fields: [
          ["Work Style", data.workStyle],
          ["Looking For", data.lookingFor]
        ]
      },
      {
        title: "11. FINAL THOUGHTS",
        fields: [
          ["Why Creon?", data.whyUs]
        ]
      }
    ];

    const text = `NEW PROJECT DISCOVERY SUBMISSION\n\n` + 
      sections.map(s => `--- ${s.title} ---\n` + s.fields.map(([l, v]) => `${l}: ${format(v)}`).join('\n')).join('\n\n');

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @media only screen and (max-width: 480px) {
            .mobile-container { padding: 10px !important; }
            .mobile-header { padding: 25px 20px !important; }
            .mobile-body { padding: 20px 15px !important; }
            .section-title { font-size: 14px !important; }
            .field-row { display: block !important; margin-bottom: 15px !important; }
            .field-label { width: 100% !important; display: block !important; margin-bottom: 4px !important; border-bottom: none !important; }
            .field-value { width: 100% !important; display: block !important; padding-top: 0 !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
        <div class="mobile-container" style="font-family: 'Inter', system-ui, -apple-system, sans-serif; max-width: 700px; margin: 40px auto; background-color: #001A1F; border-radius: 16px; overflow: hidden; border: 1px solid #00B8CC; box-shadow: 0 20px 50px rgba(0,0,0,0.3);">
          
          <div class="mobile-header" style="background-color: #0A0F1A; padding: 40px; text-align: center; border-bottom: 3px solid #00E0FF;">
             <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">CREON MOTION</h1>
             <p style="color: #00E0FF; margin: 10px 0 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 4px; font-weight: 700;">PROJECT DISCOVERY REPORT</p>
          </div>

          <div class="mobile-body" style="padding: 40px;">
            <p style="color: #00E0FF; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; border-left: 4px solid #00E0FF; padding-left: 15px;">
              A new discovery brief has been received from <strong style="color: #ffffff;">${data.fullName.toUpperCase()}</strong> regarding <strong style="color: #ffffff;">${data.company.toUpperCase()}</strong>.
            </p>

            ${sections.map(section => `
              <div style="margin-bottom: 40px; background-color: #0A0F1A; border: 1px solid #00E0FF/20; border-radius: 12px; overflow: hidden;">
                <div class="section-title" style="background-color: #00E0FF; color: #001A1F; padding: 12px 20px; font-size: 13px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase;">
                  ${section.title}
                </div>
                <div style="padding: 20px;">
                  <table style="width: 100%; border-collapse: collapse;">
                    ${section.fields.map(([label, value]) => `
                      <tr class="field-row">
                        <td class="field-label" style="padding: 12px 0; border-bottom: 1px solid #00B8CC/10; color: #00B8CC; font-size: 10px; text-transform: uppercase; font-weight: 700; width: 30%; vertical-align: top; letter-spacing: 1px;">${label}</td>
                        <td class="field-value" style="padding: 12px 0; border-bottom: 1px solid #00B8CC/10; color: #ffffff; font-size: 14px; font-weight: 500; vertical-align: top; word-break: break-word;">
                          ${value ? String(value).replace(/\n/g, '<br/>').toUpperCase() : '<span style="color: #007a88; font-style: italic;">NOT PROVIDED</span>'}
                        </td>
                      </tr>
                    `).join('')}
                  </table>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="background-color: #0A0F1A; padding: 30px; text-align: center; border-top: 1px solid #00B8CC;">
            <p style="margin: 0; font-size: 12px; color: #00E0FF; text-transform: uppercase; letter-spacing: 2px; font-weight: 700;">
              CREON MOTION STRATEGY SYSTEM
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email delivery logic (SMTP with Resend Fallback)
    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: { user: smtpUser, pass: smtpPass },
          connectionTimeout: 10000
        });

        await transporter.verify();
        await transporter.sendMail({
          from: smtpUser,
          to: toAddress,
          replyTo: data.email,
          subject,
          text,
          html,
        });
      } catch (smtpError) {
        console.error('SMTP Error:', smtpError);
        if (process.env.RESEND_API_KEY) {
          const resend = new Resend(process.env.RESEND_API_KEY as string);
          await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: toAddress,
            replyTo: data.email,
            subject,
            html,
          });
        } else { throw smtpError; }
      }
    } else if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY as string);
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: toAddress,
        replyTo: data.email,
        subject,
        html,
      });
    } else {
      return NextResponse.json({ error: 'Email configuration missing' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
