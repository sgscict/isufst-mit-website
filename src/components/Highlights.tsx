import { highlights } from '../data'
import Section from './Section'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Highlights() {
  return (
    <Section
      id="why"
      className="bg-slate-50/70 py-16 dark:bg-navy-950/40 sm:py-24"
      eyebrow="Distinctive Pillars"
      title={
        <>
          Six Commitments That <span className="font-serif italic font-normal text-teal-600 dark:text-teal-400">Define the Degree</span>
        </>
      }
      intro="Not technology for its own sake — an engineering graduate program centered on authentic societal and industrial impact in Western Visayas."
    >
      <div className="mx-auto max-w-5xl grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal
            key={h.title}
            delay={i * 0.05}
            variant="scale"
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/50 hover:shadow-lg dark:border-white/10 dark:bg-navy-900/60"
          >
            <div>
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-800 transition-colors group-hover:bg-navy-900 group-hover:text-amber-400 dark:bg-white/10 dark:text-amber-300">
                <Icon name={h.icon} className="h-5 w-5" />
              </div>

              <h3 className="mt-4 font-display text-base font-bold text-navy-950 dark:text-white">
                {h.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {h.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
