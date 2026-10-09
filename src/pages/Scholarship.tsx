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
      <section className="border-y border-slate-200 bg-white py-8 dark:border-white/10 dark:bg-navy-950/60">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 dark:border-white/5 dark:bg-white/5">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Tuition & Fees
              </span>
              <div className="mt-1 font-display text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                100% Free
              </div>
              <span className="text-[11px] text-slate-500">Fully sponsored by DOST</span>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 dark:border-white/5 dark:bg-white/5">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Monthly Living Stipend
              </span>
              <div className="mt-1 font-display text-2xl font-bold text-navy-950 dark:text-white">
                ₱30,000 / mo
              </div>
              <span className="text-[11px] text-slate-500">Up to ₱720,000 total</span>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 dark:border-white/5 dark:bg-white/5">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Research Grant
              </span>
              <div className="mt-1 font-display text-2xl font-bold text-amber-600 dark:text-amber-400">
                ₱114,000
              </div>
              <span className="text-[11px] text-slate-500">Hardware & cloud expenses</span>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 dark:border-white/5 dark:bg-white/5">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Conference Travel
              </span>
              <div className="mt-1 font-display text-2xl font-bold text-navy-950 dark:text-white">
                ₱75,000
              </div>
              <span className="text-[11px] text-slate-500">International dissemination</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="py-12 sm:py-16 bg-slate-50/60 dark:bg-navy-950/40">
        <div className="container-page">
          <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-5 dark:border-white/10">
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
                className={`rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === t.id
                    ? 'bg-navy-900 text-white shadow-md dark:bg-amber-500 dark:text-navy-950'
                    : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10'
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
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-900/60 sm:p-8">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    Comprehensive Package
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-navy-950 dark:text-white">
                    DOST-SEI Master’s Level Financial Breakdown
                  </h3>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {scholarshipBenefits.amounts.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4.5 dark:border-white/5 dark:bg-white/5"
                      >
                        <div className="font-display text-2xl font-bold text-navy-950 dark:text-white">
                          {item.amount}
                        </div>
                        <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                          {item.label}
                        </div>
                        <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-2 rounded-2xl border border-teal-500/20 bg-teal-50/50 p-4.5 text-xs text-slate-700 dark:border-teal-400/20 dark:bg-teal-400/5 dark:text-slate-300">
                    <div className="font-bold text-navy-950 dark:text-white">Additional Subsidies Included:</div>
                    {scholarshipBenefits.notes.map((note) => (
                      <div key={note} className="flex items-center gap-2">
                        <Icon name="check" className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0" />
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
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-900/60 sm:p-8">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    Candidate Qualifications
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-navy-950 dark:text-white">
                    Who Is Qualified to Apply
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {scholarshipEligibility.map((crit) => (
                      <li
                        key={crit}
                        className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-3.5 text-xs text-slate-700 dark:border-white/5 dark:bg-white/5 dark:text-slate-200"
                      >
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5">
                          <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                        <span className="leading-relaxed">{crit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-amber-900 dark:text-amber-300">
                    <span className="font-bold">Important Term Conditions:</span>
                    <ul className="mt-1.5 space-y-1 list-disc list-inside text-slate-700 dark:text-slate-300">
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
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-900/60 sm:p-8 space-y-8">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                      Part A
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-navy-950 dark:text-white">
                      Core Documentary Submissions
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {scholarshipRequirements.map((doc) => (
                        <li
                          key={doc}
                          className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-3 text-xs text-slate-700 dark:border-white/5 dark:bg-white/5 dark:text-slate-200"
                        >
                          <Icon name="doc" className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-100 pt-6 dark:border-white/5">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      Part B
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-navy-950 dark:text-white">
                      Additional Requirements If Currently Employed
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      Required for industry and government personnel taking official study leaves.
                    </p>
                    <ul className="mt-4 space-y-2">
                      {scholarshipIfEmployed.map((doc) => (
                        <li
                          key={doc}
                          className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-3 text-xs text-slate-700 dark:border-white/5 dark:bg-white/5 dark:text-slate-200"
                        >
                          <Icon name="doc" className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
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
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-900/60 sm:p-8">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    Step-by-Step
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-navy-950 dark:text-white">
                    Application & Selection Roadmap
                  </h3>

                  <div className="mt-6 space-y-4">
                    {scholarshipSteps.map((s) => (
                      <div
                        key={s.step}
                        className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-white/5 dark:bg-white/5"
                      >
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-navy-900 font-mono text-xs font-bold text-amber-400 dark:bg-amber-400/10 dark:text-amber-300">
                          {s.step}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-navy-950 dark:text-white">
                            {s.title}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
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

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-navy-950 shadow-md hover:bg-amber-400 transition-colors"
            >
              Inquire About STRAND Slots
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Inquiry Dialog */}
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
