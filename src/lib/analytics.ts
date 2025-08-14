// Google Analytics utility functions
export const GA_TRACKING_ID = 'G-8YNEPVJ5VT'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formName,
  })
}

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  event({
    action: 'button_click',
    category: 'engagement',
    label: buttonName,
  })
}

// Track page views
export const trackPageView = (pageName: string) => {
  event({
    action: 'page_view',
    category: 'navigation',
    label: pageName,
  })
}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}
