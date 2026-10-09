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
      className="bg-white py-16 dark:bg-navy-950/60 sm:py-24"
      eyebrow="Admissions Diagnostic"
      title={
        <>
          Interactive <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400">Eligibility</span> Pathway
        </>
      }
      intro="Determine your admission prerequisites, bridging requirements, and completion timeline based on your undergraduate degree and professional experience."
    >
      <div className="mx-auto max-w-4xl">
        {/* Track selector tabs */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-2 dark:border-white/10 dark:bg-navy-900/40">
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
                      ? 'border border-navy-800 bg-navy-900 text-white shadow-md dark:border-amber-400/30 dark:bg-navy-800'
                      : 'border border-transparent bg-white/60 text-slate-700 hover:bg-white hover:shadow-sm dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10'
                  }`}
                >
                  <span className={`text-xs font-semibold ${isSelected ? 'text-amber-400' : 'text-teal-600 dark:text-teal-400'}`}>
                    {track.status}
                  </span>
                  <span className="mt-1 font-display text-sm font-bold">{track.title}</span>
                  <span className={`mt-1 line-clamp-1 text-xs ${isSelected ? 'text-navy-200' : 'text-slate-500 dark:text-slate-400'}`}>
                    {track.bridging}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Step 2: Work experience */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 px-5 py-3.5 dark:border-white/10 dark:bg-white/5">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Are you currently employed in an IT, engineering, or technical role?
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setHasWorkExperience('yes')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                hasWorkExperience === 'yes'
                  ? 'bg-navy-900 text-white dark:bg-amber-500 dark:text-navy-950'
                  : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-white/10 dark:text-slate-300'
              }`}
            >
              Yes (Working Professional)
            </button>
            <button
              type="button"
              onClick={() => setHasWorkExperience('no')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                hasWorkExperience === 'no'
                  ? 'bg-navy-900 text-white dark:bg-amber-500 dark:text-navy-950'
                  : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-white/10 dark:text-slate-300'
              }`}
            >
              No (Fresh Graduate / Full-time)
            </button>
          </div>
        </div>

        {/* Diagnostic Results Card */}
        <Reveal delay={0.1} variant="scale" className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-navy-900/80">
            <div className="border-b border-slate-100 bg-gradient-to-r from-navy-900 to-navy-950 px-6 py-5 text-white dark:border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-amber-400">
                    Pathway Evaluation Result
                  </span>
                  <h3 className="font-display text-xl font-bold sm:text-2xl">{activeTrack.title}</h3>
                </div>
                <div className="rounded-full border border-teal-400/30 bg-teal-400/10 px-3.5 py-1 text-xs font-bold text-teal-300">
                  {activeTrack.status}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Bridging Requirement
                  </div>
                  <div className="mt-2 text-base font-bold text-navy-900 dark:text-white">
                    {activeTrack.bridging}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-navy-200/60">
                    {selectedTrackId === 'computing' ? 'Waived for computing majors' : 'Prerequisites completed concurrently'}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Estimated Duration
                  </div>
                  <div className="mt-2 text-base font-bold text-navy-900 dark:text-white">
                    {activeTrack.timeline}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-navy-200/60">
                    {hasWorkExperience === 'yes' ? 'Supported by Saturday executive sessions' : 'Full-time study pace'}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Degree Accreditation
                  </div>
                  <div className="mt-2 text-base font-bold text-navy-900 dark:text-white">
                    PQF Level 7 Master’s
                  </div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-navy-200/60">
                    CHED CMO 15 s.2019 Compliant
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-6 dark:border-white/10">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  Eligible Undergraduate Backgrounds:
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {activeTrack.degrees}
                </p>

                <div className="mt-5 rounded-xl border border-teal-500/20 bg-teal-500/5 p-4 dark:border-teal-400/20 dark:bg-teal-400/5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-teal-600 dark:text-teal-400">
                      <Icon name="check" className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-navy-950 dark:text-white">
                        Admissions Committee Recommendation:
                      </div>
                      <p className="mt-1 text-sm text-slate-700 dark:text-navy-100/80">
                        {activeTrack.recommendation}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    * Final qualification and bridging assignments are officially issued after TOR evaluation by the SGS Graduate Dean.
                  </p>
                  <a
                    href="#admission"
                    className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-navy-800 dark:bg-amber-500 dark:text-navy-950 dark:hover:bg-amber-400"
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
