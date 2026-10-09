import { useState } from 'react'
import {
  scholarshipEligibility,
  scholarshipRequirements,
  scholarshipIfEmployed,
  scholarshipBenefits,
  scholarshipSteps,
  scholarshipReminders,
} from '../data'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import InquiryModal from '../components/InquiryModal'

export default function Scholarship() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'benefits' | 'eligibility' | 'docs' | 'process'>('benefits')

  return (
    <>
      <PageHero
        eyebrow="Government Funding · DOST-SEI STRAND"
        title="100% Fully Funded Graduate Study"
        intro="The Department of Science and Technology (DOST-SEI) STRAND program provides comprehensive financial support, living stipends, and dedicated research grants for qualified MIT scholars at ISUFST."
      />

      {/* Grant Summary Header Bar */}
      <section className="border-y border-slate-200 bg-white py-6 dark:border-slate-800 dark:bg-[#071328]/60">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-4 dark:border-slate-800 dark:bg-slate-900/40">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Tuition & Fees
              </span>
              <div className="mt-1 font-sans text-2xl font-black text-emerald-600 dark:text-emerald-400">
                100% Free
              </div>
              <span className="text-[11px] text-slate-500">Sponsored by DOST</span>
            </div>

            <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-4 dark:border-slate-800 dark:bg-slate-900/40">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Monthly Living Stipend
              </span>
              <div className="mt-1 font-sans text-2xl font-black text-[#0b3d91] dark:text-sky-300">
                ₱30,000 / mo
              </div>
              <span className="text-[11px] text-slate-500">Up to ₱720,000 total</span>
            </div>

            <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-4 dark:border-slate-800 dark:bg-slate-900/40">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Research Grant
              </span>
              <div className="mt-1 font-sans text-2xl font-black text-[#0284c7] dark:text-sky-400">
                ₱114,000
              </div>
              <span className="text-[11px] text-slate-500">Hardware & sensor funds</span>
            </div>

            <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-4 dark:border-slate-800 dark:bg-slate-900/40">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Conference Travel
              </span>
              <div className="mt-1 font-sans text-2xl font-black text-[#0b3d91] dark:text-sky-300">
                ₱75,000
              </div>
              <span className="text-[11px] text-slate-500">International travel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="py-12 sm:py-16 bg-slate-50/70 dark:bg-[#071328]/40">
        <div className="container-page">
          <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-5 dark:border-slate-800">
            {[
              { id: 'benefits', label: 'Financial Benefits & Allowances' },
              { id: 'eligibility', label: 'Eligibility Criteria' },
              { id: 'docs', label: 'Required Documents' },
              { id: 'process', label: '6-Step Application Process' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id as any)}
                className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === t.id
                    ? 'bg-[#0b3d91] text-white shadow-sm dark:bg-[#0284c7]'
                    : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            {/* Tab 1: Benefits */}
            {activeTab === 'benefits' && (
              <Reveal variant="scale">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-7">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                    Comprehensive Package
                  </span>
                  <h3 className="mt-1 font-sans text-xl font-bold text-[#0b3d91] dark:text-white">
                    DOST-SEI Master’s Level Financial Breakdown
                  </h3>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {scholarshipBenefits.amounts.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40"
                      >
                        <div className="font-sans text-xl font-black text-[#0b3d91] dark:text-sky-300">
                          {item.amount}
                        </div>
                        <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                          {item.label}
                        </div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-2 rounded-xl border border-sky-200 bg-sky-50/70 p-4 text-xs text-slate-700 dark:border-sky-900 dark:bg-sky-950/40 dark:text-slate-300">
                    <div className="font-bold text-[#0b3d91] dark:text-sky-300">Additional Subsidies Included:</div>
                    {scholarshipBenefits.notes.map((note) => (
                      <div key={note} className="flex items-center gap-2">
                        <Icon name="check" className="h-4 w-4 text-[#0284c7] shrink-0" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Tab 2: Eligibility */}
            {activeTab === 'eligibility' && (
              <Reveal variant="scale">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-7">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                    Candidate Qualifications
                  </span>
                  <h3 className="mt-1 font-sans text-xl font-bold text-[#0b3d91] dark:text-white">
                    Who Is Qualified to Apply
                  </h3>

                  <ul className="mt-6 space-y-2">
                    {scholarshipEligibility.map((crit) => (
                      <li
                        key={crit}
                        className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-200"
                      >
                        <span className="grid h-4.5 w-4.5 place-items-center rounded-full bg-sky-100 text-[#0b3d91] shrink-0 mt-0.5 dark:bg-sky-950 dark:text-sky-300">
                          <Icon name="check" className="h-3 w-3" />
                        </span>
                        <span className="leading-relaxed">{crit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-xl border border-amber-300 bg-amber-50/60 p-4 text-xs text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
                    <span className="font-bold">Important Term Conditions:</span>
                    <ul className="mt-1 space-y-0.5 list-disc list-inside text-slate-700 dark:text-slate-300">
                      {scholarshipReminders.map((rem) => (
                        <li key={rem}>{rem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Tab 3: Documents */}
            {activeTab === 'docs' && (
              <Reveal variant="scale">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-7 space-y-6">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                      Part A
                    </span>
                    <h3 className="mt-1 font-sans text-lg font-bold text-[#0b3d91] dark:text-white">
                      Core Documentary Submissions
                    </h3>
                    <ul className="mt-3 space-y-1.5">
                      {scholarshipRequirements.map((doc) => (
                        <li
                          key={doc}
                          className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50 p-2.5 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-200"
                        >
                          <Icon name="doc" className="h-4 w-4 text-[#0284c7] shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-100 pt-5 dark:border-slate-800">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                      Part B
                    </span>
                    <h3 className="mt-1 font-sans text-lg font-bold text-[#0b3d91] dark:text-white">
                      Additional Requirements If Currently Employed
                    </h3>
                    <ul className="mt-3 space-y-1.5">
                      {scholarshipIfEmployed.map((doc) => (
                        <li
                          key={doc}
                          className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50 p-2.5 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-200"
                        >
                          <Icon name="doc" className="h-4 w-4 text-[#0284c7] shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Tab 4: Process */}
            {activeTab === 'process' && (
              <Reveal variant="scale">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-7">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                    Step-by-Step
                  </span>
                  <h3 className="mt-1 font-sans text-xl font-bold text-[#0b3d91] dark:text-white">
                    Application & Selection Roadmap
                  </h3>

                  <div className="mt-5 space-y-3">
                    {scholarshipSteps.map((s) => (
                      <div
                        key={s.step}
                        className="flex gap-3.5 rounded-xl border border-slate-100 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800/40"
                      >
                        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#0b3d91] font-mono text-xs font-bold text-white dark:bg-[#0284c7]">
                          {s.step}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            {s.title}
                          </h4>
                          <p className="mt-0.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                            {s.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0b3d91] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#082a66] transition-colors dark:bg-[#0284c7] dark:hover:bg-[#0369a1]"
            >
              Inquire About STRAND Slots
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
