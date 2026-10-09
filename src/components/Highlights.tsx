import { highlights } from '../data'
import Section from './Section'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Highlights() {
  return (
    <Section
      id="why"
      className="bg-slate-50/70 py-16 dark:bg-[#071328]/40 sm:py-20"
      eyebrow="Distinctive Pillars"
      title={
        <>
          Six Commitments That <span className="text-[#0284c7]">Define the Degree</span>
        </>
      }
      intro="Not technology for its own sake — an engineering graduate program centered on authentic societal and industrial impact in Western Visayas."
    >
      <div className="mx-auto max-w-5xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal
            key={h.title}
            delay={i * 0.04}
            variant="scale"
            className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#0284c7] hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div>
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-[#0b3d91] dark:bg-sky-950 dark:text-sky-300">
                <Icon name={h.icon} className="h-5 w-5" />
              </div>

              <h3 className="mt-4 font-sans text-base font-bold text-slate-950 dark:text-white group-hover:text-[#0b3d91]">
                {h.title}
              </h3>

              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {h.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
