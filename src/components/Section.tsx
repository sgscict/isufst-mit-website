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
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b3d91] via-[#082c68] to-[#051a40]" />
          <div className="absolute inset-0 bg-grid opacity-15" />
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
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${
                  dark
                    ? 'border border-sky-300/30 bg-sky-900/50 text-[#38bdf8]'
                    : 'border border-sky-100 bg-sky-50 text-[#0b3d91] dark:border-sky-800/60 dark:bg-sky-950/50 dark:text-sky-300'
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-[#38bdf8]' : 'bg-[#0284c7]'}`} />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2
                className={`mt-3 font-sans text-2xl font-extrabold tracking-tight text-balance sm:text-3xl lg:text-4xl ${
                  dark ? 'text-white' : 'text-[#0b3d91] dark:text-white'
                }`}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p
                className={`mt-3 text-base leading-relaxed ${
                  dark ? 'text-sky-100/80' : 'text-slate-600 dark:text-slate-300'
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
              ? `mt-8 sm:mt-12 ${contentClassName}`.trim()
              : contentClassName
          }
        >
          {children}
        </div>
      </div>
    </section>
  )
}
