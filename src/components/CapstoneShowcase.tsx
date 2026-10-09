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
      className="bg-white py-16 dark:bg-navy-950/60 sm:py-24"
      eyebrow="Design Science in Action"
      title={
        <>
          Applied <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400">Artifact</span> Showroom
        </>
      }
      intro="Explore how ISUFST MIT candidates translate Design Science Research Methodology (DSRM) into demonstrable computing systems deployed alongside actual Western Visayas stakeholders."
    >
      <div className="mx-auto max-w-5xl">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-6 dark:border-white/10">
          {domains.map((dom) => (
            <button
              key={dom}
              type="button"
              onClick={() => setActiveFilter(dom)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                activeFilter === dom
                  ? 'bg-navy-900 text-white shadow-sm dark:bg-amber-500 dark:text-navy-950'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10'
              }`}
            >
              {dom}
            </button>
          ))}
        </div>

        {/* Artifact Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08} variant="scale">
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl dark:border-white/10 dark:bg-navy-900/60 dark:hover:border-amber-400/30">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-teal-50 px-2.5 py-1 font-mono text-[11px] font-bold text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
                      {project.tag}
                    </span>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      {project.domain}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold text-navy-950 group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-400 sm:text-xl">
                    {project.title}
                  </h3>

                  <div className="mt-2.5 flex items-start gap-2 text-xs text-slate-600 dark:text-navy-200/70">
                    <span className="font-semibold text-slate-900 dark:text-white shrink-0">
                      Partner Stakeholder:
                    </span>
                    <span>{project.stakeholder}</span>
                  </div>

                  <div className="mt-4 space-y-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 dark:border-white/5 dark:bg-white/5">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                        Problem Statement:
                      </span>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                        Technological Artifact:
                      </span>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                        {project.artifact}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200/80 bg-white px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-700 dark:border-white/10 dark:bg-navy-950 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4 dark:border-white/5 space-y-2">
                  <div className="flex items-start gap-2 text-xs text-teal-700 dark:text-teal-300">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-teal-600 mt-0.5" />
                    <div>
                      <span className="font-bold">Empirical Evaluation: </span>
                      {project.evaluation}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[11px] text-amber-700 dark:text-amber-400">
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
