import { requirements } from '../data'
import Section from './Section'
import Reveal from './Reveal'

export default function Graduate() {
  return (
    <Section
      id="graduate"
      className="bg-navy-950 py-16 text-white sm:py-24"
      dark
      eyebrow="Degree Completion"
      title={
        <>
          Three Academic <span className="font-serif italic font-normal text-amber-400">Quality Gates</span>
        </>
      }
      intro="The Master in Information Technology maintains rigorous academic and industrial standards. Every candidate must satisfy three milestones to qualify for graduation and degree conferment."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {requirements.map((req, i) => (
          <Reveal
            key={req.n}
            delay={i * 0.08}
            variant="scale"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/10 hover:shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                  Gate {req.n}
                </span>
                <span className="rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 font-mono text-[11px] font-bold text-teal-300">
                  {req.badge}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold text-white">
                {req.title}
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                {req.body}
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between text-xs">
              <span className="text-slate-400">Target Milestone:</span>
              <span className="font-semibold text-amber-300">{req.when}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
