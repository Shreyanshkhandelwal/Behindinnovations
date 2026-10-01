const STYLES = {
  sky: 'bg-sky-50 border-sky-200 text-sky-700',
  indigo: 'bg-indigo-500/10 border-indigo-400/30 text-indigo-300',
  amber: 'bg-amber-50 border-amber-200 text-amber-700',
}

// Small "OUR STARTING POINT" / "FUTURE DIRECTION" / "CORE LONG-TERM AMBITION"
// tag used near a page's title, replacing the old bottom-of-page disclaimer boxes.
export default function StatusBadge({ children, tone = 'sky' }) {
  return (
    <span
      className={`inline-block px-3.5 py-1.5 rounded-full border text-[10px] font-extrabold uppercase tracking-widest ${STYLES[tone] || STYLES.sky}`}
    >
      {children}
    </span>
  )
}
