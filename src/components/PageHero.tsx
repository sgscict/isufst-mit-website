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
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-[#071328] pt-28 pb-14 text-white sm:pt-36 sm:pb-20">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="bg-noise absolute inset-0 opacity-40" />

      <div className="container-page relative">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
        >
          <Icon name="arrow" className="h-3.5 w-3.5 rotate-180" />
          Back to Program Overview
        </Link>

        <div className="mt-5 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold text-amber-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            {eyebrow}
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {intro && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
