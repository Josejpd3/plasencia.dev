// Declare global gtag function
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID as string

// Logs page views
export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

// Logs specific events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
} 