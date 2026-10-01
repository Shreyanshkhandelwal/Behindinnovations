import logoIcon from '../assets/logo-icon.png'
import wordmark from '../assets/wordmark-light.png'
import Tagline from './Tagline.jsx'

export default function Footer() {
  return (
    <footer className="relative z-10 bg-slate-950 text-slate-400 py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-3.5">
          <img src={logoIcon} alt="Behind Innovations logo" className="w-11 h-11 rounded-xl" />
          <div className="space-y-1.5">
            <img src={wordmark} alt="Behind Innovations" className="h-9 w-auto" />
            <Tagline className="text-slate-400" />
          </div>
        </div>

        <blockquote className="font-heading text-lg sm:text-xl text-white max-w-3xl leading-snug">
          Our journey begins on the ground. Our ecosystem reaches across the planet. Our vision looks beyond the horizon.
        </blockquote>

        <p className="text-sm text-slate-500 max-w-2xl">
          We build what is behind the journey.
        </p>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} Behind Innovations Private Limited. India. Copyright reserved.
            </p>
            <p className="text-[11px] text-slate-600">
              Sea, Air and Space represent our long-term direction, developed responsibly one stage at a time.
            </p>
          </div>
          <a href="/scam-alert" className="inline-flex items-center gap-1.5 font-bold text-amber-500 hover:text-amber-400 shrink-0">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            Scam Alert — Check the Address
          </a>
        </div>
      </div>
    </footer>
  )
}
