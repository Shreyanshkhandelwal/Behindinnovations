import { useState } from 'react'
import { TOPIC_LIST, TOPICS } from '../data/topics.js'

const FIELD =
  'w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm'

// Shared by PartnerModal and the Contact page. There is no backend yet:
// onSubmit is the hook to wire one up (receives { name, email, topic, message }).
export default function InquiryForm({ defaultTopic = TOPICS.driver, onSubmit, onDone, doneLabel = 'Close' }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    onSubmit?.(data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center font-bold text-xl">
          ✓
        </div>
        <h4 className="font-heading text-xl font-bold text-slate-900">Inquiry Received</h4>
        <p className="text-sm text-slate-600">
          Thank you for reaching out to Behind Innovations. Our team will review your message.
        </p>
        {onDone && (
          <button onClick={onDone} className="px-8 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs">
            {doneLabel}
          </button>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
      <div>
        <label htmlFor="inq-name" className="block font-bold text-slate-700 mb-1">Full Name</label>
        <input id="inq-name" name="name" type="text" required placeholder="Your name" className={FIELD} />
      </div>
      <div>
        <label htmlFor="inq-email" className="block font-bold text-slate-700 mb-1">Email Address</label>
        <input id="inq-email" name="email" type="email" required placeholder="you@example.com" className={FIELD} />
      </div>
      <div>
        <label htmlFor="inq-topic" className="block font-bold text-slate-700 mb-1">Inquiry Topic</label>
        <select id="inq-topic" name="topic" defaultValue={defaultTopic} className={FIELD}>
          {TOPIC_LIST.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="inq-message" className="block font-bold text-slate-700 mb-1">Message</label>
        <textarea id="inq-message" name="message" rows="3" required placeholder="How can we help?" className={FIELD} />
      </div>
      <button
        type="submit"
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold uppercase text-xs shadow-md"
      >
        Submit Inquiry
      </button>
    </form>
  )
}
