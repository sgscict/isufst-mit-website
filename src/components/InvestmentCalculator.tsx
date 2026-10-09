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
      className="bg-white py-16 dark:bg-[#071328]/60 sm:py-20"
      eyebrow="Financial Transparency"
      title={
        <>
          Tuition, Investment & <span className="text-[#0284c7]">DOST Grants</span>
        </>
      }
      intro="Transparent educational costs. Compare subsidized state university rates against the 100% fully funded DOST-SEI STRAND graduate scholarship package."
    >
      <div className="mx-auto max-w-4xl">
        {/* Mode Toggle */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1.5 dark:border-slate-800 dark:bg-slate-900/60">
            <button
              type="button"
              onClick={() => setFundingMode('strand')}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                fundingMode === 'strand'
                  ? 'bg-[#0b3d91] text-white shadow-sm dark:bg-[#0284c7]'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <span className="grid h-2 w-2 rounded-full bg-[#00e5ff]" />
              DOST-SEI STRAND Scholar (Full Grant)
            </button>
            <button
              type="button"
              onClick={() => setFundingMode('self')}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                fundingMode === 'self'
                  ? 'bg-[#0b3d91] text-white shadow-sm dark:bg-[#0284c7]'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <span className="grid h-2 w-2 rounded-full bg-slate-400" />
              Self-Funded (SUC Subsidized)
            </button>
          </div>
        </div>

        {/* Content Box */}
        <Reveal delay={0.1} variant="scale" className="mt-8">
          {fundingMode === 'strand' ? (
            <div className="overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-lg dark:border-sky-900 dark:bg-slate-900/80">
              <div className="bg-gradient-to-r from-[#0b3d91] to-[#082c68] p-6 text-white sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                      Comprehensive DOST-SEI Graduate Scholarship
                    </span>
                    <h3 className="mt-1 font-sans text-xl font-bold sm:text-2xl text-white">
                      100% Free Tuition + ₱30,000 / Month Living Allowance
                    </h3>
                  </div>
                  <div className="rounded-xl border border-sky-300/30 bg-sky-900/40 px-3.5 py-1.5 font-mono text-xs font-bold text-sky-200">
                    Total Grant Value: {financialModel.strandScholarship.totalValue}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                    <div className="text-xs font-bold text-slate-500">
                      Monthly Living Allowance
                    </div>
                    <div className="mt-1 font-sans text-2xl font-black text-[#0b3d91] dark:text-sky-300">
                      {financialModel.strandScholarship.monthlyStipend}
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      Direct monthly stipend
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                    <div className="text-xs font-bold text-slate-500">
                      Research & Capstone Grant
                    </div>
                    <div className="mt-1 font-sans text-2xl font-black text-[#0b3d91] dark:text-sky-300">
                      {financialModel.strandScholarship.researchGrant}
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      Covers hardware & compute
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                    <div className="text-xs font-bold text-slate-500">
                      Conference Dissemination
                    </div>
                    <div className="mt-1 font-sans text-2xl font-black text-[#0b3d91] dark:text-sky-300">
                      {financialModel.strandScholarship.disseminationGrant}
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      International travel support
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Icon name="check" className="h-4 w-4 text-[#0284c7] shrink-0" />
                    <span>Tuition and laboratory registration: <strong>₱0.00 out-of-pocket cost</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" className="h-4 w-4 text-[#0284c7] shrink-0" />
                    <span>Includes ₱20,000/year learning materials allowance and group medical insurance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" className="h-4 w-4 text-[#0284c7] shrink-0" />
                    <span>One round-trip airfare/transportation subsidy per academic year for non-resident scholars</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5 dark:border-slate-800">
                  <span className="text-xs text-slate-500">
                    Return service obligation of 1 year per scholarship year in the Philippines applies.
                  </span>
                  <a
                    href="#/scholarship"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0b3d91] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#082a66] transition-colors dark:bg-[#0284c7] dark:hover:bg-[#0369a1]"
                  >
                    View Full Scholarship Guide
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/80 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5 dark:border-slate-800">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                    State University Subsidized Rate
                  </span>
                  <h3 className="mt-1 font-sans text-xl font-bold text-[#0b3d91] dark:text-white sm:text-2xl">
                    ~₱10,740 per Trimester (Installment Based)
                  </h3>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-1.5 font-mono text-xs font-bold text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300">
                  Estimated Total: {financialModel.selfFunded.totalProgramCost}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                  <div className="text-xs font-bold text-slate-500">
                    Tuition per Unit
                  </div>
                  <div className="mt-1 font-sans text-2xl font-black text-[#0b3d91] dark:text-sky-300">
                    {financialModel.selfFunded.unitCost}
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    36 curriculum units
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                  <div className="text-xs font-bold text-slate-500">
                    Total Tuition Base
                  </div>
                  <div className="mt-1 font-sans text-2xl font-black text-[#0b3d91] dark:text-sky-300">
                    {financialModel.selfFunded.tuitionEstimate}
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    Subsidized state rate
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                  <div className="text-xs font-bold text-slate-500">
                    Term Installments
                  </div>
                  <div className="mt-1 font-sans text-2xl font-black text-[#0b3d91] dark:text-sky-300">
                    5 Terms
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    Payable per term
                  </div>
                </div>
              </div>

              <p className="mt-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {financialModel.selfFunded.notes}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5 dark:border-slate-800">
                <span className="text-xs text-slate-500">
                  Government personnel may also qualify for Civil Service or CHED staff development grants.
                </span>
                <a
                  href="#admission"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0b3d91] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#082a66] transition-colors dark:bg-[#0284c7] dark:hover:bg-[#0369a1]"
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
