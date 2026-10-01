import PageHeader from '../components/PageHeader.jsx'
import InquiryForm from '../components/InquiryForm.jsx'
import { CONTACT } from '../data/contact.js'
import { TOPICS } from '../data/topics.js'

const CHANNELS = [
  { label: 'General enquiries', value: CONTACT.general },
  { label: 'Partnerships', value: CONTACT.partnerships },
  { label: 'Investor relations', value: CONTACT.investors },
]

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <PageHeader title="Let's talk." />

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Whether you're a rider, a driver, a potential partner, or an investor interested in BI's roadmap — we'd
          like to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {CHANNELS.map((c) => (
              <div key={c.label} className="glass-card-light p-6 rounded-2xl space-y-1">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block">{c.label}</span>
                {c.value ? (
                  <a href={`mailto:${c.value}`} className="text-sm font-semibold text-slate-800 hover:text-sky-600">
                    {c.value}
                  </a>
                ) : (
                  <span className="text-sm text-slate-400 italic">Email address to be added</span>
                )}
              </div>
            ))}
            <div className="glass-card-light p-6 rounded-2xl space-y-1">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block">Website</span>
              <span className="text-sm font-semibold text-slate-800 break-all">{CONTACT.website}</span>
            </div>
          </div>

          <div className="glass-card-light p-8 sm:p-10 rounded-3xl space-y-5">
            <h3 className="font-heading text-2xl font-bold text-slate-900">Contact form</h3>
            <InquiryForm defaultTopic={TOPICS.general} />
          </div>
        </div>
      </div>
    </section>
  )
}
