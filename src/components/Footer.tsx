import { Link } from 'react-router-dom'
import { program, contact } from '../data'
import { navLinks } from '../nav'

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-navy-950 text-slate-300 dark:border-white/10">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="container-page relative py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand & University Column */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white p-1.5 shadow-lg">
                <img
                  src="/isufst-logo.png"
                  alt={program.universityAbbrev}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <div className="font-display text-base font-bold text-white">
                  {program.university}
                </div>
                <div className="text-xs text-amber-400 font-medium">
                  {program.college} · School of Graduate Studies
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-400">
              The {program.degree} ({program.abbrev}) is a PQF Level 7 graduate program developing advanced systems architects, applied AI researchers, and engineering leaders for Western Visayas and the nation.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Accredited under CHED CMO 15 Series of 2019</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Program Exploration
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              {navLinks.slice(0, 5).map(({ href, label }) => (
                <li key={href}>
                  <a href={`/${href}`} className="text-slate-400 transition-colors hover:text-amber-400">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions & Grants */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Admissions & Grants
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="/#eligibility" className="text-slate-400 transition-colors hover:text-amber-400">
                  Eligibility Pathway
                </a>
              </li>
              <li>
                <a href="/#tuition" className="text-slate-400 transition-colors hover:text-amber-400">
                  Tuition & DOST Grants
                </a>
              </li>
              <li>
                <Link to="/scholarship" className="text-slate-400 transition-colors hover:text-amber-400">
                  DOST-SEI STRAND Guide
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-slate-400 transition-colors hover:text-amber-400">
                  Faculty & Mentors
                </Link>
              </li>
              <li>
                <a href="/#faq" className="text-slate-400 transition-colors hover:text-amber-400">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Graduate Office
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li>{contact.address}</li>
              <li className="pt-1">
                <a href={`mailto:${contact.email}`} className="text-amber-400 hover:underline">
                  {contact.email}
                </a>
              </li>
              <li>{contact.phone}</li>
              <li className="pt-1 text-[11px] text-slate-400">{contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {program.university} ({program.universityAbbrev}). All rights reserved.</p>
          <div className="flex gap-4 text-slate-400">
            <span>Main-Poblacion Campus</span>
            <span>•</span>
            <span>Barotac Nuevo, Iloilo</span>
            <span>•</span>
            <span>Philippines</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
