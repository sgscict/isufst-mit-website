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
      <section id="admission" className="bg-white py-16 dark:bg-[#071328]/60 sm:py-20">
        <div className="container-page">
          <div className="grid min-w-0 grid-cols-1 items-start gap-10 lg:grid-cols-12">
            {/* Left: Requirements */}
            <div className="min-w-0 lg:col-span-7">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                School of Graduate Studies
              </span>
              <h2 className="mt-2 font-sans text-2xl font-extrabold text-[#0b3d91] sm:text-3xl dark:text-white">
                Admission <span className="text-[#0284c7]">Documentary Requirements</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Submit certified credentials to the SGS Graduate Admissions Office at the ISUFST Main-Poblacion Campus or submit online via PDF.
              </p>

              {/* Progress Tracker */}
              <div className="mt-5 flex items-center justify-between rounded-xl border border-sky-100 bg-sky-50/60 p-3 dark:border-slate-800 dark:bg-slate-900/60">
                <span className="text-xs font-bold text-[#0b3d91] dark:text-sky-300">
                  Interactive Readiness Checklist:
                </span>
                <span className="rounded-full bg-[#0b3d91] px-2.5 py-0.5 font-mono text-xs font-bold text-white dark:bg-[#0284c7]">
                  {completedCount} of {admission.length} Ready
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
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-xs transition-all ${
                        isChecked
                          ? 'border-[#0284c7] bg-sky-50/70 text-[#0b3d91] font-semibold dark:border-sky-700 dark:bg-sky-950/40 dark:text-sky-200'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300'
                      }`}
                    >
                      <button
                        type="button"
                        aria-label="Toggle document ready"
                        className={`mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded border transition-all ${
                          isChecked
                            ? 'border-[#0284c7] bg-[#0284c7] text-white'
                            : 'border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-800'
                        }`}
                      >
                        {isChecked && <Icon name="check" className="h-3 w-3" />}
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
                  className="rounded-xl bg-[#0b3d91] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#082a66] dark:bg-[#0284c7] dark:hover:bg-[#0369a1]"
                >
                  Request Application Dossier
                </button>
                <a
                  href="mailto:sgs@isufst.edu.ph"
                  className="rounded-xl border border-slate-300 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300"
                >
                  Email Graduate Dean
                </a>
              </div>
            </div>

            {/* Right: Career Horizons */}
            <div className="min-w-0 lg:col-span-5">
              <Reveal delay={0.1} variant="scale">
                <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b3d91] to-[#051a40] p-6 text-white shadow-xl sm:p-7">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                    Career Horizons
                  </span>
                  <h3 className="mt-1 font-sans text-xl font-bold">
                    Where an ISUFST MIT Leads
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-sky-100/80">
                    Graduates advance into senior technology leadership, systems architecture, high-impact regional research, and doctoral study.
                  </p>

                  <div className="mt-5 space-y-1.5">
                    {careers.map((role, idx) => (
                      <div
                        key={role}
                        className="flex items-center gap-2.5 rounded-lg border border-sky-400/20 bg-sky-950/40 px-3 py-1.5 text-xs text-sky-100"
                      >
                        <span className="grid h-4 w-4 place-items-center rounded bg-[#0284c7] font-mono text-[9px] font-bold text-white">
                          0{idx + 1}
                        </span>
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-sky-400/30 bg-sky-500/10 p-3 text-xs text-sky-200">
                    <div className="font-bold text-white">Pathway to Doctoral Studies:</div>
                    <p className="mt-0.5 leading-relaxed">
                      Graduates satisfy all prerequisite criteria for admission into Doctor in Information Technology (DIT) and PhD programs.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
