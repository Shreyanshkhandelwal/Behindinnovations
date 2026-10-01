import StatusBadge from '../components/StatusBadge.jsx'

const MISSION = [
  {
    n: '1',
    title: 'Our own satellite',
    text: 'Working toward designing, launching and operating an orbital satellite.',
  },
  {
    n: '2',
    title: 'Navigation systems',
    text: 'Researching positioning and navigation, including the orbital and ground systems needed for useful coverage.',
  },
  {
    n: '3',
    title: 'Exploration + energy',
    text: 'Exploring deeper space research and how satellite information and space technology could support the energy sector.',
  },
]

export default function Space() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <StatusBadge tone="indigo">Core long-term ambition</StatusBadge>

        <div className="space-y-12">
        <div className="border-l-4 border-l-indigo-500 pl-6">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Space. Our long-term frontier.
          </h1>
        </div>

        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
          Registered space startup. Space is a defining part of our ambition — future movement, travel and support
          systems beyond Earth.
        </p>

        <div>
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-4">
            Space across three areas
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h4 className="font-heading text-base font-bold text-white">Transport</h4>
              <p className="text-sm text-slate-400">Pathways for moving people and systems between Earth and space.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h4 className="font-heading text-base font-bold text-white">Tourism</h4>
              <p className="text-sm text-slate-400">Studying responsible space travel experiences and wider participation.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <h4 className="font-heading text-base font-bold text-white">Logistics</h4>
              <p className="text-sm text-slate-400">Equipment, payload and supply movement for space activity.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-heading text-2xl font-bold text-white">Our space mission</h3>
          <div className="space-y-4">
            {MISSION.map((m) => (
              <div key={m.n} className="flex gap-5 p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="font-heading text-3xl font-black text-indigo-400 shrink-0">{m.n}</span>
                <div>
                  <h4 className="font-heading text-base font-bold text-white mb-1">{m.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        </div>
      </div>
    </section>
  )
}
