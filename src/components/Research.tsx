import { frontiers } from '../data'
import Section from './Section'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Research() {
  return (
    <Section
      id="research"
      className="bg-white dark:bg-navy-950/50"
      eyebrow="Research Frontiers"
      title="Where your capstone can make impact"
      intro="Aligned with the CICT Research Agenda 2026–2031 — six frontiers where applied AI and data analytics meet fisheries, agriculture, and the blue economy."
    >
      <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {frontiers.map((f, i) => (
          <Reveal
            key={f.n}
            delay={i * 0.06}
            variant="scale"
            className="gradient-border group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5 dark:hover:shadow-teal-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-navy-500/0 transition-all duration-500 group-hover:from-teal-500/[0.04] group-hover:to-navy-500/[0.04]" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-bold text-teal-500/60 dark:text-teal-400/50">
                  {f.n}
                </span>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-navy-50 to-navy-100/80 text-navy-700 transition-all duration-400 group-hover:from-teal-500 group-hover:to-teal-400 group-hover:text-white dark:from-white/10 dark:to-white/5 dark:text-teal-300">
                  <Icon name={f.icon} className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-navy-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-navy-100/65">
                {f.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
