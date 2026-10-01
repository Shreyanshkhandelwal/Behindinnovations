const DOMAINS = ['Road', 'Sea', 'Air', 'Space', 'Technology']

// "Road • Sea • Air • Space • Technology" line, as in the logo.
export default function Tagline({ className = 'text-slate-600' }) {
  return (
    <span className={`flex items-center gap-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.18em] whitespace-nowrap ${className}`}>
      {DOMAINS.map((d, i) => (
        <span key={d} className="flex items-center gap-1.5">
          {i > 0 && <span className="w-1 h-1 rounded-full bg-sky-500" aria-hidden="true" />}
          {d}
        </span>
      ))}
    </span>
  )
}
