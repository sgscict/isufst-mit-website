import { useState } from 'react'
import { financialModel } from '../data'
import Section from './Section'
import Icon from './Icon'
import Reveal from './Reveal'

export default function InvestmentCalculator() {
  const [fundingMode, setFundingMode] = useState<'strand' | 'self'>('strand')

  return (
    <Section
      id="tuition"
      className="bg-white py-16 dark:bg-navy-950/60 sm:py-24"
      eyebrow="Financial Transparency"
      title={
        <>
          Tuition, Investment & <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400">DOST Grants</span>
        </>
      }
      intro="Transparent educational costs. Compare subsidized state university rates against the 100% fully funded DOST-SEI STRAND graduate scholarship package."
    >
      <div className="mx-auto max-w-4xl">
        {/* Mode Toggle */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-1.5 dark:border-white/10 dark:bg-navy-900/40">
            <button
              type="button"
              onClick={() => setFundingMode('strand')}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                fundingMode === 'strand'
                  ? 'bg-amber-500 text-navy-950 shadow-md'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <span className="grid h-2 w-2 rounded-full bg-navy-950" />
              DOST-SEI STRAND Scholar (Full Grant)
            </button>
            <button
              type="button"
              onClick={() => setFundingMode('self')}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                fundingMode === 'self'
                  ? 'bg-navy-900 text-white shadow-md dark:bg-white/10'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <span className="grid h-2 w-2 rounded-full bg-teal-400" />
              Self-Funded (SUC Subsidized)
            </button>
          </div>
        </div>

        {/* Content Box */}
        <Reveal delay={0.1} variant="scale" className="mt-8">
          {fundingMode === 'strand' ? (
            <div className="overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-50/40 via-white to-white p-6 shadow-xl shadow-amber-500/5 dark:from-navy-900/90 dark:via-navy-900/80 dark:to-navy-950 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200/50 pb-5 dark:border-white/10">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                    Maximum Government Scholarship Grant
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-navy-950 dark:text-white sm:text-3xl">
                    100% Free Tuition + ₱30,000 / Month Living Allowance
                  </h3>
                </div>
                <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-2 font-mono text-xs font-bold text-amber-800 dark:text-amber-300">
                  Total Grant Value: {financialModel.strandScholarship.totalValue}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-sm dark:border-white/5 dark:bg-white/5">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Monthly Living Stipend
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold text-navy-900 dark:text-white">
                    {financialModel.strandScholarship.monthlyStipend}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-navy-200/60">
                    Direct monthly bank deposit
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-sm dark:border-white/5 dark:bg-white/5">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Direct Research Grant
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold text-navy-900 dark:text-white">
                    {financialModel.strandScholarship.researchGrant}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-navy-200/60">
                    Funds sensors, hardware & cloud
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-sm dark:border-white/5 dark:bg-white/5">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Conference Dissemination
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold text-navy-900 dark:text-white">
                    {financialModel.strandScholarship.disseminationGrant}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-navy-200/60">
                    Sponsors academic presentations
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <span>Tuition and all laboratory registration fees: <strong>₱0.00 out of pocket</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <span>Includes ₱20,000/year learning materials allowance and comprehensive group medical insurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <span>One round-trip airfare/transportation subsidy per academic year for non-resident scholars</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5 dark:border-white/10">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Return service obligation of 1 year per scholarship year in the Philippines applies.
                </span>
                <a
                  href="#/scholarship"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 hover:bg-amber-400 transition-colors"
                >
                  View Full Scholarship Guide
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-navy-900/80 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5 dark:border-white/10">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    State Subsidized Professional Investment
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-navy-950 dark:text-white sm:text-3xl">
                    ~₱10,740 per Trimester (Installment Based)
                  </h3>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 font-mono text-xs font-bold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  Estimated Total: {financialModel.selfFunded.totalProgramCost}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4.5 dark:border-white/5 dark:bg-white/5">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Tuition Rate per Unit
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold text-navy-900 dark:text-white">
                    {financialModel.selfFunded.unitCost}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-navy-200/60">
                    36 total curriculum units
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4.5 dark:border-white/5 dark:bg-white/5">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Tuition Base Across 36 Units
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold text-navy-900 dark:text-white">
                    {financialModel.selfFunded.tuitionEstimate}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-navy-200/60">
                    No sudden private university tuition hikes
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4.5 dark:border-white/5 dark:bg-white/5">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Term Installment Flexibility
                  </div>
                  <div className="mt-1 font-display text-2xl font-bold text-navy-900 dark:text-white">
                    5 Terms
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-navy-200/60">
                    Payable upon term enrollment
                  </div>
                </div>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {financialModel.selfFunded.notes}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5 dark:border-white/10">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Government personnel may also qualify for Civil Service Commission or CHED staff development grants.
                </span>
                <a
                  href="#admission"
                  className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-navy-800 transition-colors dark:bg-teal-500 dark:text-navy-950"
                >
                  How to Enroll
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
