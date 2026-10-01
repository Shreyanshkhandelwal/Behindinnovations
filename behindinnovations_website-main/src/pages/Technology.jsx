import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

const FOCUS_AREAS = [
  'Artificial intelligence',
  'Intelligent transportation systems',
  'Digital platforms',
  'Route optimisation',
  'Fleet management',
  'Logistics optimisation',
  'Customer experience',
  'Predictive analytics',
  'Automation',
  'Smart infrastructure',
  'Real-time tracking',
  'Sustainable mobility technology',
]

const JOURNEYS = [
  {
    id: 'complete',
    tab: 'Plan a complete journey',
    lead: 'A single BI digital platform where a customer could plan a complete journey in one place:',
    steps: ['Home', 'Road', 'Airport', 'Air', 'Hotel', 'Sea', 'Island', 'Road'],
    chip: 'bg-sky-50 border-sky-200 text-sky-700',
  },
  {
    id: 'eventually',
    tab: 'And eventually',
    lead: 'And eventually:',
    steps: ['Home', 'Road', 'Airport', 'Air', 'Spaceport', 'Space Vehicle', 'Orbit'],
    chip: 'bg-indigo-50 border-indigo-200 text-indigo-700',
  },
]

function JourneyExplorer() {
  const [activeId, setActiveId] = useState(JOURNEYS[0].id)
  const journey = JOURNEYS.find((j) => j.id === activeId)

  return (
    <div className="glass-card-light p-8 sm:p-10 rounded-3xl space-y-6">
      <h3 className="font-heading text-xl font-bold text-slate-900">The long-term platform vision</h3>

      <div role="tablist" className="inline-flex p-1 rounded-xl bg-slate-100 text-xs font-bold">
        {JOURNEYS.map((j) => (
          <button
            key={j.id}
            role="tab"
            aria-selected={j.id === activeId}
            onClick={() => setActiveId(j.id)}
            className={`px-4 py-2 rounded-lg transition-all ${
              j.id === activeId ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {j.tab}
          </button>
        ))}
      </div>

      <p className="text-sm text-slate-600 leading-relaxed">{journey.lead}</p>

      {/* key restarts the staggered reveal whenever the tab changes */}
      <ol key={journey.id} className="flex flex-wrap items-center gap-2">
        {journey.steps.map((step, i) => (
          <li key={i} className="flex items-center gap-2 word-reveal" style={{ animationDelay: `${i * 90}ms` }}>
            <span className={`px-3.5 py-2 rounded-lg border text-xs font-bold ${journey.chip}`}>{step}</span>
            {i < journey.steps.length - 1 && <span className="text-slate-300 font-bold">→</span>}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Technology() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <PageHeader title="Technology as the enabling layer." />

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Our technology strategy supports every business division — but stays connected to the real transportation
          and tourism businesses it serves.
        </p>

        <div className="space-y-4">
          <h3 className="font-heading text-xl font-bold text-slate-900">Focus areas</h3>
          <div className="flex flex-wrap gap-2">
            {FOCUS_AREAS.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <JourneyExplorer />
      </div>
    </section>
  )
}
