import PageHeader from '../components/PageHeader.jsx'

const LEVELS = [
  { title: 'Land tourism', text: 'Cities, cultural destinations, nature and regional travel.', color: 'border-t-sky-500' },
  { title: 'Marine tourism', text: 'Coastal destinations, islands, cruises and ocean experiences.', color: 'border-t-blue-500' },
  { title: 'Air tourism', text: 'Premium aviation and destination connectivity.', color: 'border-t-indigo-500' },
  { title: 'Space tourism', text: "Future travel beyond Earth's atmosphere.", color: 'border-t-violet-500' },
]

export default function Tourism() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <PageHeader title="Tourism without boundaries." />

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          From destination tourism to frontier tourism — BI's tourism strategy connects four levels of travel as our
          divisions grow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEVELS.map((l) => (
            <div key={l.title} className={`glass-card-light p-6 rounded-2xl space-y-2 border-t-4 ${l.color}`}>
              <h4 className="font-heading text-base font-bold text-slate-900">{l.title}</h4>
              <p className="text-sm text-slate-600">{l.text}</p>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-3xl bg-sky-50 border-l-4 border-l-sky-600 text-sm text-slate-800 font-medium">
          Today, tourism at BI starts with making local discovery and destination journeys easier by road, through
          our ride app.
        </div>
      </div>
    </section>
  )
}
