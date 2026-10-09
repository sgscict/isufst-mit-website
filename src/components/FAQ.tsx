import { useState } from 'react'
import { faqs } from '../data'
import Section from './Section'
import Reveal from './Reveal'

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <Reveal delay={index * 0.03} variant="scale">
      <div
        className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
          open
            ? 'border-[#0284c7] bg-white shadow-sm dark:border-sky-700 dark:bg-slate-900/80'
            : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/40'
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
          aria-expanded={open}
        >
          <span className="min-w-0 flex-1 font-sans text-sm font-bold text-[#0b3d91] dark:text-white sm:text-base">
            {q}
          </span>
          <span
            className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg transition-transform duration-200 ${
              open
                ? 'rotate-45 bg-[#0b3d91] text-white dark:bg-[#0284c7]'
                : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
              <path strokeLinecap="round" d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
        <div className={`faq-panel ${open ? 'is-open' : ''}`}>
          <div className="overflow-hidden">
            <p className="px-6 pb-4 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 border-t border-slate-100 pt-3 dark:border-slate-800">
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
      className="bg-slate-50/70 py-16 dark:bg-[#071328]/40 sm:py-20"
      eyebrow="Admissions & Academics"
      title={
        <>
          Frequently Asked <span className="text-[#0284c7]">Questions</span>
        </>
      }
      intro="Key answers concerning capstone expectations, working professional modalities, DOST-SEI scholarships, and graduate residency."
    >
      <div className="mx-auto max-w-3xl space-y-2.5">
        {faqs.map((f, i) => (
          <Item key={f.q} q={f.q} a={f.a} index={i} />
        ))}
      </div>
    </Section>
  )
}
