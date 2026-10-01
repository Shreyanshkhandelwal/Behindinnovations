export default function PageHeader({ title, accent = 'sky' }) {
  const borderClass = {
    sky: 'border-l-sky-600',
    indigo: 'border-l-indigo-600',
    cyan: 'border-l-cyan-600',
    amber: 'border-l-amber-500',
  }[accent] || 'border-l-sky-600'

  return (
    <div className={`border-l-4 ${borderClass} pl-6`}>
      <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">{title}</h1>
    </div>
  )
}
