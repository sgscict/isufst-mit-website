import { curriculum } from '../data'
import Section from './Section'
import Icon from './Icon'
import Reveal from './Reveal'

function Block({ block, index, isLast }: { block: (typeof curriculum)[number]; index: number; isLast: boolean }) {
  return (
    <Reveal delay={index * 0.08} className="relative flex min-w-0 gap-6">
      {/* Timeline rail */}
      <div className="flex flex-col items-center">
        <div className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 font-display text-sm font-bold text-white shadow-lg shadow-navy-900/30">
          {index + 1}
        </div>
        {!isLast && (
          <div className="timeline-line mt-2 w-px flex-1 bg-gradient-to-b from-navy-300 to-transparent dark:from-teal-400/30 dark:to-white/10" />
        )}
      </div>

      {/* Card */}
      <div className="gradient-border group mb-8 min-w-0 flex-1 rounded-2xl p-6 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-teal-500/10 sm:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white">{block.term}</h3>
          <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-700 dark:text-teal-300">
            {block.ay} · {block.units} units
          </span>
        </div>
        <ul className="mt-5 space-y-3">
          {block.courses.map((c) => (
            <li
              key={c.code}
              className="flex min-w-0 items-start gap-3 rounded-xl p-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 dark:text-navy-100/75 dark:hover:bg-white/5"
            >
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-500/15 dark:bg-teal-400/15">
                <Icon name="check" className="h-3 w-3 text-teal-600 dark:text-teal-400" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-slate-900 dark:text-white">
                  {c.code} — {c.title}
                </div>
                <div className="mt-0.5 text-xs text-slate-500 dark:text-navy-100/50">
                  {c.units} unit{c.units !== 1 ? 's' : ''} ·{' '}
                  {c.kind === 'core'
                    ? 'Core'
                    : c.kind === 'spec'
                      ? 'Specialization'
                      : c.kind === 'caps'
                        ? 'Capstone'
                        : 'Milestone'}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export default function Curriculum() {
  return (
    <Section
      id="curriculum"
      className="bg-dot-grid"
      eyebrow="Curriculum"
      title="A structured path from foundations to capstone"
      intro="Thirty-six (36) units spanning foundation, core, specialization electives, and a two-part capstone research project."
    >
      <div className="mx-auto max-w-3xl">
        {curriculum.map((block, i) => (
          <Block key={`${block.term}-${block.ay}`} block={block} index={i} isLast={i === curriculum.length - 1} />
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-slate-500 dark:text-navy-100/50">
        Course titles are indicative. Refer to the official CICT graduate program of study for the
        approved curriculum and unit distribution.
      </p>
    </Section>
  )
}
