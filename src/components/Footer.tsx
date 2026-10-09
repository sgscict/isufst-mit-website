import { Link } from 'react-router-dom'
import { program, contact } from '../data'
import { navLinks } from '../nav'

export default function Footer() {
  return (
    <footer className="relative bg-[#06193d] text-slate-300 border-t border-sky-950">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="container-page relative py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand & University */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white p-1 shadow-md">
                <img
                  src="/isufst-logo.png"
                  alt={program.universityAbbrev}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <div className="font-sans text-sm font-bold text-white">
                  {program.university}
                </div>
                <div className="text-xs text-[#38bdf8] font-medium">
                  {program.college} · School of Graduate Studies
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-300">
              The {program.degree} ({program.abbrev}) is a PQF Level 7 graduate program developing advanced systems architects, applied AI researchers, and engineering leaders for Western Visayas and the nation.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-sky-400/20 bg-sky-950/50 px-3 py-1.5 text-[11px] text-sky-200">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff]" />
              <span>Accredited under CHED CMO 15 Series of 2019</span>
            </div>
          </div>

          {/* Program Links */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Program Exploration
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              {navLinks.slice(0, 5).map(({ href, label }) => (
                <li key={href}>
                  <a href={`/${href}`} className="text-slate-300 transition-colors hover:text-[#38bdf8]">
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
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <a href="/#eligibility" className="text-slate-300 transition-colors hover:text-[#38bdf8]">
                  Eligibility Pathway
                </a>
              </li>
              <li>
                <a href="/#tuition" className="text-slate-300 transition-colors hover:text-[#38bdf8]">
                  Tuition & DOST Grants
                </a>
              </li>
              <li>
                <Link to="/scholarship" className="text-slate-300 transition-colors hover:text-[#38bdf8]">
                  DOST-SEI STRAND Guide
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-slate-300 transition-colors hover:text-[#38bdf8]">
                  Faculty & Mentors
                </Link>
              </li>
              <li>
                <a href="/#faq" className="text-slate-300 transition-colors hover:text-[#38bdf8]">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Graduate Office
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-slate-300">
              <li>{contact.address}</li>
              <li className="pt-1">
                <a href={`mailto:${contact.email}`} className="text-[#38bdf8] hover:underline font-semibold">
                  {contact.email}
                </a>
              </li>
              <li>{contact.phone}</li>
              <li className="pt-1 text-[11px] text-slate-400">{contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-sky-950 pt-6 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {program.university} ({program.universityAbbrev}). All rights reserved.</p>
          <div className="flex gap-3 text-slate-400">
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
