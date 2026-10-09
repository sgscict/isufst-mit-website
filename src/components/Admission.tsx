import { useState } from 'react'
import { admission, careers } from '../data'
import Icon from './Icon'
import Reveal from './Reveal'
import InquiryModal from './InquiryModal'

export default function Admission() {
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({})
  const [modalOpen, setModalOpen] = useState(false)

  const toggleCheck = (idx: number) => {
    setCheckedDocs((prev) => ({ ...prev, [idx]: !prev[idx] }))
  }

  const completedCount = Object.values(checkedDocs).filter(Boolean).length

  return (
    <>
      <section id="admission" className="bg-slate-50/70 py-16 dark:bg-navy-950/40 sm:py-24">
        <div className="container-page">
          <div className="grid min-w-0 grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Column: Requirements & Interactive Checklist */}
            <div className="min-w-0 lg:col-span-7">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                School of Graduate Studies
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy-950 sm:text-4xl dark:text-white">
                Admission <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400">Documentary Requirements</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-navy-100/70">
                Submit certified documentary credentials to the SGS Graduate Admissions Office at the ISUFST Main-Poblacion Campus or upload online via PDF.
              </p>

              {/* Progress Tracker */}
              <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm dark:border-white/10 dark:bg-navy-900/60">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Interactive Readiness Checklist:
                </span>
                <span className="rounded-full bg-teal-500/10 px-2.5 py-0.5 font-mono text-xs font-bold text-teal-700 dark:text-teal-300">
                  {completedCount} of {admission.length} Prepared
                </span>
              </div>

              {/* Checklist items */}
              <ul className="mt-4 space-y-2">
                {admission.map((item, idx) => {
                  const isChecked = !!checkedDocs[idx]
                  return (
                    <li
                      key={item}
                      onClick={() => toggleCheck(idx)}
                      className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-3.5 text-xs transition-all ${
                        isChecked
                          ? 'border-emerald-400/50 bg-emerald-50/50 text-slate-800 dark:border-emerald-400/30 dark:bg-emerald-950/20 dark:text-emerald-200'
                          : 'border-slate-200/90 bg-white text-slate-700 hover:border-slate-300 dark:border-white/10 dark:bg-navy-900/60 dark:text-slate-300'
                      }`}
                    >
                      <button
                        type="button"
                        aria-label="Toggle document ready"
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-all ${
                          isChecked
                            ? 'border-emerald-500 bg-emerald-500 text-white'
                            : 'border-slate-300 bg-white dark:border-white/20 dark:bg-white/5'
                        }`}
                      >
                        {isChecked && <Icon name="check" className="h-3.5 w-3.5" />}
                      </button>
                      <span className="min-w-0 flex-1 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="rounded-xl bg-navy-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-navy-800 dark:bg-amber-500 dark:text-navy-950 dark:hover:bg-amber-400"
                >
                  Request Application Dossier
                </button>
                <a
                  href="mailto:sgs@isufst.edu.ph"
                  className="rounded-xl border border-slate-300 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-white dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/5"
                >
                  Email Graduate Dean
                </a>
              </div>
            </div>

            {/* Right Column: Career Trajectories Card */}
            <div className="min-w-0 lg:col-span-5">
              <Reveal delay={0.1} variant="scale">
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-navy-950 p-7 text-white shadow-xl dark:border-white/10 sm:p-8">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                    Graduate Career Horizons
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold">
                    Where an ISUFST MIT Leads
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    Graduates advance into senior technological leadership, enterprise architecture, high-impact regional research, and doctoral study.
                  </p>

                  <div className="mt-6 space-y-2">
                    {careers.map((role, idx) => (
                      <div
                        key={role}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-slate-200"
                      >
                        <span className="grid h-5 w-5 place-items-center rounded bg-amber-400/20 font-mono text-[10px] font-bold text-amber-300">
                          0{idx + 1}
                        </span>
                        <span className="font-medium">{role}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-teal-400/20 bg-teal-400/10 p-4 text-xs text-teal-200">
                    <div className="font-bold text-white">Pathway to Doctoral Studies:</div>
                    <p className="mt-1 leading-relaxed">
                      Graduates satisfy all prerequisite master’s qualification criteria for admission into Doctor in Information Technology (DIT) and PhD in Computer Science programs nationwide.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Dialog */}
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
