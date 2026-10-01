import PageHeader from '../components/PageHeader.jsx'

const ITEMS = [
  'Mobility hubs',
  'Transportation terminals',
  'Tourist centres',
  'Logistics centres and warehouses',
  'Port and airport connectivity facilities',
  'Multimodal transportation centres',
  'Future aerospace and spaceport-related infrastructure',
]

export default function Infrastructure() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <PageHeader title="Build the network behind the journey." />

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          As BI's ecosystem grows, it will need physical infrastructure to match — hubs, terminals and connectivity
          points that link every mode of travel.
        </p>

        <div className="space-y-4">
          <h3 className="font-heading text-xl font-bold text-slate-900">Potential infrastructure</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ITEMS.map((item, i) => (
              <li key={item} className="glass-card-light p-6 rounded-2xl flex gap-4 items-start">
                <span className="font-heading text-2xl font-black text-sky-500 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-semibold text-slate-800 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
