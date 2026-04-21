import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/app/lib/supabaseAdmin';
import crypto from 'crypto';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const token = searchParams.get('token');

    if (!id || !token || id === 'undefined') {
      return new NextResponse(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Invalid Link | Creon Motion</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
             body { background-color: #001A1F; color: white; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; overflow: hidden; }
             .card { background: rgba(2, 13, 18, 0.6); padding: 50px; border-radius: 40px; border: 1px solid rgba(255, 255, 255, 0.05); text-align: center; max-width: 450px; position: relative; backdrop-filter: blur(20px); }
             h1 { color: #FF4D4D; font-size: 32px; font-weight: 900; margin-bottom: 20px; text-transform: uppercase; letter-spacing: -1px; }
             p { color: #888; line-height: 1.6; font-size: 16px; margin-bottom: 30px; }
             .glow { position: absolute; width: 300px; height: 300px; background: rgba(255, 77, 77, 0.1); border-radius: 50%; filter: blur(80px); top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: -1; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="glow"></div>
            <h1>Invalid Link</h1>
            <p>This approval link is missing data or was generated incorrectly. Please check if the feedback was submitted properly.</p>
          </div>
        </body>
        </html>
      `, { headers: { 'Content-Type': 'text/html' } });
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

    // Update Supabase using ADMIN client to bypass RLS
    const { error } = await supabaseAdmin
      .from('testimonials')
      .update({ approved: true })
      .eq('id', id);

    if (error) {
      console.error('Approval Error:', error);
      return new NextResponse('Database error occurred', { status: 500 });
    }

    // Return Premium Success Page
    return new NextResponse(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Success | Creon Motion</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.8; } }
          body { 
            background-color: #001A1F; 
            color: white; 
            font-family: sans-serif; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            height: 100vh; 
            margin: 0; 
            overflow: hidden;
            background-image: radial-gradient(circle at 1px 1px, rgba(0, 224, 255, 0.05) 1px, transparent 0);
            background-size: 40px 40px;
          }
          .card { 
            background: rgba(2, 13, 18, 0.6); 
            padding: 60px 40px; 
            border-radius: 40px; 
            border: 1px solid rgba(255, 255, 255, 0.05); 
            text-align: center; 
            max-width: 450px; 
            position: relative; 
            backdrop-filter: blur(30px);
            box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
          }
          .glow { 
            position: absolute; 
            width: 400px; 
            height: 400px; 
            background: rgba(0, 224, 255, 0.05); 
            border-radius: 50%; 
            filter: blur(100px); 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%); 
            z-index: -1;
            animation: pulse 4s infinite ease-in-out;
          }
          .icon-box {
            width: 80px;
            height: 80px;
            background: rgba(0, 224, 255, 0.1);
            border: 1px solid rgba(0, 224, 255, 0.2);
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px auto;
            color: #00E0FF;
          }
          h1 { 
            color: white; 
            font-size: 32px; 
            font-weight: 900; 
            margin-bottom: 20px; 
            text-transform: uppercase; 
            letter-spacing: -0.5px;
          }
          h1 span { color: #00E0FF; }
          p { 
            color: #888; 
            line-height: 1.6; 
            font-size: 16px; 
            margin-bottom: 40px; 
            padding: 0 20px;
          }
          .button { 
            display: inline-block; 
            padding: 18px 40px; 
            background: linear-gradient(135deg, #00E0FF 0%, #00B8CC 100%); 
            color: #001A1F; 
            text-decoration: none; 
            font-weight: 900; 
            border-radius: 16px; 
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 14px;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 224, 255, 0.2);
          }
          .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(0, 224, 255, 0.3);
          }
          .footer {
            margin-top: 40px;
            font-size: 10px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: rgba(255,255,255,0.1);
          }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="glow"></div>
          <div class="icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <h1>Feedback <span>Approved</span></h1>
          <p>The testimonial has been successfully published and is now live on your website's homepage.</p>
          <a href="/" class="button">View Homepage</a>
          <div class="footer">Creon Motion Admin System</div>
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
