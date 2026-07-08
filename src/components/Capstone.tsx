import { capstone } from '../data'
import Section from './Section'
import Reveal from './Reveal'

function Phase({ item, index, isLast }: { item: (typeof capstone)[number]; index: number; isLast: boolean }) {
  return (
    <Reveal delay={index * 0.06} className="relative flex gap-5 sm:gap-6">
      <div className="flex flex-col items-center">
        <div
          className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-2xl font-display text-xs font-bold shadow-lg ${
            item.gate
              ? 'bg-gradient-to-br from-teal-500 to-teal-400 text-white shadow-teal-500/30'
              : 'border border-slate-200 bg-white text-navy-800 shadow-slate-200/50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-none'
          }`}
        >
          {item.gate ? '★' : index + 1}
          {item.gate && (
            <span className="absolute -inset-1 animate-ping rounded-2xl bg-teal-400/20" style={{ animationDuration: '2.5s' }} />
          )}
        </div>
        {!isLast && (
          <div className="timeline-line mt-2 w-px flex-1 bg-gradient-to-b from-teal-400/50 to-slate-200 dark:from-teal-400/30 dark:to-white/10" />
        )}
      </div>

      <div
        className={`gradient-border mb-6 flex-1 rounded-2xl p-5 transition-all duration-400 sm:p-6 ${
          item.gate
            ? 'border-teal-200/80 bg-gradient-to-br from-teal-50/80 to-white shadow-lg shadow-teal-500/5 dark:from-teal-500/10 dark:to-white/5 dark:shadow-teal-500/10'
            : 'surface-card'
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              item.gate
                ? 'bg-teal-500/15 text-teal-700 dark:text-teal-300'
                : 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-navy-100/70'
            }`}
          >
            {item.phase}
          </span>
          <span className="text-xs text-slate-500 dark:text-navy-200/50">{item.kind}</span>
        </div>
        <h3 className="mt-3 font-display text-base font-bold text-navy-900 dark:text-white sm:text-lg">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-navy-100/65">{item.body}</p>
      </div>
    </Reveal>
  )
}

export default function Capstone() {
  return (
    <Section
      id="capstone"
      className="surface-section"
      eyebrow="Capstone Journey"
      title="From problem to working artifact"
      intro="Two courses, three defenses, one demonstrable technology artifact — governed by Design Science Research Methodology (DSRM)."
    >
      <div className="mx-auto max-w-3xl">
        {capstone.map((item, i) => (
          <Phase key={item.title} item={item} index={i} isLast={i === capstone.length - 1} />
        ))}
      </div>
    </Section>
  )
}
