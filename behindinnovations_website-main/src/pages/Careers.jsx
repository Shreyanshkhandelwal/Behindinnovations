import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import FutureDirectionNote from '../components/FutureDirectionNote.jsx'
import { TOPICS } from '../data/topics.js'

// No roles are defined yet (content draft, page 13). Add { title, team, summary }
// objects here and the list renders automatically.
const OPEN_ROLES = []

export default function Careers({ onOpenModal }) {
  const [showRoles, setShowRoles] = useState(false)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <PageHeader title="Help us build what's behind the journey." />

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          BI is early — which means the work here spans everything from shipping our first ride app to shaping
          the long-term roadmap for a mobility, tourism and logistics ecosystem across Road, Sea, Air and Space.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setShowRoles((v) => !v)}
            aria-expanded={showRoles}
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-extrabold text-xs uppercase shadow-lg shadow-sky-500/25 hover:-translate-y-0.5 transition-all"
          >
            View open roles →
          </button>
          <button
            onClick={() => onOpenModal(TOPICS.career)}
            className="px-7 py-3.5 rounded-xl bg-white text-sky-700 font-extrabold text-xs uppercase border border-slate-300 hover:bg-slate-50 transition-all"
          >
            Send us your profile →
          </button>
        </div>

        {showRoles &&
          (OPEN_ROLES.length ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OPEN_ROLES.map((role) => (
                <li key={role.title} className="glass-card-light p-6 rounded-2xl space-y-1">
                  <h4 className="font-heading text-lg font-bold text-slate-900">{role.title}</h4>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">{role.team}</span>
                  <p className="text-sm text-slate-600 pt-1">{role.summary}</p>
                </li>
              ))}
            </ul>
          ) : (
            <FutureDirectionNote>
              Placeholder: open roles will be listed here once defined (e.g. app development, operations,
              partnerships). In the meantime, send us your profile.
            </FutureDirectionNote>
          ))}
      </div>
    </section>
  )
}
