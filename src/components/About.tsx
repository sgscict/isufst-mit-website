import { stats, outcomes } from '../data'
import Section from './Section'
import Reveal from './Reveal'
import Icon from './Icon'

export default function About() {
  return (
    <Section
      id="overview"
      className="bg-white py-16 dark:bg-navy-950/40 sm:py-24"
      eyebrow="Program Paradigm"
      title={
        <>
          Moving from Consuming Tech to{' '}
          <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400">Engineering Artifacts</span>
        </>
      }
      intro={`Most master's programs in the region evaluate students purely on theoretical analysis. The ISUFST MIT requires you to engineer and validate a tangible technology artifact — an edge-AI system, IoT sensor mesh, or spatial data platform that directly serves the blue economy and agriculture of Western Visayas.`}
    >
      {/* 4 Pillars Grid */}
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((x, i) => (
          <Reveal
            key={x.label}
            delay={i * 0.06}
            variant="scale"
            className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 transition-all hover:border-amber-400/50 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-navy-900/60 dark:hover:bg-navy-900"
          >
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Pillar 0{i + 1}
            </div>
            <div className="mt-2 font-display text-4xl font-bold text-navy-950 dark:text-white">
              {x.value}
            </div>
            <div className="mt-2 text-sm font-bold text-slate-900 dark:text-slate-100">
              {x.label}
            </div>
            <div className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-navy-200/60">
              {x.sub}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Comparison Panel: DSRM Artifact vs Traditional Thesis */}
      <Reveal className="mt-14" delay={0.1}>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50 dark:border-white/10 dark:bg-navy-900/40">
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-white/10">
            <div className="p-6 sm:p-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                Conventional Master of Science (MS)
              </span>
              <h4 className="mt-1 font-display text-xl font-bold text-slate-800 dark:text-slate-200">
                The Theoretical Thesis Model
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Predominantly hypothesis testing and survey analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Deliverable is usually a bound printed thesis document</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Often detached from actual operational enterprise environments</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 bg-amber-500/5 dark:bg-amber-400/5">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                ISUFST Master in Information Technology (MIT)
              </span>
              <h4 className="mt-1 font-display text-xl font-bold text-navy-950 dark:text-white">
                The Design Science Artifact Model
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Icon name="check" className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Demonstrable technology artifact:</strong> working models, sensor nodes, or cloud APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Empirical evaluation:</strong> benchmarked against real latency, accuracy, or field trials</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Refereed publication:</strong> mandatory international peer-reviewed journal acceptance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Graduate Outcomes PO1–PO6 */}
      <Reveal className="mt-16" delay={0.15}>
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Graduate Attributes
          </span>
          <h3 className="mt-1 font-display text-2xl font-bold text-navy-950 dark:text-white sm:text-3xl">
            Program Educational Outcomes
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-navy-100/70">
            Mandated by CHED CMO 15 s. 2019 and Level 7 of the Philippine Qualifications Framework.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((po, i) => (
            <Reveal
              key={po.n}
              delay={i * 0.05}
              variant="scale"
              className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all hover:border-teal-400/50 hover:shadow-md dark:border-white/10 dark:bg-navy-900/60"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-navy-900 font-mono text-xs font-bold text-amber-400 dark:bg-amber-400/10 dark:text-amber-300">
                  {po.n}
                </span>
                <div className="font-display text-sm font-bold text-navy-950 dark:text-white">
                  {po.title}
                </div>
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {po.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
