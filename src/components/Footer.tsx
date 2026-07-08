import { Link } from 'react-router-dom'
import { program, contact } from '../data'
import { navLinks, pageLinks } from '../nav'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="animate-orb absolute -right-32 top-0 h-64 w-64 rounded-full bg-teal-500/5 blur-[80px]" />

      <div className="container-page relative py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-[3.75rem] shrink-0 place-items-center rounded-xl bg-white p-1.5 shadow-lg">
                <img src="/isufst-logo.png" alt={program.universityAbbrev} className="h-full w-full object-contain" />
              </span>
              <div className="leading-tight">
                <div className="font-display text-base font-bold text-white">{program.degree}</div>
                <div className="text-sm text-navy-200/70">
                  {program.collegeAbbrev} · {program.universityAbbrev}
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200/60">
              {program.college}, {program.university}. Developing advanced IT professionals and
              researchers for Western Visayas and beyond.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={`/${href}`}
                    className="text-navy-200/70 transition-colors duration-300 hover:text-teal-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
              {pageLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-navy-200/70 transition-colors duration-300 hover:text-teal-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-navy-200/60">
              <li>{contact.office}</li>
              <li>{contact.address}</li>
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-teal-400">
                  {contact.email}
                </a>
              </li>
              <li>{contact.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-navy-300/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {program.universityAbbrev} · {program.college}. All rights reserved.
          </p>
          <p>This is an informational program website.</p>
        </div>
      </div>
    </footer>
  )
}
