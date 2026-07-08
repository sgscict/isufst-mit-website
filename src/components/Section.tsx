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
    <section id={id} className={`relative py-16 sm:py-20 ${className}`}>
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
            className={`reveal ${visible ? 'is-visible' : ''} max-w-2xl ${
              centered ? 'mx-auto text-center' : ''
            }`}
          >
            {eyebrow && (
              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest ${
                  dark
                    ? 'border border-teal-400/20 bg-teal-400/10 text-teal-300'
                    : 'border border-teal-500/20 bg-teal-500/5 text-teal-600 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300'
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-teal-400' : 'bg-teal-500'}`} />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2
                className={`mt-5 font-display text-3xl font-bold text-balance sm:text-4xl lg:text-[2.75rem] 2xl:text-5xl ${
                  dark ? 'text-white' : 'text-navy-900 dark:text-white'
                }`}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p
                className={`mt-5 text-lg leading-relaxed ${
                  dark ? 'text-navy-100/70' : 'text-slate-600 dark:text-navy-100/65'
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
              ? `mt-10 sm:mt-12 ${contentClassName}`.trim()
              : contentClassName
          }
        >
          {children}
        </div>
      </div>
    </section>
  )
}
