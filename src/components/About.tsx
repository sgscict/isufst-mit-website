import { stats, outcomes, program } from '../data'
import Section from './Section'
import Reveal from './Reveal'
import Icon from './Icon'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Program Overview"
      title={
        <>
          A degree you complete by{' '}
          <span className="gradient-text">building</span>
        </>
      }
      intro={`Most master's programs ask you to describe and analyze. The ${program.abbrev} asks you to build — moving from consuming knowledge to producing it, and graduating with a working artifact that a real community can use.`}
    >
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((x, i) => (
          <Reveal
            key={x.label}
            delay={i * 0.08}
            variant="scale"
            className={`gradient-border group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/10 ${
              i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal-500/5 transition-transform duration-500 group-hover:scale-150" />
            <div
              className={`font-display font-bold text-navy-800 dark:text-white ${i === 0 ? 'text-5xl' : 'text-3xl'}`}
            >
              {x.value}
            </div>
            <div className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-200">{x.label}</div>
            <div className="mt-1 text-sm text-slate-500 dark:text-navy-100/50">{x.sub}</div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20" delay={0.1}>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-bold text-navy-900 dark:text-white">
              Who you become — graduate outcomes
            </h3>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-navy-100/65">
              Pursuant to CHED CMO 15 s. 2019 and Level 7 of the Philippine Qualifications Framework.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((po, i) => (
            <Reveal
              key={po.n}
              delay={i * 0.06}
              variant="scale"
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-400 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-teal-400/30"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-400 text-xs font-bold text-white shadow-md shadow-teal-500/25">
                  {po.n}
                </span>
                <div className="font-semibold text-navy-900 dark:text-white">{po.title}</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-navy-100/65">{po.body}</p>
              <Icon
                name="arrow"
                className="absolute bottom-5 right-5 h-4 w-4 text-teal-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
