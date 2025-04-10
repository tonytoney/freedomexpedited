export const runtime = 'nodejs'; // 👈 force node environment

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type { TransportOptions } from 'nodemailer'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, phone, subject, message } = data

    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD || !process.env.SMTP_FROM_EMAIL) {
      console.error('Missing SMTP configuration')
      return NextResponse.json({ 
        success: false, 
        error: 'SMTP configuration is missing' 
      }, { status: 500 })
    }

    // 🔍 DEBUG: Log SMTP configuration (without password)
    console.log('SMTP Config:', { 
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      from: process.env.SMTP_FROM_EMAIL
    })
    
    // Create a transporter using SMTP with SSL/TLS from .env settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,              // ✅ use STARTTLS port
      secure: false,          // ✅ must be false for port 587
      auth: {
        type: 'LOGIN',        // ✅ still valid
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      },
      authMethod: 'LOGIN',
      tls: {
        minVersion: 'TLSv1.2'
      }
    } as TransportOptions);
    

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.SMTP_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    try {
      // Send email
      const info = await transporter.sendMail(mailOptions)
      console.log('Email sent successfully:', info.messageId)

      // Ensure we have a clean, properly formatted response
      const response = NextResponse.json(
        { success: true, message: 'Email sent successfully' }, 
        { status: 200 }
      );
      
      // Add CORS and cache control headers
      response.headers.set('Cache-Control', 'no-store');
      
      return response;
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      
      // Ensure proper error response
      return NextResponse.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to process request'
    }, { status: 500 })
  }
} 