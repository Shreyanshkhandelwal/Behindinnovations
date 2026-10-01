import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { TOPICS } from '../data/topics.js'

const ROADMAP = [
  { title: 'Foundation', text: 'Corporate structure, brand, business plan, market research, regulatory mapping.' },
  { title: 'Mobility', text: 'Road mobility, tourism transportation, logistics, digital platform.' },
  { title: 'Multimodal', text: 'Marine tourism, port connectivity, air connectivity, multimodal booking.' },
  { title: 'Aviation & Infrastructure', text: 'Aviation partnerships, mobility hubs, infrastructure projects.' },
  { title: 'Space Ecosystem', text: 'Space-tourism research, aerospace partnerships, space logistics concepts.' },
  { title: 'Global Ecosystem', text: 'International expansion, integrated transportation network, advanced space tourism.' },
]

const STAGES = [
  'Corporate establishment',
  'Initial mobility & tourism operations',
  'Logistics & platform development',
  'Marine & aviation expansion',
  'Infrastructure development',
  'Aerospace & space partnerships',
  'Advanced commercial space opportunities',
]

function RoadmapExplorer() {
  const [active, setActive] = useState(0)
  const phase = ROADMAP[active]

  return (
    <div className="glass-card-light p-8 sm:p-10 rounded-3xl space-y-6">
      <h3 className="font-heading text-2xl font-bold text-slate-900">Our roadmap</h3>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {ROADMAP.map((p, i) => (
          <button
            key={p.title}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`p-3 rounded-xl border text-left transition-all ${
              i === active
                ? 'bg-sky-600 border-sky-600 text-white shadow-md'
                : i < active
                ? 'bg-sky-50 border-sky-200 text-sky-800'
                : 'bg-white border-slate-200 text-slate-500 hover:border-sky-300'
            }`}
          >
            <span className="block font-heading text-lg font-black">{i + 1}</span>
            <span className="block text-[11px] font-bold leading-tight">{p.title}</span>
          </button>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2" aria-live="polite">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block">
          Phase {active + 1} of {ROADMAP.length}
        </span>
        <h4 className="font-heading text-xl font-bold text-slate-900">{phase.title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed">{phase.text}</p>
      </div>
    </div>
  )
}

export default function Investors({ onOpenModal }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <PageHeader title="Staged execution behind an ambitious vision." />

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          BI is built to grow in stages — starting with what's commercially achievable today, and expanding toward
          more advanced mobility and space opportunities as technology, capital and regulation support them.
        </p>

        <RoadmapExplorer />

        <div className="space-y-4">
          <h3 className="font-heading text-xl font-bold text-slate-900">Investment stages</h3>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STAGES.map((stage, i) => (
              <li key={stage} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-extrabold text-indigo-600 tracking-widest">STAGE {i + 1}</span>
                <span className="block text-sm font-semibold text-slate-800">{stage}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="p-8 rounded-3xl bg-sky-50 border-l-4 border-l-sky-600 space-y-5">
          <p className="text-sm text-slate-800 font-medium">
            Investment requirements are established separately for each project through detailed feasibility studies
            and financial models.
          </p>
          <button
            onClick={() => onOpenModal(TOPICS.investor)}
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-extrabold text-xs uppercase shadow-lg shadow-sky-500/25 hover:-translate-y-0.5 transition-all"
          >
            Request investor information →
          </button>
        </div>
      </div>
    </section>
  )
}
