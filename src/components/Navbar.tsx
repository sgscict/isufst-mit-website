import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach((s) => observer.observe(s!))
    return () => observer.disconnect()
  }, [isHome])

  const linkClass = (isActive: boolean) =>
    `relative whitespace-nowrap rounded-xl px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-all ${
      isActive
        ? 'text-navy-950 font-bold dark:text-amber-300'
        : 'text-slate-600 hover:text-navy-950 dark:text-slate-300 dark:hover:text-white'
    }`

  const underlineClass = `absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-amber-500`

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        {/* Top Institutional Notification Bar */}
        <div className="hidden sm:block border-b border-navy-900/10 bg-navy-950 text-slate-200 px-4 py-1.5 text-[11px] font-medium tracking-wide">
          <div className="container-page flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                School of Graduate Studies · Admissions Open for {program.academicYear} ({program.intakeTerm})
              </span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <span className="hidden md:inline">CHED CMO 15 s.2019 Compliant</span>
              <span>•</span>
              <span className="text-amber-400 font-semibold">DOST-SEI STRAND Accredited</span>
              <span>•</span>
              <Link to="/scholarship" className="hover:text-white underline">
                View Grants
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="px-3 pt-2 sm:px-6">
          <nav
            className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-3 transition-all duration-300 sm:h-16 sm:px-5 ${
              scrolled || !isHome
                ? 'border border-slate-200/90 bg-white/95 shadow-md shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/95 dark:shadow-black/30'
                : 'border border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-navy-950/80'
            }`}
          >
            {/* University & College Lockup */}
            <Link to="/" className="group flex shrink-0 items-center gap-3">
              <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-sm transition-transform group-hover:scale-105 dark:border-white/10">
                <img
                  src="/isufst-logo.png"
                  alt={program.universityAbbrev}
                  className="h-full w-full object-contain"
                />
              </span>
              <div className="leading-tight">
                <div className="font-display text-sm font-bold tracking-tight text-navy-950 dark:text-white">
                  {program.abbrev} <span className="font-sans text-xs text-slate-400">·</span> {program.collegeAbbrev}
                </div>
                <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                  {program.universityAbbrev} · Iloilo
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center gap-0.5 lg:flex">
              {isHome &&
                navLinks.map((l) => (
                  <a key={l.href} href={l.href} className={linkClass(active === l.href)}>
                    {active === l.href && <span className={underlineClass} />}
                    {l.label}
                  </a>
                ))}
              {navLinks.length > 0 && isHome && (
                <span className="mx-1.5 h-4 w-px bg-slate-200 dark:bg-white/10" />
              )}
              {pageLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={linkClass(location.pathname === l.to)}
                >
                  {location.pathname === l.to && <span className={underlineClass} />}
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2">
              <ThemeToggle scrolled={true} />

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="hidden rounded-xl bg-navy-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-navy-800 dark:bg-amber-500 dark:text-navy-950 dark:hover:bg-amber-400 sm:inline-flex"
              >
                Inquire
              </button>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 text-navy-900 hover:bg-slate-100 dark:border-white/10 dark:text-white dark:hover:bg-white/10 lg:hidden"
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

        {/* Mobile Dropdown Menu */}
        <div
          className={`mx-auto max-w-6xl px-3 transition-all duration-300 lg:hidden ${
            open ? 'mt-2 max-h-[38rem] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
          }`}
        >
          <div className="rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/95 space-y-1">
            {isHome &&
              navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            {isHome && <div className="my-2 h-px bg-slate-200 dark:bg-white/10" />}
            {pageLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
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
                className="w-full rounded-xl bg-navy-900 py-3 text-center text-xs font-bold uppercase tracking-wider text-white dark:bg-amber-500 dark:text-navy-950"
              >
                Inquire With Graduate Office
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Inquiry Dialog */}
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
