import { requirements } from '../data'
import Section from './Section'

export default function Graduate() {
  return (
    <Section
      id="graduate"
      className="bg-[#0b3d91] py-16 text-white sm:py-20"
      dark
      eyebrow="Degree Completion"
      title={
        <>
          Three Academic <span className="text-[#38bdf8]">Quality Gates</span>
        </>
      }
      intro="The Master in Information Technology maintains rigorous academic and industrial standards. Every candidate must satisfy three milestones to qualify for graduation and degree conferment."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {requirements.map((req) => (
          <div
            key={req.n}
            className="flex flex-col justify-between rounded-2xl border border-sky-400/20 bg-sky-950/40 p-6 backdrop-blur-sm transition-all hover:border-sky-400/50 hover:bg-sky-950/60"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                  Gate {req.n}
                </span>
                <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-sky-200">
                  {req.badge}
                </span>
              </div>

              <h3 className="mt-4 font-sans text-lg font-bold text-white">
                {req.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-sky-100/80">
                {req.body}
              </p>
            </div>

            <div className="mt-6 border-t border-sky-400/20 pt-3 flex items-center justify-between text-xs">
              <span className="text-sky-300/70">Target:</span>
              <span className="font-semibold text-white">{req.when}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
