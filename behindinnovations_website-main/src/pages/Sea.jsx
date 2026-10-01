import PageHeader from '../components/PageHeader.jsx'
import StatusBadge from '../components/StatusBadge.jsx'

export default function Sea() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <StatusBadge tone="sky">Future direction</StatusBadge>

        <div className="space-y-12">
          <PageHeader title="Sea. A different path for people and goods." accent="sky" />

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Waterways open a different kind of journey — for passengers and for cargo. We aim to explore coastal
            and inland connections within a broader mobility network, one partnership and approval at a time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-card-light p-6 rounded-2xl space-y-2">
              <h4 className="font-heading text-base font-bold text-slate-900">Transport</h4>
              <p className="text-sm text-slate-600">Passenger links on inland and coastal waterways.</p>
            </div>
            <div className="glass-card-light p-6 rounded-2xl space-y-2">
              <h4 className="font-heading text-base font-bold text-slate-900">Tourism</h4>
              <p className="text-sm text-slate-600">Journeys to rivers, coasts and island destinations.</p>
            </div>
            <div className="glass-card-light p-6 rounded-2xl space-y-2">
              <h4 className="font-heading text-base font-bold text-slate-900">Logistics</h4>
              <p className="text-sm text-slate-600">Moving goods through ports and waterways.</p>
            </div>
          </div>

          <div className="glass-card-light p-8 rounded-3xl space-y-3">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block">The strategic concept</span>
            <h3 className="font-heading text-xl font-bold text-slate-900">Road + Sea</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A customer should eventually be able to travel from their starting point to a coastal or island
              destination through one connected BI journey — not a patchwork of separate bookings. This remains a
              long-term ambition, developed responsibly alongside our marine partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
