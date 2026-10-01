import { useCallback, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PartnerModal from './components/PartnerModal.jsx'
import { TOPICS } from './data/topics.js'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Road from './pages/Road.jsx'
import Sea from './pages/Sea.jsx'
import Air from './pages/Air.jsx'
import Space from './pages/Space.jsx'
import Tourism from './pages/Tourism.jsx'
import Logistics from './pages/Logistics.jsx'
import Technology from './pages/Technology.jsx'
import Infrastructure from './pages/Infrastructure.jsx'
import Partners from './pages/Partners.jsx'
import Investors from './pages/Investors.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import ScamAlert from './pages/ScamAlert.jsx'

// Pages are separate routes, so reset scroll on navigation.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const [modal, setModal] = useState({ open: false, topic: TOPICS.driver })

  // openModal(topic) opens the inquiry form pre-selected on that topic.
  const openModal = useCallback((topic) => setModal({ open: true, topic }), [])
  const closeModal = useCallback(() => setModal((m) => ({ ...m, open: false })), [])
  // Zero-arg opener for buttons that don't pick a topic (never receives a click event).
  const openDefault = useCallback(() => openModal(TOPICS.driver), [openModal])

  return (
    <div className="relative selection:bg-sky-500 selection:text-white">
      <ScrollToTop />
      <Navbar onOpenModal={openDefault} />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home onOpenModal={openDefault} />} />
          <Route path="/about" element={<About />} />
          <Route path="/road" element={<Road onOpenModal={openDefault} />} />
          <Route path="/sea" element={<Sea />} />
          <Route path="/air" element={<Air />} />
          <Route path="/space" element={<Space />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/partners" element={<Partners onOpenModal={openModal} />} />
          <Route path="/investors" element={<Investors onOpenModal={openModal} />} />
          <Route path="/careers" element={<Careers onOpenModal={openModal} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/scam-alert" element={<ScamAlert />} />
        </Routes>
      </main>

      <Footer />

      <PartnerModal open={modal.open} topic={modal.topic} onClose={closeModal} />
    </div>
  )
}
