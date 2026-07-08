import { admission, careers } from '../data'
import Icon from './Icon'
import Reveal from './Reveal'

function Marquee() {
  const items = [...careers, ...careers]
  return (
    <div className="relative mt-5 h-10 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-navy-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-navy-900 to-transparent" />
      <div className="animate-marquee flex w-max gap-3">
        {items.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="shrink-0 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium whitespace-nowrap text-navy-50"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Admission() {
  return (
    <section id="admission" className="bg-white py-12 dark:bg-navy-950/30 sm:py-16">
      <div className="container-page">
        <div className="grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-teal-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              Admission
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 text-balance sm:text-4xl dark:text-white">
              What you need to apply
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-navy-100/65">
              Prepare the following to get started:
            </p>
            <ul className="mt-4 space-y-1">
              {admission.map((item) => (
                <li
                  key={item}
                  className="flex min-w-0 items-start gap-3 rounded-xl p-2.5 text-slate-700 dark:text-navy-100/75"
                >
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-400 text-white shadow-md shadow-teal-500/20">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.08} variant="scale" className="min-w-0 w-full">
            <div className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-7 text-white shadow-2xl shadow-navy-900/30 sm:p-8">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="animate-orb absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-500/15 blur-3xl" />
              <h3 className="relative font-display text-xl font-bold sm:text-2xl">
                Where an MIT can take you
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-navy-100/75 sm:text-base">
                Graduates move into senior technical, leadership, research, and academic roles across
                industry and government.
              </p>
              <Marquee />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
