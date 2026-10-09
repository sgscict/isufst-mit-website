import { useState } from 'react'
import { program, heroStats } from '../data'
import Icon from './Icon'
import InquiryModal from './InquiryModal'

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-[#071328] pt-28 pb-16 text-white sm:pt-36 sm:pb-24 lg:pt-40"
      >
        {/* Subtle architectural grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="bg-noise absolute inset-0 opacity-40" />

        {/* University seal watermark */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 opacity-5 sm:h-[32rem] sm:w-[32rem]">
          <img src="/isufst-logo.png" alt="" className="h-full w-full object-contain" />
        </div>

        <div className="container-page relative">
          <div className="mx-auto max-w-4xl text-center">
            {/* Accreditation Badge Ribbon */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-slate-200">Republic of the Philippines</span>
              <span className="text-white/30">•</span>
              <span className="text-amber-300 font-bold">PQF Level 7 Master’s</span>
              <span className="text-white/30">•</span>
              <span className="text-teal-300">CHED CMO 15 s.2019</span>
            </div>

            {/* Main Degree Title */}
            <h1 className="mt-7 font-display text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Master in <span className="font-serif italic text-amber-400">Information Technology</span>
            </h1>

            {/* Specialization Tagline */}
            <div className="mt-4 inline-block rounded-xl border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-300">
              Specialization in Applied AI and Data Analytics for Fisheries and Agriculture
            </div>

            {/* Value Proposition */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {program.tagline}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#eligibility"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-navy-950 shadow-lg shadow-amber-500/20 transition-all hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30"
              >
                Check Admission Eligibility
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#curriculum"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
              >
                Explore 36-Unit Curriculum
              </a>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white underline decoration-amber-400/50 underline-offset-4 py-2"
              >
                <Icon name="mail" className="h-4 w-4 text-amber-400" />
                Inquire With Graduate Office
              </button>
            </div>

            {/* Four Core Pillars / Stats Bar */}
            <div className="mt-14 grid grid-cols-2 gap-3 border-t border-white/10 pt-10 sm:grid-cols-4 sm:gap-4">
              {heroStats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
                >
                  <div className="font-display text-2xl font-bold text-amber-400 sm:text-3xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-white">
                    {s.l}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-400">
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Dialog */}
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
