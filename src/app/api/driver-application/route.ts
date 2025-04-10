import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { TransportOptions } from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, experience, cdlNumber, additionalInfo } = data;

    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD || !process.env.SMTP_FROM_EMAIL) {
      console.error('Missing SMTP configuration');
      return NextResponse.json({ 
        success: false, 
        error: 'SMTP configuration is missing' 
      }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      },
      tls: {
        minVersion: 'TLSv1.2'
      }
    } as TransportOptions);

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.SMTP_USER,
      subject: 'New Driver Application',
      html: `
        <h2>New Driver Application</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Years of Experience:</strong> ${experience}</p>
        <p><strong>CDL Number:</strong> ${cdlNumber}</p>
        <p><strong>Additional Information:</strong></p>
        <p>${additionalInfo}</p>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Application email sent successfully:', info.messageId);
      return NextResponse.json({ success: true, message: 'Application sent successfully' }, { status: 200 });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      return NextResponse.json({ success: false, error: 'Failed to send application' }, { status: 500 });
    }
  } catch (error) {
    console.error('Application form error:', error);
    return NextResponse.json({ success: false, error: 'Failed to process request' }, { status: 500 });
  }
} 