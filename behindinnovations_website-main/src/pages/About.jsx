import PageHeader from '../components/PageHeader.jsx'

const PRINCIPLES = [
  { n: '1', label: 'Connect', color: 'bg-sky-50 border-sky-200 text-sky-800' },
  { n: '2', label: 'Move', color: 'bg-blue-50 border-blue-200 text-blue-800' },
  { n: '3', label: 'Experience', color: 'bg-indigo-50 border-indigo-200 text-indigo-800' },
  { n: '4', label: 'Innovate', color: 'bg-cyan-50 border-cyan-200 text-cyan-800' },
  { n: '5', label: 'Expand', color: 'bg-slate-100 border-slate-300 text-slate-800' },
]

const VALUES = [
  { title: 'Innovation', text: 'Continuously exploring new ways to connect people and destinations.' },
  { title: 'Connectivity', text: 'Transportation works best when systems work together.' },
  { title: 'Excellence', text: 'Professional standards across every operation.' },
  { title: 'Responsibility', text: 'Sustainable, responsible growth.' },
  { title: 'Partnership', text: 'Large ecosystems are built through collaboration.' },
  { title: 'Vision', text: 'Thinking beyond current transportation boundaries.' },
]

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <PageHeader title="We build what is behind the journey." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card-light p-8 rounded-3xl space-y-4">
            <h3 className="font-heading text-xl font-bold text-slate-900">Who we are</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Behind Innovations (BI) is building an integrated mobility, tourism and logistics ecosystem connecting
              Road, Sea, Air and Space. We believe transportation shouldn't be built as isolated industries — a taxi
              to the airport, a flight to another country, a car to the port, a ferry to an island, and a separate
              logistics chain for everything else. BI's concept is to connect these pieces into one experience.
            </p>
          </div>

          <div className="glass-card-light p-8 rounded-3xl space-y-4">
            <h3 className="font-heading text-xl font-bold text-slate-900">Brand philosophy</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              The name Behind Innovations reflects a simple idea: every journey a customer takes depends on a whole
              system operating behind the visible experience — the vehicles, the infrastructure, the logistics, the
              technology, the people and the partnerships.
            </p>
          </div>
        </div>

        <div className="glass-card-light p-8 sm:p-10 rounded-3xl space-y-6">
          <h3 className="font-heading text-2xl font-bold text-slate-900">Our mission</h3>
          <p className="text-base text-slate-700 leading-relaxed">
            To develop innovative, integrated and customer-focused transportation, tourism and logistics solutions
            that connect different modes of mobility — creating seamless journeys from the ground to the global and,
            ultimately, beyond Earth.
          </p>

          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest block">
            Built around five principles
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            {PRINCIPLES.map((p) => (
              <div key={p.n} className={`p-4 rounded-2xl border font-heading font-extrabold text-sm ${p.color}`}>
                {p.n}. {p.label}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-heading text-2xl font-bold text-slate-900">Core values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="glass-card-light p-6 rounded-2xl space-y-2">
                <span className="font-heading text-lg font-bold text-sky-600 block">{v.title}</span>
                <p className="text-sm text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-sky-50 border-l-4 border-l-sky-600 text-sm text-slate-800 font-medium">
          Where we're starting: our first real product is a ride-hailing app for local journeys, with electric
          vehicles at the centre of how we've built it — plus carpooling and Women Safety Rides from day one.
          Everything else on this site (Sea, Air, Space) represents the long-term direction we're building toward,
          developed one stage at a time.
        </div>
      </div>
    </section>
  )
}
