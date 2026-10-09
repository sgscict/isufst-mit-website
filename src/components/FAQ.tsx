import { useState } from 'react'
import { faqs } from '../data'
import Section from './Section'
import Reveal from './Reveal'

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <Reveal delay={index * 0.04} variant="scale">
      <div
        className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
          open
            ? 'border-amber-400/40 bg-white shadow-md dark:border-amber-400/30 dark:bg-navy-900/80'
            : 'border-slate-200/80 bg-white hover:border-slate-300 dark:border-white/10 dark:bg-navy-900/50 dark:hover:border-white/20'
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left"
          aria-expanded={open}
        >
          <span className="min-w-0 flex-1 font-display text-base font-bold text-navy-950 dark:text-white">
            {q}
          </span>
          <span
            className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg transition-transform duration-300 ${
              open
                ? 'rotate-45 bg-navy-900 text-amber-400 dark:bg-amber-400 dark:text-navy-950'
                : 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300'
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <path strokeLinecap="round" d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
        <div className={`faq-panel ${open ? 'is-open' : ''}`}>
          <div className="overflow-hidden">
            <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 border-t border-slate-100 pt-3 dark:border-white/5">
              {a}
            </p>
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
      className="bg-white py-16 dark:bg-navy-950/60 sm:py-24"
      eyebrow="Admissions & Academics"
      title={
        <>
          Frequently Asked <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400">Questions</span>
        </>
      }
      intro="Key answers concerning capstone expectations, working professional modalities, DOST-SEI scholarships, and graduate residency."
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <Item key={f.q} q={f.q} a={f.a} index={i} />
        ))}
      </div>
    </Section>
  )
}
