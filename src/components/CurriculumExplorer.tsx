import { useState } from 'react'
import { curriculum, type CourseDetail } from '../data'
import Section from './Section'
import Icon from './Icon'
import Reveal from './Reveal'

export default function CurriculumExplorer() {
  const [selectedKind, setSelectedKind] = useState<'all' | 'core' | 'spec' | 'caps'>('all')
  const [activeCourse, setActiveCourse] = useState<CourseDetail | null>(null)

  const allCourses = curriculum.flatMap((c) => c.courses)
  const filteredCount = allCourses.filter((c) => selectedKind === 'all' || c.kind === selectedKind).length

  return (
    <Section
      id="curriculum"
      className="bg-slate-50/70 dark:bg-navy-950/40"
      eyebrow="Academic Architecture"
      title={
        <>
          Curriculum & <span className="font-serif italic font-normal text-teal-600 dark:text-teal-400">Syllabi</span> Directory
        </>
      }
      intro="Thirty-six (36) units across foundation, specialization electives, and a two-part Design Science capstone artifact. Click any course to view full technical competencies."
    >
      <div className="mx-auto max-w-5xl">
        {/* Controls and filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-white/10">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="mr-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Filter by:
            </span>
            {[
              { id: 'all', label: 'All Courses (36 Units)' },
              { id: 'core', label: 'Core Infrastructure (12 U)' },
              { id: 'spec', label: 'Applied AI & IoT (18 U)' },
              { id: 'caps', label: 'DSRM Capstone (6 U)' },
            ].map((k) => (
              <button
                key={k.id}
                type="button"
                onClick={() => setSelectedKind(k.id as any)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  selectedKind === k.id
                    ? 'bg-navy-900 text-white shadow-sm dark:bg-teal-500 dark:text-navy-950'
                    : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10'
                }`}
              >
                {k.label}
              </button>
            ))}
          </div>

          <div className="font-mono text-xs text-slate-500 dark:text-navy-200/70">
            Showing <span className="font-bold text-navy-900 dark:text-white">{filteredCount}</span> courses
          </div>
        </div>

        {/* Trimester modules */}
        <div className="mt-8 space-y-8">
          {curriculum.map((block, blockIndex) => {
            const visibleCourses = block.courses.filter(
              (c) => selectedKind === 'all' || c.kind === selectedKind
            )
            if (visibleCourses.length === 0) return null

            return (
              <Reveal key={block.term} delay={blockIndex * 0.05} className="relative">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-900/60 sm:p-7">
                  {/* Block Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 dark:border-white/5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                          {block.ay}
                        </span>
                        <span className="text-slate-300 dark:text-white/20">·</span>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {block.tag}
                        </span>
                      </div>
                      <h3 className="mt-1 font-display text-xl font-bold text-navy-950 dark:text-white">
                        {block.term}
                      </h3>
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                      {block.units} Units
                    </span>
                  </div>

                  {/* Course list */}
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleCourses.map((c) => {
                      const isCapstone = c.kind === 'caps'
                      const isMilestone = c.kind === 'milestone'
                      return (
                        <div
                          key={c.code}
                          onClick={() => setActiveCourse(c)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && setActiveCourse(c)}
                          className={`group relative flex flex-col justify-between rounded-xl border p-4 text-left transition-all cursor-pointer ${
                            isCapstone
                              ? 'border-amber-400/40 bg-gradient-to-br from-amber-500/5 to-transparent hover:border-amber-500 hover:shadow-md dark:border-amber-400/30'
                              : isMilestone
                              ? 'border-slate-300 bg-slate-50/50 hover:border-slate-400 dark:border-white/10 dark:bg-white/5'
                              : 'border-slate-200/90 bg-white hover:border-teal-500 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-teal-400/50'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-xs font-bold text-navy-800 dark:text-teal-300">
                                {c.code}
                              </span>
                              <span
                                className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                                  c.kind === 'core'
                                    ? 'bg-navy-100 text-navy-800 dark:bg-white/10 dark:text-navy-100'
                                    : c.kind === 'spec'
                                    ? 'bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300'
                                    : c.kind === 'caps'
                                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300'
                                    : 'bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-slate-300'
                                }`}
                              >
                                {c.kind === 'core'
                                  ? 'Core'
                                  : c.kind === 'spec'
                                  ? 'Specialization'
                                  : c.kind === 'caps'
                                  ? 'Capstone'
                                  : 'Examination'}
                              </span>
                            </div>

                            <h4 className="mt-2 text-sm font-bold leading-snug text-slate-900 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300">
                              {c.title}
                            </h4>

                            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                              {c.description}
                            </p>
                          </div>

                          <div className="mt-4 border-t border-slate-100 pt-3 dark:border-white/5">
                            <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                              <span>{c.units} {c.units === 1 ? 'Unit' : 'Units'}</span>
                              <span className="inline-flex items-center gap-1 font-semibold text-teal-600 dark:text-teal-400 group-hover:translate-x-0.5 transition-transform">
                                View syllabus →
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Modal / Syllabus Inspector */}
        {activeCourse && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setActiveCourse(null)}
          >
            <div
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-white/15 dark:bg-navy-900 animate-enter-scale"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-navy-900 to-navy-950 px-6 py-5 text-white dark:border-white/10">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-teal-500/20 px-2.5 py-1 font-mono text-xs font-bold text-teal-300">
                    {activeCourse.code}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold sm:text-xl text-white">
                      {activeCourse.title}
                    </h3>
                    <div className="font-mono text-xs text-navy-200/80">
                      {activeCourse.units} Academic Units · {activeCourse.kind.toUpperCase()}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCourse(null)}
                  className="rounded-xl p-2 text-navy-200 hover:bg-white/10 hover:text-white"
                  aria-label="Close syllabus"
                >
                  <Icon name="close" className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Course Catalog Description
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    {activeCourse.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Hands-On Technologies & Engineering Stack
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {activeCourse.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-semibold text-navy-900 dark:border-white/10 dark:bg-white/5 dark:text-teal-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-teal-500/20 bg-teal-50/50 p-4 dark:border-teal-400/20 dark:bg-teal-400/5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-teal-600 dark:text-teal-400">
                      <Icon name="award" className="h-5 w-5" />
                    </span>
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white">
                        Course Capstone Deliverable:
                      </h5>
                      <p className="mt-1 text-sm font-medium text-slate-800 dark:text-navy-100">
                        {activeCourse.deliverable}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4 dark:border-white/10">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    ISUFST Graduate Catalog · CICT Curriculum Committee
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveCourse(null)}
                    className="rounded-xl bg-navy-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-navy-800 dark:bg-teal-500 dark:text-navy-950"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}
