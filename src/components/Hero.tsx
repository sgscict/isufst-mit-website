import { useState } from 'react'
import { program, heroStats } from '../data'
import Icon from './Icon'
import InquiryModal from './InquiryModal'

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-b from-[#0b3d91] via-[#082c68] to-[#051a40] pt-28 pb-16 text-white sm:pt-36 sm:pb-24"
      >
        {/* Subtle geometric grid */}
        <div className="absolute inset-0 bg-grid opacity-20" />

        {/* University seal watermark */}
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-80 w-80 opacity-10 sm:h-96 sm:w-96">
          <img src="/isufst-logo.png" alt="" className="h-full w-full object-contain" />
        </div>

        <div className="container-page relative">
          <div className="mx-auto max-w-4xl text-center">
            {/* Accreditation Badge */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-sky-300/30 bg-sky-950/40 px-4 py-1.5 text-xs font-semibold backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#00e5ff]" />
              <span className="text-white">Republic of the Philippines</span>
              <span className="text-sky-300/40">•</span>
              <span className="text-[#38bdf8] font-bold">PQF Level 7 Graduate Degree</span>
              <span className="text-sky-300/40">•</span>
              <span className="text-sky-200">CHED CMO 15 s.2019</span>
            </div>

            {/* Main Degree Title */}
            <h1 className="mt-6 font-sans text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Master in <span className="text-[#38bdf8]">Information Technology</span>
            </h1>

            {/* Specialization Badge */}
            <div className="mt-4 inline-block rounded-xl border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200">
              Specialization in Applied AI and Data Analytics for Fisheries and Agriculture
            </div>

            {/* Program Tagline */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {program.tagline}
            </p>

            {/* Action Buttons in ISUFST Aqua & White */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollTo('eligibility')}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0284c7] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-sky-900/30 hover:bg-[#0369a1] transition-all"
              >
                Check Admission Eligibility
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('curriculum')}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                Explore 36-Unit Curriculum
              </button>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-200 hover:text-white underline decoration-sky-400/60 underline-offset-4 py-2"
              >
                <Icon name="mail" className="h-4 w-4 text-[#38bdf8]" />
                Inquire With Graduate Office
              </button>
            </div>

            {/* Four Stats Cards */}
            <div className="mt-14 grid grid-cols-2 gap-3 border-t border-sky-400/20 pt-10 sm:grid-cols-4 sm:gap-4">
              {heroStats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-sky-400/20 bg-sky-950/40 p-4 text-center backdrop-blur-sm"
                >
                  <div className="font-sans text-2xl font-black text-[#38bdf8] sm:text-3xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-white">
                    {s.l}
                  </div>
                  <div className="mt-1 text-[11px] text-sky-200/70">
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
