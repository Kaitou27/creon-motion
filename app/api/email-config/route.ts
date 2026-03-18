import { NextResponse } from 'next/server';

export async function GET() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS ? '[set]' : '';
  const resendKey = process.env.RESEND_API_KEY ? '[set]' : '';
  const resendFrom = process.env.RESEND_FROM;

  return NextResponse.json({
    envLoaded: true,
    provider: resendKey ? 'resend' : (smtpHost && smtpUser && process.env.SMTP_PASS ? 'smtp' : 'none'),
    smtp: {
      host: smtpHost || '',
      port: smtpPort || '',
      user: smtpUser || '',
      pass: smtpPass,
    },
    resend: {
      apiKey: resendKey,
      from: resendFrom || '',
    },
    nodeEnv: process.env.NODE_ENV,
  });
}
