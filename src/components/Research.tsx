import { frontiers } from '../data'
import Section from './Section'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Research() {
  return (
    <Section
      id="research"
      className="bg-slate-50/70 py-16 dark:bg-[#071328]/40 sm:py-20"
      eyebrow="Regional Research Agenda"
      title={
        <>
          Applied Computing for the <span className="text-[#0284c7]">Blue Economy</span>
        </>
      }
      intro="Aligned directly with the CICT Research Agenda 2026–2031 — six strategic frontiers where applied machine learning, IoT, and data analytics transform agriculture, fisheries, and rural communities."
    >
      <div className="mx-auto max-w-5xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {frontiers.map((f, i) => (
          <Reveal
            key={f.n}
            delay={i * 0.04}
            variant="scale"
            className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#0284c7] hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#0284c7]">
                  Frontier {f.n}
                </span>
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-sky-50 text-[#0b3d91] dark:bg-sky-950 dark:text-sky-300">
                  <Icon name={f.icon} className="h-4 w-4" />
                </div>
              </div>

              <h3 className="mt-4 font-sans text-base font-bold text-slate-950 dark:text-white group-hover:text-[#0b3d91]">
                {f.title}
              </h3>

              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {f.body}
              </p>
            </div>

            <div className="mt-5 border-t border-slate-100 pt-3 text-[11px] font-semibold text-slate-400 dark:border-slate-800">
              CICT Research Agenda 2026–2031 Priority
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
