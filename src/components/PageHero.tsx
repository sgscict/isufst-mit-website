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
    <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 text-white sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0d1f4a]" />
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="animate-orb absolute -left-32 top-10 h-80 w-80 rounded-full bg-teal-500/15 blur-[100px]" />
      <div className="animate-orb-reverse absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-navy-500/25 blur-[100px]" />

      <div className="container-page relative">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-navy-200/70 transition-colors hover:text-white"
        >
          <Icon name="arrow" className="h-4 w-4 rotate-180" />
          Back to home
        </Link>

        <div className="mt-6 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-teal-300">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100/75">{intro}</p>
          )}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f4f6fb] to-transparent dark:from-[#060e1f]" />
    </section>
  )
}
