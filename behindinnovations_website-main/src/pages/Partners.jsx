import PageHeader from '../components/PageHeader.jsx'
import { TOPICS } from '../data/topics.js'

const SECTORS = [
  { name: 'Automotive', text: 'Vehicle manufacturers and mobility providers.' },
  { name: 'Maritime', text: 'Ship operators, cruise companies, ports and marine technology.' },
  { name: 'Aviation', text: 'Airlines, airports, aircraft manufacturers, MRO and service providers.' },
  { name: 'Aerospace', text: 'Space companies, launch providers, satellite companies, aerospace engineering.' },
  { name: 'Tourism', text: 'Hotels, resorts, destination operators, travel companies, tourism boards.' },
  { name: 'Logistics', text: 'Freight companies, warehouses, distribution networks, technology providers.' },
  { name: 'Technology', text: 'AI, software, communications and infrastructure companies.' },
  { name: 'Finance', text: 'Banks, investors, funds and strategic financial partners.' },
]

export default function Partners({ onOpenModal }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <PageHeader title="We don't build this ecosystem alone." />

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Large ecosystems are built through collaboration. We're developing strategic relationships across the
          industries that make BI's vision possible.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTORS.map((s) => (
            <div key={s.name} className="glass-card-light p-6 rounded-2xl space-y-2 border-t-4 border-t-sky-500">
              <h4 className="font-heading text-lg font-bold text-sky-600">{s.name}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-5">
          <span className="font-heading text-xl font-bold">Interested in partnering with BI?</span>
          <button
            onClick={() => onOpenModal(TOPICS.partnership)}
            className="px-7 py-3.5 rounded-xl bg-white text-slate-900 font-extrabold text-xs uppercase hover:bg-slate-100 transition-colors"
          >
            Get in touch →
          </button>
        </div>
      </div>
    </section>
  )
}
