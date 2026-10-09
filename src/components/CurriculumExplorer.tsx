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
      className="bg-slate-50/70 py-16 dark:bg-[#071328]/40 sm:py-20"
      eyebrow="Academic Architecture"
      title={
        <>
          Curriculum & <span className="text-[#0284c7]">Syllabi</span> Directory
        </>
      }
      intro="Thirty-six (36) units across foundation, specialization electives, and a two-part Design Science capstone artifact. Click any course to view full technical competencies."
    >
      <div className="mx-auto max-w-5xl">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="mr-2 text-xs font-bold uppercase tracking-wider text-slate-500">
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
                className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                  selectedKind === k.id
                    ? 'bg-[#0b3d91] text-white shadow-sm dark:bg-[#0284c7]'
                    : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {k.label}
              </button>
            ))}
          </div>

          <div className="font-mono text-xs text-slate-500">
            Showing <span className="font-bold text-[#0b3d91] dark:text-sky-300">{filteredCount}</span> courses
          </div>
        </div>

        {/* Trimester modules */}
        <div className="mt-8 space-y-6">
          {curriculum.map((block, blockIndex) => {
            const visibleCourses = block.courses.filter(
              (c) => selectedKind === 'all' || c.kind === selectedKind
            )
            if (visibleCourses.length === 0) return null

            return (
              <Reveal key={block.term} delay={blockIndex * 0.04} className="relative">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-7">
                  {/* Block Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 dark:border-slate-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284c7] dark:text-sky-400">
                          {block.ay}
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {block.tag}
                        </span>
                      </div>
                      <h3 className="mt-1 font-sans text-xl font-bold text-[#0b3d91] dark:text-white">
                        {block.term}
                      </h3>
                    </div>
                    <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 font-mono text-xs font-bold text-[#0b3d91] dark:border-sky-900 dark:bg-sky-950 dark:text-sky-300">
                      {block.units} Units
                    </span>
                  </div>

                  {/* Course Cards */}
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleCourses.map((c) => {
                      const isCapstone = c.kind === 'caps'
                      return (
                        <div
                          key={c.code}
                          onClick={() => setActiveCourse(c)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && setActiveCourse(c)}
                          className={`group relative flex flex-col justify-between rounded-xl border p-4 text-left transition-all cursor-pointer ${
                            isCapstone
                              ? 'border-sky-300 bg-sky-50/40 hover:border-[#0284c7] hover:shadow-md dark:border-sky-800 dark:bg-sky-950/20'
                              : 'border-slate-200 bg-white hover:border-[#0284c7] hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-xs font-bold text-[#0b3d91] dark:text-sky-300">
                                {c.code}
                              </span>
                              <span className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-[#0b3d91] dark:bg-sky-950 dark:text-sky-300">
                                {c.kind === 'core'
                                  ? 'Core'
                                  : c.kind === 'spec'
                                  ? 'Specialization'
                                  : c.kind === 'caps'
                                  ? 'Capstone'
                                  : 'Exam'}
                              </span>
                            </div>

                            <h4 className="mt-2 text-sm font-bold text-slate-900 group-hover:text-[#0b3d91] dark:text-white dark:group-hover:text-sky-300">
                              {c.title}
                            </h4>

                            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                              {c.description}
                            </p>
                          </div>

                          <div className="mt-3 border-t border-slate-100 pt-3 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                            <span>{c.units} Units</span>
                            <span className="font-bold text-[#0284c7] group-hover:translate-x-0.5 transition-transform">
                              View syllabus →
                            </span>
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

        {/* Syllabus Inspector Modal */}
        {activeCourse && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setActiveCourse(null)}
          >
            <div
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-[#071328]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between bg-[#0b3d91] px-6 py-4 text-white">
                <div>
                  <span className="font-mono text-xs text-[#38bdf8] uppercase font-bold">
                    {activeCourse.code} · {activeCourse.units} Units
                  </span>
                  <h3 className="font-sans text-lg font-bold text-white">
                    {activeCourse.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCourse(null)}
                  className="rounded-lg p-1.5 text-white/80 hover:bg-white/10"
                >
                  <Icon name="close" className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Course Description
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {activeCourse.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Engineering Technologies & Frameworks
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeCourse.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-sky-200 bg-sky-50 px-2.5 py-1 font-mono text-xs font-bold text-[#0b3d91] dark:border-sky-900 dark:bg-sky-950 dark:text-sky-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-4 dark:border-sky-900 dark:bg-sky-950/40">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-[#0b3d91] dark:text-sky-300">
                    Course Capstone Deliverable:
                  </h5>
                  <p className="mt-1 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {activeCourse.deliverable}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}
