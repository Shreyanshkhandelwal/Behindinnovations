import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

const RIDE_MODES = [
  { id: 'bike', label: 'Bike', fare: 49, eta: '3 min' },
  { id: 'auto', label: 'Auto', fare: 89, eta: '4 min' },
  { id: 'car', label: 'Car', fare: 159, eta: '6 min' },
  { id: 'carpool', label: 'Carpool', fare: 69, eta: '7 min' },
  { id: 'women', label: 'Women Safety', fare: 149, eta: '5 min' },
]

const STEPS = [
  {
    n: '1',
    title: 'Request',
    subtitle: 'Tell us where.',
    text: 'Enter pickup and destination, and choose bike, auto, car, carpool or a Women Safety ride.',
  },
  {
    n: '2',
    title: 'Confirm',
    subtitle: 'Know the details.',
    text: 'Review the fare estimate, pickup details and driver information.',
  },
  {
    n: '3',
    title: 'Travel',
    subtitle: 'Stay informed.',
    text: 'Follow the journey, share your trip with someone you trust, and use support or feedback tools.',
  },
]

export default function Road({ onOpenModal }) {
  const [selected, setSelected] = useState('car')
  const [confirmed, setConfirmed] = useState(false)
  const active = RIDE_MODES.find((m) => m.id === selected)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <PageHeader title="The everyday ride, made easier." />

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Our first product: a ride-hailing app for local journeys, with carpooling and women's safety at its
          core.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: description + for riders/drivers */}
          <div className="space-y-8">
            <div className="glass-card-light p-8 rounded-3xl space-y-4">
              <h3 className="font-heading text-xl font-bold text-slate-900">What it is</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Book a ride in seconds, track your driver, and pay in-app — connecting passengers with nearby drivers from
                pickup to drop-off.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Bike', 'Auto', 'Car', 'Carpool', 'Women Safety Rides'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-[11px] font-bold uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card-light p-6 rounded-2xl space-y-2">
                <h4 className="font-heading text-base font-bold text-slate-900">For riders</h4>
                <p className="text-sm text-slate-600">
                  Set your pickup and destination, choose a ride, review the fare estimate, and follow your trip.
                </p>
              </div>
              <div className="glass-card-light p-6 rounded-2xl space-y-2">
                <h4 className="font-heading text-base font-bold text-slate-900">For drivers</h4>
                <p className="text-sm text-slate-600">
                  See nearby requests, review trip details, and choose which journeys to accept.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-sky-50 border border-sky-200 space-y-2">
                <h4 className="font-heading text-base font-bold text-sky-900">Carpooling</h4>
                <p className="text-sm text-sky-800/80">
                  Share a ride with others heading the same way — lower fares for riders, better earnings per trip
                  for drivers, and fewer cars on the road.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-2">
                <h4 className="font-heading text-base font-bold text-indigo-900">Women Safety Rides</h4>
                <p className="text-sm text-indigo-800/80">
                  A dedicated ride mode with verified drivers, live trip sharing with trusted contacts, an in-app
                  SOS button, and 24/7 safety support.
                </p>
              </div>
            </div>
          </div>

          {/* Right: ride simulator */}
          <div className="glass-card-light p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-6 sticky top-24">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Planned App Preview</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase">Launch details to follow</span>
            </div>

            <div className="space-y-2">
              <div className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Pickup — Current location
              </div>
              <div className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" /> Destination — Choose on map
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {RIDE_MODES.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => {
                    setSelected(mode.id)
                    setConfirmed(false)
                  }}
                  className={`p-2.5 rounded-xl border text-[11px] font-bold text-center transition-colors ${
                    selected === mode.id
                      ? 'border-sky-500 bg-sky-500/10 text-sky-300'
                      : 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between px-4 py-4 rounded-xl bg-slate-800 border border-slate-700">
              <div>
                <span className="block text-[10px] uppercase text-slate-400 font-bold">Estimated fare</span>
                <span className="font-heading text-2xl font-extrabold text-white">₹{active.fare}</span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] uppercase text-slate-400 font-bold">Driver ETA</span>
                <span className="font-heading text-2xl font-extrabold text-sky-400">{active.eta}</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 italic text-center">
              Illustrative preview only — sample values, not real pricing or availability.
            </p>

            {!confirmed ? (
              <button
                onClick={() => setConfirmed(true)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold uppercase text-xs shadow-lg"
              >
                Confirm {active.label} Request
              </button>
            ) : (
              <div className="text-center space-y-2 py-2">
                <p className="text-sm font-bold text-emerald-400">Demo request confirmed — connecting you with nearby drivers.</p>
                <button onClick={() => setConfirmed(false)} className="text-xs text-slate-400 underline">
                  Try another mode
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Planned app experience steps */}
        <div className="space-y-6">
          <h3 className="font-heading text-2xl font-bold text-slate-900">Planned app experience</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="glass-card-light p-6 rounded-2xl space-y-2">
                <span className="font-heading text-3xl font-black text-sky-200">{s.n}</span>
                <h4 className="font-heading text-base font-bold text-slate-900">
                  {s.title} — {s.subtitle}
                </h4>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 italic">Planned product — launch details to follow.</p>
        </div>

        {/* Beyond the app */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 text-white space-y-4">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">Beyond the app</span>
          <p className="text-base leading-relaxed text-slate-200 max-w-3xl">
            Long-term, we want to build an integrated road mobility network connecting customers with airports,
            ports, tourist destinations, logistics facilities and — eventually — future space transportation hubs.
            Potential future activities include tourist and corporate transportation, intercity travel,
            airport/port transfers, fleet operations, and last-mile logistics.
          </p>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs uppercase hover:bg-slate-100 transition-colors"
          >
            Become a driver partner
          </button>
        </div>
      </div>
    </section>
  )
}
