import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { program } from '../data'
import { navLinks, pageLinks } from '../nav'
import ThemeToggle from './ThemeToggle'
import InquiryModal from './InquiryModal'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    if (!isHome) {
      setActive('')
      return
    }
    const sections = navLinks
      .map((l) => document.getElementById(l.href.replace(/^#/, '')))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' },
    )
    sections.forEach((s) => observer.observe(s!))
    return () => observer.disconnect()
  }, [isHome])

  const handleNavClick = (href: string) => {
    setOpen(false)
    const targetId = href.replace(/^#/, '')
    if (isHome) {
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', href)
        setActive(href)
      }
    } else {
      navigate(`/${href}`)
    }
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        {/* Institutional Blue Top Bar */}
        <div className="bg-[#0b3d91] text-white px-4 py-1.5 text-[11px] font-medium tracking-wide shadow-sm">
          <div className="container-page flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#00e5ff] animate-pulse" />
              <span>
                Iloilo State University of Fisheries Science and Technology · CICT School of Graduate Studies
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-sky-100">
              <span className="font-semibold text-[#38bdf8]">CHED CMO 15 s.2019</span>
              <span>•</span>
              <span className="text-white">DOST-SEI STRAND Accredited</span>
              <span>•</span>
              <Link to="/scholarship" className="hover:text-white underline font-semibold">
                Scholarships
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="px-3 pt-2 sm:px-6">
          <nav
            className={`mx-auto flex h-15 max-w-6xl items-center justify-between rounded-xl px-4 transition-all duration-300 sm:h-16 ${
              scrolled || !isHome
                ? 'border border-slate-200 bg-white/95 shadow-md shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800 dark:bg-[#071328]/95'
                : 'border border-slate-200/90 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-[#071328]/90'
            }`}
          >
            {/* Logo Lockup in ISUFST Royal Blue */}
            <Link to="/" className="group flex shrink-0 items-center gap-3">
              <div className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-sky-100 bg-white p-1 shadow-sm transition-transform group-hover:scale-105">
                <img
                  src="/isufst-logo.png"
                  alt="ISUFST Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="leading-tight">
                <div className="font-sans text-sm font-extrabold tracking-tight text-[#0b3d91] dark:text-sky-300">
                  {program.abbrev} <span className="text-slate-400 font-normal">·</span> {program.collegeAbbrev}
                </div>
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  ISUFST Main Campus · Iloilo
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 xl:flex">
              {isHome &&
                navLinks.map((l) => {
                  const isLinkActive = active === l.href
                  return (
                    <button
                      key={l.href}
                      type="button"
                      onClick={() => handleNavClick(l.href)}
                      className={`relative rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors ${
                        isLinkActive
                          ? 'text-[#0b3d91] bg-sky-50 dark:bg-sky-950/60 dark:text-sky-300'
                          : 'text-slate-600 hover:text-[#0b3d91] hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                      }`}
                    >
                      {l.label}
                      {isLinkActive && (
                        <span className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-[#0284c7]" />
                      )}
                    </button>
                  )
                })}
              {navLinks.length > 0 && isHome && (
                <span className="mx-1.5 h-4 w-px bg-slate-200 dark:bg-slate-700" />
              )}
              {pageLinks.map((l) => {
                const isPageActive = location.pathname === l.to
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={`relative rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors ${
                      isPageActive
                        ? 'text-[#0b3d91] bg-sky-50 dark:bg-sky-950/60 dark:text-sky-300'
                        : 'text-slate-600 hover:text-[#0b3d91] hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {l.label}
                    {isPageActive && (
                      <span className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-[#0284c7]" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Right Action */}
            <div className="flex items-center gap-2">
              <ThemeToggle scrolled={true} />

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="hidden rounded-lg bg-[#0b3d91] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#082a66] transition-colors dark:bg-[#0284c7] dark:hover:bg-[#0369a1] sm:inline-flex"
              >
                Inquire Now
              </button>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-white xl:hidden"
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                  {open ? (
                    <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
                  ) : (
                    <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`mx-auto max-w-6xl px-3 transition-all duration-300 xl:hidden ${
            open ? 'mt-2 max-h-[38rem] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
          }`}
        >
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-[#071328] space-y-1">
            {isHome &&
              navLinks.map((l) => (
                <button
                  key={l.href}
                  type="button"
                  onClick={() => handleNavClick(l.href)}
                  className="block w-full text-left rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-[#0b3d91] dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {l.label}
                </button>
              ))}
            {isHome && <div className="my-2 h-px bg-slate-200 dark:bg-slate-800" />}
            {pageLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-[#0b3d91] dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  setModalOpen(true)
                }}
                className="w-full rounded-lg bg-[#0b3d91] py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-[#082a66]"
              >
                Inquire With Graduate Office
              </button>
            </div>
          </div>
        </div>
      </header>

      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
