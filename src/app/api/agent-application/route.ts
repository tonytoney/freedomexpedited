export const runtime = 'nodejs'; // 👈 force node environment

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type { TransportOptions } from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      companyName,
      contactName,
      email,
      phone,
      trucks,
      revenue,
      territory,
      experience,
      message
    } = body

    // Basic validation
    if (!companyName || !contactName || !email || !phone || !trucks || !revenue) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate minimum requirements
    const truckCount = parseInt(trucks)
    if (truckCount < 10) {
      return NextResponse.json(
        { error: 'Minimum 10 trucks required' },
        { status: 400 }
      )
    }

    // Validate revenue requirement
    const revenueRanges = ['1-2M', '2-5M', '5-10M', '10M+']
    if (!revenueRanges.includes(revenue)) {
      return NextResponse.json(
        { error: 'Invalid revenue range selected' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Phone validation (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    const cleanPhone = phone.replace(/\D/g, '')
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notifications
    // 3. Create CRM record
    // 4. Send confirmation email to applicant

    // Log the application data
    console.log('Agent Application Received:', {
      companyName,
      contactName,
      email,
      phone,
      trucks: truckCount,
      revenue,
      territory,
      experience,
      message,
      submittedAt: new Date().toISOString()
    })

    // Send email notifications
    const applicationId = `AG-${Date.now()}`

    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD || !process.env.SMTP_FROM_EMAIL) {
      console.error('Missing SMTP configuration')
      // Don't fail the application if email config is missing
    } else {
      try {
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

        // Email to admin team
        const adminMailOptions = {
          from: process.env.SMTP_FROM_EMAIL,
          to: process.env.SMTP_USER,
          subject: `New Agent Application: ${companyName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #E67E22;">New Agent Application</h2>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">Application Details</h3>
                <p><strong>Application ID:</strong> ${applicationId}</p>
                <p><strong>Company Name:</strong> ${companyName}</p>
                <p><strong>Contact Name:</strong> ${contactName}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                <p><strong>Number of Trucks:</strong> ${truckCount}</p>
                <p><strong>Annual Revenue:</strong> ${revenue}</p>
                <p><strong>Preferred Territory:</strong> ${territory || 'Not specified'}</p>
                <p><strong>Years in Transportation:</strong> ${experience || 'Not specified'}</p>
              </div>
              
              ${message ? `
              <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h4 style="margin-top: 0;">Additional Information:</h4>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              ` : ''}
              
              <p style="color: #6c757d; font-size: 14px;">
                This application was submitted on ${new Date().toLocaleString()}
              </p>
            </div>
          `
        }

        // Email to applicant
        const applicantMailOptions = {
          from: process.env.SMTP_FROM_EMAIL,
          to: email,
          subject: 'Your Freedom Expedited Agent Application',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #E67E22; margin-bottom: 10px;">Freedom Expedited</h1>
                <h2 style="color: #333;">Thank you for your application!</h2>
              </div>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p>Dear ${contactName},</p>
                
                <p>We have received your application to become a Freedom Expedited agent. Our team will carefully review your information and contact you within <strong>2-3 business days</strong>.</p>
                
                <div style="background-color: #fff; padding: 15px; border-radius: 8px; margin: 20px 0;">
                  <h4 style="margin-top: 0; color: #E67E22;">Application Summary</h4>
                  <p><strong>Application ID:</strong> ${applicationId}</p>
                  <p><strong>Company:</strong> ${companyName}</p>
                  <p><strong>Contact:</strong> ${contactName}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Phone:</strong> ${phone}</p>
                </div>
                
                <p>If you have any questions in the meantime, please don't hesitate to contact us at <a href="mailto:info@freedomexpedited.com">info@freedomexpedited.com</a> or call us directly.</p>
                
                <p>We look forward to the possibility of working together!</p>
                
                <p>Best regards,<br>
                <strong>The Freedom Expedited Team</strong></p>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                <p style="color: #6c757d; font-size: 12px;">
                  This is an automated message. Please do not reply to this email.
                </p>
              </div>
            </div>
          `
        }

        // Send email to admin team
        await transporter.sendMail(adminMailOptions)
        
        // Send confirmation email to applicant
        await transporter.sendMail(applicantMailOptions)
        
        console.log('Email notifications sent successfully')
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Don't fail the application if email fails
      }
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully. We will contact you within 2-3 business days.',
        applicationId: `AG-${Date.now()}`
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Agent application error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
