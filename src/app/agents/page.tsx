'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { 
  TruckIcon, 
  CurrencyDollarIcon, 
  ComputerDesktopIcon, 
  PhoneIcon, 
  XMarkIcon,
  CheckCircleIcon,
  UserGroupIcon,
  MapIcon,
  ChartBarIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline'

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: 'Up to 85% Commission',
    description: 'Industry-leading commission rates with no hidden fees or startup costs.'
  },
  {
    icon: ComputerDesktopIcon,
    title: 'Advanced Technology',
    description: 'Access to real-time tracking, TMS platform, and mobile apps for seamless operations.'
  },
  {
    icon: PhoneIcon,
    title: '24/7 Support',
    description: 'Round-the-clock support team to help you succeed and grow your business.'
  },
  {
    icon: XMarkIcon,
    title: 'No Startup Fees',
    description: 'Zero upfront costs - start earning immediately with our proven system.'
  },
  {
    icon: MapIcon,
    title: 'National Coverage',
    description: 'Access to nationwide drayage & intermodal opportunities across all major markets.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Full Compliance',
    description: 'Complete regulatory support and insurance coverage for peace of mind.'
  }
]

const howItWorks = [
  {
    icon: DocumentTextIcon,
    title: 'Apply Online',
    description: 'Complete our streamlined application form with your business details and requirements.'
  },
  {
    icon: AcademicCapIcon,
    title: 'Onboarding & Training',
    description: 'Receive comprehensive training on our systems, processes, and best practices.'
  },
  {
    icon: TruckIcon,
    title: 'First Load Delivered',
    description: 'Start with your first load and begin earning commissions immediately.'
  },
  {
    icon: ChartBarIcon,
    title: 'Scale Business',
    description: 'Grow your territory and increase revenue with our proven expansion strategies.'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Agent, Los Angeles',
    content: 'Freedom Expedited gave me everything I needed to succeed. The technology is incredible and the support team is always there when I need them.',
    image: '/images/hero-truck.jpg'
  },
  {
    name: 'Mike Rodriguez',
    role: 'Agent, Chicago',
    content: 'I went from 5 trucks to 25 in just 18 months. The commission structure and national coverage made all the difference.',
    image: '/images/hero-truck.jpg'
  },
  {
    name: 'Jennifer Chen',
    role: 'Agent, Miami',
    content: 'The onboarding process was smooth and the ongoing support is exceptional. I couldn\'t ask for a better partner.',
    image: '/images/hero-truck.jpg'
  }
]

const faqs = [
  {
    question: 'What are the minimum requirements to become an agent?',
    answer: 'We require a minimum of 10 trucks and $1 million in annual revenue for consideration. This ensures you have the capacity to handle our volume and maintain service quality.'
  },
  {
    question: 'How long does the onboarding process take?',
    answer: 'The onboarding process typically takes 2-4 weeks, including training, system setup, and initial load assignments. We work closely with you to ensure a smooth transition.'
  },
  {
    question: 'What technology and tools will I have access to?',
    answer: 'You\'ll have access to our proprietary TMS platform, real-time tracking systems, mobile apps, and comprehensive reporting tools. All designed to maximize your efficiency and profitability.'
  },
  {
    question: 'What territories are available?',
    answer: 'We have territories open in most major markets across the United States. Contact us to discuss specific opportunities in your area of interest.'
  },
  {
    question: 'How is commission calculated and paid?',
    answer: 'Commissions are calculated based on load volume and performance metrics, with rates up to 85%. Payments are processed weekly with detailed reporting.'
  },
  {
    question: 'What support do you provide to agents?',
    answer: 'We provide 24/7 operational support, marketing materials, compliance assistance, insurance coverage, and ongoing training to help you succeed and grow.'
  }
]

export default function AgentApplicationPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    trucks: '',
    revenue: '',
    territory: '',
    experience: '',
    message: ''
  })
  const [formStep, setFormStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/agent-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application')
      }

      console.log('Application submitted successfully:', result)
      setFormStep(4) // Show success message
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (formStep < 3) setFormStep(formStep + 1)
  }

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-truck.jpg"
            alt="Freedom Expedited Truck"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Launch Your Own Agent Business with Freedom Expedited
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
            Up to 85% commission, full support, nationwide drayage & intermodal coverage.
          </p>
          <button
            onClick={scrollToForm}
            className="btn-primary text-lg px-8 py-4 animate-slide-up"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Join Freedom Expedited?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join a network of successful agents who trust Freedom Expedited to grow their business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your journey to becoming a successful Freedom Expedited agent
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hear from our successful agents
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Apply to Become an Agent
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Minimum requirements: 10 trucks and $1M in revenue
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Step {formStep} of 3</span>
                  <span className="text-sm text-gray-500">{Math.round((formStep / 3) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(formStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              {formStep === 4 ? (
                <div className="text-center py-12">
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for your interest in becoming a Freedom Expedited agent. 
                    Our team will review your application and contact you within 2-3 business days.
                  </p>
                  <button
                    onClick={() => setFormStep(1)}
                    className="btn-primary"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Company Information</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Company Name *</label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Contact Name *</label>
                          <input
                            type="text"
                            name="contactName"
                            value={formData.contactName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Business Requirements</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Number of Trucks *</label>
                          <input
                            type="number"
                            name="trucks"
                            value={formData.trucks}
                            onChange={handleInputChange}
                            min="10"
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                          />
                          <p className="text-sm text-gray-500 mt-1">Minimum 10 trucks required</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Annual Revenue *</label>
                          <select
                            name="revenue"
                            value={formData.revenue}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                          >
                            <option value="">Select revenue range</option>
                            <option value="1-2M">$1M - $2M</option>
                            <option value="2-5M">$2M - $5M</option>
                            <option value="5-10M">$5M - $10M</option>
                            <option value="10M+">$10M+</option>
                          </select>
                          <p className="text-sm text-gray-500 mt-1">Minimum $1M required</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Preferred Territory</label>
                          <input
                            type="text"
                            name="territory"
                            value={formData.territory}
                            onChange={handleInputChange}
                            placeholder="e.g., Los Angeles, CA"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Years in Transportation</label>
                          <input
                            type="number"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            min="0"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Additional Information</h3>
                      <div>
                        <label className="block text-sm font-medium mb-2">Tell us about your business</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          placeholder="Describe your current operations, goals, and why you're interested in becoming a Freedom Expedited agent..."
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                        ></textarea>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between pt-6">
                    {formStep > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-secondary"
                      >
                        Previous
                      </button>
                    )}
                    <div className="ml-auto">
                      {formStep < 3 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          className="btn-primary"
                        >
                          Next
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-primary disabled:opacity-50"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about becoming a Freedom Expedited agent
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-sm"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center">
                    <QuestionMarkCircleIcon className="w-5 h-5 text-primary mr-3" />
                    <span className="font-semibold">{faq.question}</span>
                  </div>
                  {activeFAQ === index ? (
                    <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {activeFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful agents who trust Freedom Expedited to grow their business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="btn-secondary"
            >
              Apply Now
            </button>
            <a
              href="/contact"
              className="btn-secondary bg-white text-primary hover:bg-gray-100"
            >
              Talk to an Advisor
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
