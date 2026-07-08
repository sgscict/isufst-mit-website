import { useState } from 'react'
import { faqs } from '../data'
import Section from './Section'
import Reveal from './Reveal'

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal delay={index * 0.05} variant="scale">
      <div
        className={`overflow-hidden rounded-2xl border transition-all duration-400 ${
          open
            ? 'border-teal-200 bg-white shadow-lg shadow-teal-500/5 dark:border-teal-400/30 dark:bg-white/5 dark:shadow-teal-500/10'
            : 'border-slate-200/80 bg-white hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20'
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          aria-expanded={open}
        >
          <span className="min-w-0 flex-1 font-display text-base font-semibold text-navy-900 dark:text-white">{q}</span>
          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl transition-all duration-300 ${
              open
                ? 'rotate-45 bg-teal-500 text-white'
                : 'bg-slate-100 text-teal-600 dark:bg-white/10 dark:text-teal-400'
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <path strokeLinecap="round" d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
        <div className={`faq-panel ${open ? 'is-open' : ''}`}>
          <div className="overflow-hidden">
            <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600 dark:text-navy-100/65">{a}</p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function FAQ() {
  return (
    <Section
      id="faq"
      className="bg-dot-grid pt-6 sm:pt-8"
      eyebrow="FAQ"
      title="Questions, answered"
      intro="Still curious? Reach out to the CICT Graduate Studies Office for anything not covered here."
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <Item key={f.q} q={f.q} a={f.a} index={i} />
        ))}
      </div>
    </Section>
  )
}
