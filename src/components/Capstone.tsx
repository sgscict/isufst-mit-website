import { useState } from 'react'
import { capstone, scope } from '../data'
import Section from './Section'

export default function Capstone() {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'scoping'>('roadmap')

  return (
    <Section
      id="capstone"
      className="bg-slate-50/60 dark:bg-slate-950/60 py-16 sm:py-20"
      eyebrow="DSRM Capstone Architecture"
      title={
        <>
          Two Courses. Three Defenses. <span className="text-[#0284c7]">One Real Artifact.</span>
        </>
      }
      intro="In accordance with CHED CMO 15 s.2019 and the CICT Graduate Project Manual, every MIT candidate designs, builds, and defends a demonstrable computing system governed by Design Science Research Methodology (DSRM)."
    >
      {/* Sub-navigation tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-xl bg-slate-200/80 p-1 dark:bg-slate-800/80 border border-slate-300/50 dark:border-slate-700/50">
          <button
            type="button"
            onClick={() => setActiveTab('roadmap')}
            className={`rounded-lg px-5 py-2 text-xs font-bold transition-all sm:text-sm ${
              activeTab === 'roadmap'
                ? 'bg-[#0b3d91] text-white shadow-sm dark:bg-[#0284c7]'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            6 Capstone Milestones
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('scoping')}
            className={`rounded-lg px-5 py-2 text-xs font-bold transition-all sm:text-sm ${
              activeTab === 'scoping'
                ? 'bg-[#0b3d91] text-white shadow-sm dark:bg-[#0284c7]'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            Project Scoping Matrix
          </button>
        </div>
      </div>

      {activeTab === 'roadmap' && (
        <div className="mx-auto max-w-4xl">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#0284c7]/30 dark:border-[#0284c7]/20 space-y-8">
            {capstone.map((item, index) => {
              const isGate = item.gate
              return (
                <div key={item.title} className="relative group">
                  {/* Timeline Node Badge */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl font-bold text-xs shadow-md transition-transform group-hover:scale-105 ${
                      isGate
                        ? 'bg-[#0b3d91] text-white ring-4 ring-sky-100 dark:ring-sky-950 dark:bg-[#0284c7]'
                        : 'bg-white border-2 border-slate-300 text-slate-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {isGate ? '★' : index + 1}
                  </div>

                  {/* Milestone Card */}
                  <div
                    className={`rounded-2xl p-6 transition-all ${
                      isGate
                        ? 'border-2 border-[#0284c7]/40 bg-white shadow-md shadow-sky-500/5 dark:bg-slate-900 dark:border-[#0284c7]/40'
                        : 'border border-slate-200/90 bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-md px-2.5 py-0.5 text-xs font-bold ${
                          isGate
                            ? 'bg-[#0b3d91] text-white dark:bg-[#0284c7]'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                        }`}
                      >
                        {item.phase}
                      </span>
                      <span
                        className={`rounded-md px-2.5 py-0.5 text-xs font-medium ${
                          isGate
                            ? 'bg-sky-100 text-[#0b3d91] font-semibold dark:bg-sky-950/80 dark:text-sky-300'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {item.kind}
                      </span>
                      {isGate && (
                        <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/40">
                          <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          Mandatory Milestone Defense
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.body}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 rounded-xl border border-sky-200/80 bg-sky-50/70 p-4 text-xs text-slate-700 dark:border-sky-900/50 dark:bg-sky-950/40 dark:text-sky-200 sm:text-sm">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b3d91] text-[11px] font-bold text-white dark:bg-[#0284c7]">
                i
              </span>
              <p className="leading-relaxed">
                <strong>Publication Requirement:</strong> As prescribed by CHED CMO 15 s.2019, MIT candidates must have at least one research paper accepted for publication in an internationally refereed peer-reviewed journal prior to the final oral defense of Capstone 2.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'scoping' && (
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden dark:border-slate-800 dark:bg-slate-900">
            <div className="p-5 sm:p-6 bg-slate-50/80 border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                CICT Capstone Scoping Calibration Matrix
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Official guide for prospective candidates to balance artifact ambition, technical depth, and graduate feasibility.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100/50 dark:border-slate-800 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                    <th className="p-4 sm:p-5">Dimension</th>
                    <th className="p-4 sm:p-5 text-rose-700 dark:text-rose-400">Under-Scoped (Insufficient)</th>
                    <th className="p-4 sm:p-5 text-[#0b3d91] dark:text-[#38bdf8] bg-sky-50/50 dark:bg-sky-950/30">
                      Ideal MIT Rigor (Target)
                    </th>
                    <th className="p-4 sm:p-5 text-amber-700 dark:text-amber-400">Over-Scoped (High Risk)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800">
                  {scope.rows.map((row) => (
                    <tr key={row.c} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                        {row.c}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400">
                        <span className="inline-block text-rose-600 dark:text-rose-400 mr-1.5 font-bold">✕</span>
                        {row.narrow}
                      </td>
                      <td className="p-4 sm:p-5 font-medium text-[#0b3d91] dark:text-sky-200 bg-sky-50/30 dark:bg-sky-950/20">
                        <span className="inline-block text-[#0284c7] mr-1.5 font-bold">✓</span>
                        {row.right}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600 dark:text-slate-400">
                        <span className="inline-block text-amber-600 dark:text-amber-400 mr-1.5 font-bold">⚠</span>
                        {row.broad}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 sm:p-5 bg-slate-50/60 border-t border-slate-200 dark:bg-slate-900/60 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-bold text-slate-800 dark:text-slate-200">Adviser Alignment:</span> The Capstone Advisory Committee works closely with candidates during Weeks 1–3 of CAPS 1 to refine the project boundary within the Ideal MIT Rigor envelope before the Concept Defense.
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
