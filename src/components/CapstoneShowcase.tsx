import { useState } from 'react'
import { capstoneShowcase } from '../data'
import Section from './Section'
import Icon from './Icon'
import Reveal from './Reveal'

export default function CapstoneShowcase() {
  const [activeFilter, setActiveFilter] = useState('All')

  const domains = ['All', 'Aquaculture & Fisheries', 'Marine Resource Management', 'Coastal Informatics', 'Smart Agriculture', 'Agricultural Value Chains']

  const filteredProjects = capstoneShowcase.filter(
    (p) => activeFilter === 'All' || p.domain === activeFilter
  )

  return (
    <Section
      id="capstone"
      className="bg-white py-16 dark:bg-[#071328]/60 sm:py-20"
      eyebrow="Design Science in Action"
      title={
        <>
          Applied <span className="text-[#0284c7]">Artifact</span> Showroom
        </>
      }
      intro="Explore how ISUFST MIT candidates translate Design Science Research Methodology (DSRM) into demonstrable computing systems deployed alongside actual Western Visayas stakeholders."
    >
      <div className="mx-auto max-w-5xl">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-5 dark:border-slate-800">
          {domains.map((dom) => (
            <button
              key={dom}
              type="button"
              onClick={() => setActiveFilter(dom)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                activeFilter === dom
                  ? 'bg-[#0b3d91] text-white shadow-sm dark:bg-[#0284c7]'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {dom}
            </button>
          ))}
        </div>

        {/* Artifact Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05} variant="scale">
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#0284c7] hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-md bg-sky-50 px-2.5 py-1 font-mono text-[11px] font-bold text-[#0b3d91] dark:bg-sky-950 dark:text-sky-300">
                      {project.tag}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      {project.domain}
                    </span>
                  </div>

                  <h3 className="mt-3 font-sans text-base font-bold text-[#0b3d91] dark:text-white group-hover:text-[#0284c7] sm:text-lg">
                    {project.title}
                  </h3>

                  <div className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Partner Stakeholder:
                    </span>{' '}
                    {project.stakeholder}
                  </div>

                  <div className="mt-4 space-y-2 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 dark:border-slate-800 dark:bg-slate-800/40">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Problem Statement:
                      </span>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284c7] dark:text-sky-400">
                        Technological Artifact:
                      </span>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
                        {project.artifact}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-slate-200 bg-white px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-3 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-start gap-2 text-xs text-emerald-700 dark:text-emerald-400">
                    <Icon name="check" className="h-4 w-4 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Evaluation: </span>
                      {project.evaluation}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#0b3d91] dark:text-sky-300">
                    <Icon name="journal" className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{project.publicationStatus}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
