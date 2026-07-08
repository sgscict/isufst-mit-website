import { requirements } from '../data'
import Section from './Section'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Graduate() {
  return (
    <Section
      id="graduate"
      dark
      className="text-white"
      eyebrow="Graduation Requirements"
      title={
        <>
          Three gates between you and your{' '}
          <span className="gradient-text">degree</span>
        </>
      }
      intro="The MIT is not completed by a conventional thesis alone. You must pass the comprehensive exam, defend a working capstone artifact, and publish in a refereed journal."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {requirements.map((req, i) => (
          <Reveal
            key={req.n}
            delay={i * 0.1}
            variant="scale"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-white/10 hover:shadow-xl hover:shadow-teal-500/10"
          >
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-teal-500/10 transition-transform duration-500 group-hover:scale-150" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-bold text-teal-400/30">{req.n}</span>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-teal-500/20 text-teal-300">
                  <Icon name={req.icon} className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{req.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-100/70">{req.body}</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                {req.when}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
