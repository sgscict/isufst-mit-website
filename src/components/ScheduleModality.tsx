import { executiveFeatures } from '../data'
import Section from './Section'
import Icon from './Icon'
import Reveal from './Reveal'

export default function ScheduleModality() {
  return (
    <Section
      id="schedule"
      className="bg-slate-50/70 py-16 dark:bg-[#071328]/40 sm:py-20"
      eyebrow="Delivery Modality"
      title={
        <>
          Engineered for <span className="text-[#0284c7]">Working Practitioners</span>
        </>
      }
      intro="You do not need to pause your career to earn your master’s degree. The MIT is built specifically for full-time software engineers, network administrators, collegiate educators, and technical leads."
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-5 sm:grid-cols-2">
          {executiveFeatures.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 0.05} variant="scale">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#0284c7] hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-sky-50 px-2.5 py-1 font-mono text-xs font-bold text-[#0b3d91] dark:bg-sky-950 dark:text-sky-300">
                    {feat.time}
                  </span>
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-slate-100 text-[#0b3d91] dark:bg-slate-800 dark:text-sky-300">
                    <Icon name={i === 0 ? 'calendar' : i === 1 ? 'laptop' : i === 2 ? 'chip' : 'anchor'} className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="mt-4 font-sans text-base font-bold text-slate-900 dark:text-white">
                  {feat.title}
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {feat.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Weekly flow */}
        <Reveal delay={0.1} className="mt-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <h4 className="font-sans text-base font-bold text-[#0b3d91] dark:text-sky-300">
              A Typical Week in the MIT Program
            </h4>
            <p className="mt-1 text-xs text-slate-500">
              Balanced rhythm designed around real software engineering and organizational sprint cycles.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                  Mon – Fri (Weekday)
                </div>
                <div className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                  Independent Cloud Labs
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  Asynchronous lecture readings, cloud notebook exercises, and model training executed on remote GPU clusters at your own pace.
                </p>
              </div>

              <div className="rounded-xl border border-sky-300 bg-sky-50/70 p-4 dark:border-sky-800 dark:bg-sky-950/40">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                  Saturday (Synchronous)
                </div>
                <div className="mt-1 text-sm font-bold text-[#0b3d91] dark:text-sky-300">
                  Executive Intensive Seminar
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                  Deep architectural discussions, guest industrial lectures, and live code reviews via HyFlex virtual stream or Barotac Nuevo campus lab.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                  Sunday (Rest & Reflection)
                </div>
                <div className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                  Work-Life Balance
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
