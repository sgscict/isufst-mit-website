import { contact, program } from '../data'
import Icon from './Icon'
import Reveal from './Reveal'

const details = [
  { icon: 'pin', label: contact.office, value: contact.address },
  { icon: 'mail', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: 'phone', label: 'Phone', value: contact.phone },
  { icon: 'clock', label: 'Office hours', value: contact.hours },
]

export default function Apply() {
  return (
    <section id="apply" className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-950 via-navy-900 to-[#0d1f4a] px-6 py-14 text-white shadow-2xl shadow-navy-900/30 sm:px-12 sm:py-16">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="bg-noise absolute inset-0 opacity-40" />
            <div className="animate-orb absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal-500/15 blur-[80px]" />
            <div className="animate-orb-reverse absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-navy-500/25 blur-[80px]" />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  Apply
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold text-balance sm:text-4xl lg:text-[2.75rem]">
                  Ready to advance your{' '}
                  <span className="gradient-text">IT career</span>?
                </h2>
                <p className="mt-5 max-w-md text-lg text-navy-100/75">
                  Applications for the {program.abbrev} program are welcome each semester. Take the
                  next step toward a graduate degree from {program.universityAbbrev}.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${contact.email}?subject=MIT%20Program%20Inquiry`}
                    className="shine group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-400 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-teal-500/25 transition-all hover:shadow-2xl hover:shadow-teal-500/30"
                  >
                    Inquire About Admission
                    <Icon name="arrow" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {details.map((d, i) => {
                  const inner = (
                    <>
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-teal-400 transition-all duration-300 group-hover:bg-teal-500/20 group-hover:scale-110">
                        <Icon name={d.icon} className="h-5 w-5" />
                      </div>
                      <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-navy-200/80">
                        {d.label}
                      </div>
                      <div className="mt-1 text-sm font-medium text-white">{d.value}</div>
                    </>
                  )
                  const cls =
                    'group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-teal-400/30 hover:bg-white/10 hover:-translate-y-0.5'
                  return d.href ? (
                    <a key={d.label} href={d.href} className={cls} style={{ transitionDelay: `${i * 50}ms` }}>
                      {inner}
                    </a>
                  ) : (
                    <div key={d.label} className={cls}>
                      {inner}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
