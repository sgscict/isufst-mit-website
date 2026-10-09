import { useState } from 'react'
import { eligibilityTracks } from '../data'
import Section from './Section'
import Icon from './Icon'
import Reveal from './Reveal'

export default function EligibilityChecker() {
  const [selectedTrackId, setSelectedTrackId] = useState(eligibilityTracks[0].id)
  const [hasWorkExperience, setHasWorkExperience] = useState('yes')

  const activeTrack = eligibilityTracks.find((t) => t.id === selectedTrackId) || eligibilityTracks[0]

  return (
    <Section
      id="eligibility"
      className="bg-white py-16 dark:bg-[#071328]/60 sm:py-20"
      eyebrow="Admissions Diagnostic"
      title={
        <>
          Interactive <span className="text-[#0284c7]">Eligibility</span> Pathway
        </>
      }
      intro="Determine your admission prerequisites, bridging requirements, and completion timeline based on your undergraduate degree and professional experience."
    >
      <div className="mx-auto max-w-4xl">
        {/* Track selector tabs */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-900/40">
          <label className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Step 1: Select Your Undergraduate Discipline
          </label>
          <div className="grid gap-2 sm:grid-cols-3">
            {eligibilityTracks.map((track) => {
              const isSelected = track.id === selectedTrackId
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setSelectedTrackId(track.id)}
                  className={`flex flex-col items-start rounded-xl p-3.5 text-left transition-all ${
                    isSelected
                      ? 'border border-[#0b3d91] bg-[#0b3d91] text-white shadow-md dark:border-sky-400 dark:bg-[#0284c7]'
                      : 'border border-transparent bg-white text-slate-700 hover:bg-white hover:shadow-sm dark:bg-slate-800/60 dark:text-slate-300'
                  }`}
                >
                  <span className={`text-xs font-bold ${isSelected ? 'text-[#38bdf8]' : 'text-[#0284c7] dark:text-sky-400'}`}>
                    {track.status}
                  </span>
                  <span className="mt-1 font-sans text-sm font-bold">{track.title}</span>
                  <span className={`mt-1 line-clamp-1 text-xs ${isSelected ? 'text-sky-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    {track.bridging}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Step 2: Work experience */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 dark:border-slate-800 dark:bg-slate-900/40">
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300 sm:text-sm">
            Are you currently employed in an IT, engineering, or technical role?
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setHasWorkExperience('yes')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-colors ${
                hasWorkExperience === 'yes'
                  ? 'bg-[#0b3d91] text-white dark:bg-[#0284c7]'
                  : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              Yes (Working Professional)
            </button>
            <button
              type="button"
              onClick={() => setHasWorkExperience('no')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-colors ${
                hasWorkExperience === 'no'
                  ? 'bg-[#0b3d91] text-white dark:bg-[#0284c7]'
                  : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              No (Full-time Track)
            </button>
          </div>
        </div>

        {/* Diagnostic Results Card */}
        <Reveal delay={0.1} variant="scale" className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/80">
            <div className="border-b border-slate-100 bg-gradient-to-r from-[#0b3d91] to-[#082c68] px-6 py-5 text-white dark:border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#38bdf8]">
                    Pathway Evaluation Result
                  </span>
                  <h3 className="font-sans text-xl font-bold sm:text-2xl">{activeTrack.title}</h3>
                </div>
                <div className="rounded-full border border-sky-300/30 bg-sky-900/40 px-3.5 py-1 text-xs font-bold text-sky-200">
                  {activeTrack.status}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Bridging Requirement
                  </div>
                  <div className="mt-2 text-base font-bold text-[#0b3d91] dark:text-sky-300">
                    {activeTrack.bridging}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {selectedTrackId === 'computing' ? 'Waived for computing majors' : 'Prerequisites taken concurrently'}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Estimated Duration
                  </div>
                  <div className="mt-2 text-base font-bold text-[#0b3d91] dark:text-sky-300">
                    {activeTrack.timeline}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {hasWorkExperience === 'yes' ? 'Saturday executive schedule' : 'Standard trimestral pace'}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Degree Accreditation
                  </div>
                  <div className="mt-2 text-base font-bold text-[#0b3d91] dark:text-sky-300">
                    PQF Level 7 Master’s
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    CHED CMO 15 s.2019 Compliant
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-6 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Eligible Undergraduate Backgrounds:
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                  {activeTrack.degrees}
                </p>

                <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50/70 p-4 dark:border-sky-900 dark:bg-sky-950/40">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-[#0284c7]">
                      <Icon name="check" className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-bold text-[#0b3d91] dark:text-sky-300 uppercase tracking-wider">
                        Admissions Committee Guidance:
                      </div>
                      <p className="mt-1 text-xs text-slate-700 dark:text-slate-300 sm:text-sm leading-relaxed">
                        {activeTrack.recommendation}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    * Official evaluation is confirmed upon submission of TOR to the SGS Graduate Dean.
                  </p>
                  <a
                    href="#admission"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0b3d91] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#082a66] transition-colors dark:bg-[#0284c7] dark:hover:bg-[#0369a1]"
                  >
                    View Document Checklist
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
