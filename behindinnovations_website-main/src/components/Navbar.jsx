import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV_ITEMS } from '../data/nav.js'
import logoIcon from '../assets/logo-icon.png'
import wordmark from '../assets/wordmark-dark.png'
import Tagline from './Tagline.jsx'

const PRIMARY = NAV_ITEMS.filter((item) => item.primary)
const SECONDARY = NAV_ITEMS.filter((item) => !item.primary && !item.alert)
const ALERT_ITEM = NAV_ITEMS.find((item) => item.alert)

function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setWidth(max > 0 ? (scrolled / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div id="scroll-progress" style={{ width: `${width}%` }} />
}

function MoreMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { pathname } = useLocation()
  const active = SECONDARY.some((item) => item.path === pathname)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onDown = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`nav-link py-2 uppercase flex items-center gap-1 ${active ? 'active' : ''}`}
      >
        More
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-3 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 space-y-0.5">
          {SECONDARY.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 ${isActive ? 'text-sky-600' : 'text-slate-700'}`
              }
            >
              <span className="text-[10px] text-slate-400 font-extrabold">{item.num}</span>
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar({ onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <ScrollProgress />
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3.5 group">
            <img src={logoIcon} alt="Behind Innovations logo" className="w-11 h-11 rounded-xl shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform" />
            <div className="space-y-1.5">
              <img src={wordmark} alt="Behind Innovations" className="h-8 sm:h-9 w-auto group-hover:opacity-80 transition-opacity" />
            </div>
          </NavLink>

          <nav className="hidden lg:flex items-center gap-5 text-xs font-bold uppercase text-slate-600">
            {PRIMARY.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `nav-link py-2 ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            <MoreMenu />
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <NavLink
              to={ALERT_ITEM.path}
              className={({ isActive }) =>
                `hidden md:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border font-bold text-xs uppercase transition-colors ${
                  isActive
                    ? 'bg-amber-500 border-amber-500 text-white'
                    : 'bg-amber-50 border-amber-300 text-amber-700 hover:bg-amber-100'
                }`
              }
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
              Scam Alert
            </NavLink>
            <button
              onClick={onOpenModal}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-bold text-xs uppercase shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 hover:-translate-y-0.5 transition-all"
            >
              Partner With Us
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 text-slate-700 hover:text-sky-600"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 text-xs uppercase font-semibold">
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.filter((item) => !item.alert).map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-700 hover:text-sky-600 py-1.5"
                >
                  {item.num} {item.label}
                </NavLink>
              ))}
            </div>
            <NavLink
              to={ALERT_ITEM.path}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-700"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
              Scam Alert
            </NavLink>
            <button
              onClick={() => {
                setMobileOpen(false)
                onOpenModal()
              }}
              className="w-full py-3 rounded-xl bg-sky-600 text-white font-bold uppercase shadow-md"
            >
              Partner With Us
            </button>
          </div>
        )}
      </header>
    </>
  )
}
