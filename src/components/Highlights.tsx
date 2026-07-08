import { highlights } from '../data'
import Section from './Section'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Highlights() {
  return (
    <Section
      id="why"
      className="bg-white dark:bg-navy-950/30"
      eyebrow="What makes it distinctive"
      title="Six commitments that define this degree"
      intro="Not technology for its own sake — a program about impact, held to standards that read clearly anywhere in the world."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal
            key={h.title}
            delay={i * 0.07}
            variant="scale"
            className="gradient-border shine group relative overflow-hidden rounded-2xl bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/80 dark:hover:shadow-teal-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-navy-500/0 transition-all duration-500 group-hover:from-teal-500/[0.03] group-hover:to-navy-500/[0.03]" />
            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-navy-50 to-navy-100/80 text-navy-700 shadow-sm transition-all duration-400 group-hover:scale-110 group-hover:from-teal-500 group-hover:to-teal-400 group-hover:text-white group-hover:shadow-lg group-hover:shadow-teal-500/25 dark:from-white/10 dark:to-white/5 dark:text-teal-300">
                <Icon name={h.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-navy-900 dark:text-white">{h.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-navy-100/65">{h.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
