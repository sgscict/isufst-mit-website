import { frontiers } from '../data'
import Section from './Section'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Research() {
  return (
    <Section
      id="research"
      className="bg-slate-50/70 py-16 dark:bg-navy-950/40 sm:py-24"
      eyebrow="Regional Research Agenda"
      title={
        <>
          Applied Computing for the <span className="font-serif italic font-normal text-teal-600 dark:text-teal-400">Blue Economy</span>
        </>
      }
      intro="Aligned directly with the CICT Research Agenda 2026–2031 — six strategic frontiers where applied machine learning, IoT, and data analytics transform agriculture, fisheries, and rural communities."
    >
      <div className="mx-auto max-w-5xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {frontiers.map((f, i) => (
          <Reveal
            key={f.n}
            delay={i * 0.05}
            variant="scale"
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/50 hover:shadow-lg dark:border-white/10 dark:bg-navy-900/60"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400">
                  Frontier {f.n}
                </span>
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-teal-500/10 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
                  <Icon name={f.icon} className="h-4 w-4" />
                </div>
              </div>

              <h3 className="mt-4 font-display text-base font-bold text-navy-950 dark:text-white">
                {f.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {f.body}
              </p>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-3 text-[11px] font-semibold text-slate-400 dark:border-white/5 dark:text-slate-500">
              CICT Research Agenda 2026–2031 Priority Area
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
