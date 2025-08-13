import { NextRequest, NextResponse } from 'next/server'

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

    // For now, we'll just log the data and return success
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
