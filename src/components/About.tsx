import { stats, outcomes } from '../data'
import Section from './Section'
import Reveal from './Reveal'
import Icon from './Icon'

export default function About() {
  return (
    <Section
      id="overview"
      className="bg-white py-16 dark:bg-[#071328]/60 sm:py-20"
      eyebrow="Program Paradigm"
      title={
        <>
          Moving from Consuming Tech to{' '}
          <span className="text-[#0284c7]">Engineering Artifacts</span>
        </>
      }
      intro="Most master's programs in the region evaluate students purely on theoretical analysis. The ISUFST MIT requires you to engineer and validate a tangible technology artifact — an edge-AI system, IoT sensor mesh, or spatial data platform that directly serves the blue economy and agriculture of Western Visayas."
    >
      {/* 4 Pillars Grid */}
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((x, i) => (
          <Reveal
            key={x.label}
            delay={i * 0.05}
            variant="scale"
            className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-all hover:border-[#0284c7] hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
              Pillar 0{i + 1}
            </div>
            <div className="mt-2 font-sans text-3xl font-black text-[#0b3d91] dark:text-sky-300">
              {x.value}
            </div>
            <div className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
              {x.label}
            </div>
            <div className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              {x.sub}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Comparison Panel: DSRM Artifact vs Traditional Thesis */}
      <Reveal className="mt-12" delay={0.1}>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800">
            <div className="p-6 sm:p-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                Conventional Master of Science (MS)
              </span>
              <h4 className="mt-1 text-lg font-bold text-slate-800 dark:text-slate-200">
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

            <div className="p-6 sm:p-8 bg-sky-50/50 dark:bg-sky-950/20">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                ISUFST Master in Information Technology (MIT)
              </span>
              <h4 className="mt-1 text-lg font-bold text-[#0b3d91] dark:text-sky-300">
                The Design Science Artifact Model
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Icon name="check" className="h-4 w-4 text-[#0284c7] shrink-0 mt-0.5" />
                  <span><strong>Demonstrable technology artifact:</strong> working models, sensor nodes, or cloud APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="h-4 w-4 text-[#0284c7] shrink-0 mt-0.5" />
                  <span><strong>Empirical evaluation:</strong> benchmarked against real latency, accuracy, or field trials</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="check" className="h-4 w-4 text-[#0284c7] shrink-0 mt-0.5" />
                  <span><strong>Refereed publication:</strong> mandatory international peer-reviewed journal acceptance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Graduate Outcomes PO1–PO6 */}
      <Reveal className="mt-14" delay={0.15}>
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284c7]">
            Graduate Attributes
          </span>
          <h3 className="mt-1 text-2xl font-bold text-[#0b3d91] dark:text-white sm:text-3xl">
            Program Educational Outcomes
          </h3>
          <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
            Mandated by CHED CMO 15 s. 2019 and Level 7 of the Philippine Qualifications Framework.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((po, i) => (
            <Reveal
              key={po.n}
              delay={i * 0.05}
              variant="scale"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-[#0284c7] hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#0b3d91] font-mono text-xs font-bold text-white dark:bg-[#0284c7]">
                  {po.n}
                </span>
                <div className="font-sans text-sm font-bold text-slate-900 dark:text-white">
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
