import { Link } from 'react-router-dom'

export default function Home({ onOpenModal }) {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-8 pb-20 overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-bold text-xs tracking-widest uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
                Behind Innovations (BI)
              </div>

              <h1 className="hero-headline font-heading font-black tracking-tight text-slate-900">
                <span className="text-gradient-sky">Move today.</span> Explore tomorrow.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                A ride app is our first step. Our wider vision connects transport, tourism and logistics
                across road, air, water and space.
              </p>

              <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Behind Innovations is developing an integrated mobility, tourism and logistics ecosystem — connecting
                people, destinations and opportunities from the road to the sea, from the air to the future of space.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  to="/road"
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-extrabold text-xs uppercase shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  Ride App
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  to="/space"
                  className="px-7 py-3.5 rounded-xl bg-white text-sky-700 font-extrabold text-xs uppercase border border-slate-300 shadow-xs hover:bg-slate-50 transition-all"
                >
                  Space Mission
                </Link>
                <button
                  onClick={onOpenModal}
                  className="px-7 py-3.5 rounded-xl bg-slate-900 text-white font-extrabold text-xs uppercase shadow-md hover:bg-slate-800 transition-all"
                >
                  Partner With Us
                </button>
              </div>

              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <span className="block font-heading font-extrabold text-2xl text-slate-900">4</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Domains — Road, Sea, Air, Space 
                  </span>
                </div>
                <div>
                  <span className="block font-heading font-extrabold text-2xl text-sky-600">3</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Pillars — Transport, Tourism, Logistics
                  </span>
                </div>
                <div>
                  <span className="block font-heading font-extrabold text-2xl text-indigo-600">1</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Unified ecosystem
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-sky-400/40 border-dashed animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-6 rounded-full border border-indigo-400/50 animate-[spin_40s_linear_infinite_reverse]" />

                <div className="w-52 h-52 rounded-full bg-gradient-to-tr from-sky-50 via-blue-50 to-indigo-100 border border-sky-300 shadow-glow flex flex-col items-center justify-center text-center p-4">
                  <svg className="w-12 h-12 text-sky-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="font-heading text-xs font-extrabold text-slate-900 tracking-widest uppercase">
                    Road · Sea · Air · Space
                  </span>
                  <span className="text-[10px] font-bold text-sky-600 mt-1 uppercase tracking-wider">
                    One ecosystem. Every journey.
                  </span>
                </div>

                <div className="absolute top-2 right-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-300 text-sky-700 text-xs font-bold shadow-md">
                  Ride App
                </div>
                <div className="absolute bottom-6 left-0 px-3.5 py-1.5 rounded-full bg-white border border-indigo-300 text-indigo-700 text-xs font-bold shadow-md">
                  Space Mission
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="relative py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-lg sm:text-xl font-medium leading-relaxed text-slate-200">
            Behind Innovations is developing an integrated mobility, tourism and logistics ecosystem — connecting
            people, destinations and opportunities from the road to the sea, from the air to the future of space.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs uppercase hover:bg-slate-100 transition-colors"
          >
            Explore the Ecosystem
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="relative py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="glass-card-light p-8 rounded-3xl space-y-4 border-t-4 border-t-sky-500">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block">01 / First Product</span>
              <h3 className="font-heading text-2xl font-bold text-slate-900">Ride App</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our ride-hailing app prioritizes electric vehicles, with carpooling and Women Safety Rides from day one.
              </p>
              <Link to="/road" className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-800 uppercase">
                See the Ride App →
              </Link>
            </div>

            <div className="glass-card-light p-8 rounded-3xl space-y-4 border-t-4 border-t-blue-500">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">02 / Wider Ecosystem</span>
              <h3 className="font-heading text-2xl font-bold text-slate-900">Four Domains</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Road, Sea, Air and Space, each built around Transport, Tourism and Logistics.
              </p>
              <Link to="/about" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 uppercase">
                Learn about the ecosystem →
              </Link>
            </div>

            <div className="glass-card-light p-8 rounded-3xl space-y-4 border-t-4 border-t-indigo-500">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block">03 / Long-Term Frontier</span>
              <h3 className="font-heading text-2xl font-bold text-slate-900">Space Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A registered space startup working toward satellites, navigation systems, and long-term orbital
                ambitions.
              </p>
              <Link to="/space" className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 uppercase">
                View Space Mission →
              </Link>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 text-white space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">Closing Statement</span>
            <blockquote className="font-heading text-xl sm:text-2xl font-bold leading-snug">
              Our journey begins on the ground. Our ecosystem reaches across the planet. Our vision looks beyond the
              horizon.
            </blockquote>
          </div>
        </div>
      </section>
    </>
  )
}
