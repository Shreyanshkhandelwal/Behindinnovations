import PageHeader from '../components/PageHeader.jsx'
import StatusBadge from '../components/StatusBadge.jsx'

export default function Air() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <StatusBadge tone="sky">Future direction</StatusBadge>

        <div className="space-y-12">
          <PageHeader title="Air. Longer journeys, faster movement." accent="sky" />

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            The Air division represents BI's future global layer — connecting people and regions faster, and linking
            flights to the wider destination experience, developed only as the right partnerships and approvals
            fall into place.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-card-light p-6 rounded-2xl space-y-2">
              <h4 className="font-heading text-base font-bold text-slate-900">Transport</h4>
              <p className="text-sm text-slate-600">Future air mobility linking people and regions.</p>
            </div>
            <div className="glass-card-light p-6 rounded-2xl space-y-2">
              <h4 className="font-heading text-base font-bold text-slate-900">Tourism</h4>
              <p className="text-sm text-slate-600">Connecting flights to the wider destination experience.</p>
            </div>
            <div className="glass-card-light p-6 rounded-2xl space-y-2">
              <h4 className="font-heading text-base font-bold text-slate-900">Logistics</h4>
              <p className="text-sm text-slate-600">Air routes where speed and reach matter.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
