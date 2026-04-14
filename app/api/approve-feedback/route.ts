import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/lib/supabase';
import crypto from 'crypto';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const token = searchParams.get('token');

    if (!id || !token) {
      return new NextResponse('Missing parameters', { status: 400 });
    }

    // Verify token
    const secret = process.env.APPROVE_SECRET || '';
    const expectedToken = crypto
      .createHash('sha256')
      .update(`${id}-${secret}`)
      .digest('hex');

    if (token !== expectedToken) {
      return new NextResponse('Invalid or expired token', { status: 403 });
    }

    // Update Supabase
    const { error } = await supabase
      .from('testimonials')
      .update({ approved: true })
      .eq('id', id);

    if (error) {
      console.error('Approval Error:', error);
      return new NextResponse('Database error occurred', { status: 500 });
    }

    // Return Success Page
    return new NextResponse(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Testimonial Approved</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { background-color: #001A1F; color: white; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
          .card { background: #0A0F1A; padding: 40px; border-radius: 24px; border: 1px solid #00E0FF; text-align: center; max-width: 400px; box-shadow: 0 0 50px rgba(0, 224, 255, 0.2); }
          h1 { color: #00E0FF; font-size: 28px; margin-bottom: 20px; }
          p { color: #ccc; line-height: 1.6; }
          .button { display: inline-block; margin-top: 30px; padding: 12px 30px; background: #00E0FF; color: #001A1F; text-decoration: none; font-weight: bold; border-radius: 12px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Successfully Approved!</h1>
          <p>The testimonial is now live on the Creon Motion homepage. Thank you for your review!</p>
          <a href="/" class="button">VIEW HOMEPAGE</a>
        </div>
      </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' }
    });

  } catch (error) {
    console.error('Internal Error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
