import { useEffect } from 'react'
import InquiryForm from './InquiryForm.jsx'

export default function PartnerModal({ open, topic, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="partner-modal-title"
    >
      <div className="bg-white p-8 sm:p-10 rounded-3xl max-w-lg w-full relative border border-slate-200 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 p-1" aria-label="Close">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 id="partner-modal-title" className="font-heading text-2xl font-bold text-slate-900 mb-2">Partner With Us</h3>
        <p className="text-xs text-slate-500 mb-6">
          Inquire regarding partnerships, ride app driver onboarding, the logistics ecosystem, or the long-term
          space mission.
        </p>
        {/* key remounts the form (and resets its success state) each time the modal opens with a new topic */}
        <InquiryForm key={topic} defaultTopic={topic} onDone={onClose} />
      </div>
    </div>
  )
}
