import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { program } from '../data'
import { navLinks, pageLinks } from '../nav'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
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
      { rootMargin: '-40% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s!))
    return () => observer.disconnect()
  }, [isHome])

  const isDark = !scrolled && isHome

  const linkClass = (isActive: boolean) =>
    `relative whitespace-nowrap rounded-xl px-2.5 py-2 text-[13px] font-semibold transition-all duration-300 xl:px-3.5 xl:text-sm ${
      isActive
        ? isDark
          ? 'text-white'
          : 'text-navy-900 dark:text-white'
        : isDark
          ? 'text-navy-100/80 hover:text-white'
          : 'text-slate-500 hover:text-navy-900 dark:text-slate-400 dark:hover:text-white'
    }`

  const underlineClass = `absolute inset-x-1.5 -bottom-0.5 h-0.5 rounded-full transition-all ${
    isDark ? 'bg-teal-400' : 'bg-teal-500'
  }`

  return (
    <header className="animate-nav-enter fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-3 transition-all duration-500 sm:h-16 sm:px-4 ${
          scrolled || !isHome
            ? 'border border-slate-200/80 bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/80 dark:shadow-black/20'
            : 'border border-white/10 bg-white/5 backdrop-blur-md'
        }`}
      >
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <span
            className={`relative grid h-10 w-[3.25rem] shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1 transition-transform duration-300 group-hover:scale-105 ${
              isDark ? 'shadow-lg shadow-black/10' : 'shadow-md'
            }`}
          >
            <img src="/isufst-logo.png" alt={program.universityAbbrev} className="h-full w-full object-contain" />
          </span>
          <span className="hidden leading-tight sm:block">
            <span
              className={`block font-display text-sm font-bold transition-colors ${
                isDark ? 'text-white' : 'text-navy-900 dark:text-white'
              }`}
            >
              {program.abbrev} · {program.collegeAbbrev}
            </span>
            <span
              className={`block text-xs font-medium transition-colors ${
                isDark ? 'text-navy-100/80' : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {program.universityAbbrev}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 xl:flex">
          {isHome &&
            navLinks.map((l) => (
              <a key={l.href} href={l.href} className={linkClass(active === l.href)}>
                {active === l.href && <span className={underlineClass} />}
                {l.label}
              </a>
            ))}
          {navLinks.length > 0 && isHome && (
            <span className={`mx-1 h-5 w-px ${isDark ? 'bg-white/15' : 'bg-slate-200 dark:bg-white/10'}`} />
          )}
          {pageLinks.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass(location.pathname === l.to)}>
              {location.pathname === l.to && <span className={underlineClass} />}
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle scrolled={scrolled || !isHome} />
          <a
            href={isHome ? '#apply' : '/#apply'}
            className="shine hidden rounded-xl bg-gradient-to-r from-teal-500 to-teal-400 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-teal-500/25 transition-all hover:shadow-lg hover:shadow-teal-500/30 sm:inline-flex"
          >
            Apply
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center rounded-xl transition-colors xl:hidden ${
              isDark ? 'text-white hover:bg-white/10' : 'text-navy-900 hover:bg-slate-100 dark:text-white dark:hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto max-w-6xl overflow-hidden transition-all duration-400 xl:hidden ${
          open ? 'mt-2 max-h-[36rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/95">
          {isHome &&
            navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          {isHome && <div className="my-1 h-px bg-slate-200 dark:bg-white/10" />}
          {pageLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={isHome ? '#apply' : '/#apply'}
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl bg-gradient-to-r from-teal-500 to-teal-400 px-4 py-3 text-center text-base font-semibold text-white"
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  )
}
