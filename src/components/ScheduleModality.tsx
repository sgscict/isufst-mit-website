import { executiveFeatures } from '../data'
import Section from './Section'
import Icon from './Icon'
import Reveal from './Reveal'

export default function ScheduleModality() {
  return (
    <Section
      id="schedule"
      className="bg-slate-50/70 py-16 dark:bg-navy-950/40 sm:py-24"
      eyebrow="Delivery Modality"
      title={
        <>
          Engineered for <span className="font-serif italic font-normal text-teal-600 dark:text-teal-400">Working Practitioners</span>
        </>
      }
      intro="You do not need to pause your career to earn your master’s degree. The MIT is built specifically for full-time software engineers, network administrators, collegiate educators, and technical leads."
    >
      <div className="mx-auto max-w-5xl">
        {/* Modality feature cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {executiveFeatures.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 0.08} variant="scale">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all hover:border-teal-400/50 hover:shadow-lg dark:border-white/10 dark:bg-navy-900/60">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-teal-500/10 px-3 py-1 font-mono text-xs font-bold text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
                    {feat.time}
                  </span>
                  <div className="grid h-8 w-8 place-items-center rounded-xl bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-teal-300">
                    <Icon name={i === 0 ? 'calendar' : i === 1 ? 'laptop' : i === 2 ? 'chip' : 'anchor'} className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-navy-950 dark:text-white">
                  {feat.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {feat.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Weekly flow schematic */}
        <Reveal delay={0.15} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-900/80 sm:p-8">
            <h4 className="font-display text-base font-bold text-navy-950 dark:text-white">
              A Typical Week in the MIT Program
            </h4>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Balanced rhythm designed around real software engineering and organizational sprint cycles.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/5">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                  Mon – Fri (Weekday)
                </div>
                <div className="mt-2 text-sm font-bold text-navy-900 dark:text-white">
                  Independent & Cloud Labs
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  Asynchronous lecture readings, cloud notebook exercises, and model training executed on remote GPU clusters at your own pace.
                </p>
              </div>

              <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 p-4 dark:border-teal-400/20 dark:bg-teal-400/5">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  Saturday (Synchronous)
                </div>
                <div className="mt-2 text-sm font-bold text-navy-950 dark:text-white">
                  Executive Intensive Seminar
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                  Deep architectural discussions, guest industrial lectures, and live code reviews via HyFlex virtual stream or Barotac Nuevo campus lab.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/5">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                  Sunday (Rest & Reflection)
                </div>
                <div className="mt-2 text-sm font-bold text-navy-900 dark:text-white">
                  Family & Work-Life Balance
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  Zero mandatory Sunday sessions. Recharges your energy for the upcoming professional work week.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
