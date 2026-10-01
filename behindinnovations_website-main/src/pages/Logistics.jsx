import PageHeader from '../components/PageHeader.jsx'

const AREAS = [
  'Passenger logistics',
  'Tourism logistics',
  'Ground logistics',
  'Marine logistics',
  'Air cargo',
  'Multimodal logistics',
  'Warehousing & distribution',
  'Last-mile delivery',
  'Specialised and high-value cargo',
  'Future space logistics',
]

export default function Logistics() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <PageHeader title="Logistics. The engine behind the journey." />

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Logistics is a central part of how BI connects people and goods across every domain we operate in.
        </p>

        <div className="space-y-4">
          <h3 className="font-heading text-xl font-bold text-slate-900">Areas we're exploring</h3>
          <div className="flex flex-wrap gap-2">
            {AREAS.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card-light p-8 sm:p-10 rounded-3xl space-y-6">
          <h3 className="font-heading text-xl font-bold text-slate-900">Multimodal vision</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Long-term, we want to build systems that let transportation move smoothly between modes, and eventually
            extend from the ground into the air and beyond.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {['Road', '→', 'Sea', '·', 'Road', '→', 'Air', '·', 'Sea', '→', 'Road', '·', 'Air', '→', 'Road'].map(
              (item, i) =>
                item === '→' || item === '·' ? (
                  <span key={i} className="text-slate-300 font-bold">
                    {item}
                  </span>
                ) : (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold">
                    {item}
                  </span>
                )
            )}
          </div>
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mr-2">Eventually:</span>
            {['Road', 'Air', 'Space'].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
                  {item}
                </span>
                {i < arr.length - 1 && <span className="text-slate-300 font-bold">→</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
