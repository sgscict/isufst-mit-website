import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type SectionProps = {
  id?: string
  eyebrow?: string
  title?: ReactNode
  intro?: ReactNode
  children: ReactNode
  className?: string
  contentClassName?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = '',
  contentClassName = '',
  align = 'center',
  dark = false,
}: SectionProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const centered = align === 'center'

  return (
    <section id={id} className={`relative py-16 sm:py-24 ${className}`}>
      {dark && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </>
      )}

      <div className="container-page relative">
        {(eyebrow || title || intro) && (
          <div
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl ${
              centered ? 'mx-auto text-center' : ''
            }`}
          >
            {eyebrow && (
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-widest ${
                  dark
                    ? 'border border-amber-400/20 bg-amber-400/10 text-amber-300'
                    : 'border border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-amber-300'
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-amber-400' : 'bg-amber-500'}`} />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2
                className={`mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl ${
                  dark ? 'text-white' : 'text-navy-950 dark:text-white'
                }`}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p
                className={`mt-4 text-base sm:text-lg leading-relaxed ${
                  dark ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {intro}
              </p>
            )}
          </div>
        )}
        <div
          className={
            eyebrow || title
              ? `mt-10 sm:mt-14 ${contentClassName}`.trim()
              : contentClassName
          }
        >
          {children}
        </div>
      </div>
    </section>
  )
}
