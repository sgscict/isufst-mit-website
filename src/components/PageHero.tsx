import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
}

export default function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b3d91] via-[#082c68] to-[#051a40] pt-28 pb-14 text-white sm:pt-36 sm:pb-20">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container-page relative">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-200 hover:text-white transition-colors"
        >
          <Icon name="arrow" className="h-3.5 w-3.5 rotate-180" />
          Back to Program Overview
        </Link>

        <div className="mt-5 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-950/40 px-3.5 py-1 text-xs font-semibold text-[#38bdf8] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff]" />
            {eyebrow}
          </div>

          <h1 className="mt-4 font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {intro && (
            <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-sky-100/90 sm:text-base">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
