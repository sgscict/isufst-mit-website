import {
  scholarship,
  scholarshipEligibility,
  scholarshipRequirements,
  scholarshipIfEmployed,
  scholarshipBenefits,
  scholarshipSteps,
  scholarshipReminders,
  contact,
} from '../data'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'

function ChecklistCard({
  title,
  items,
  delay = 0,
}: {
  title: string
  items: readonly string[]
  delay?: number
}) {
  return (
    <Reveal
      delay={delay}
      variant="scale"
      className="rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-white/10 dark:bg-white/5 sm:p-7"
    >
      <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex min-w-0 items-start gap-3 text-sm text-slate-700 dark:text-navy-100/75">
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-500/15 dark:bg-teal-400/15">
              <Icon name="check" className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
            </span>
            <span className="min-w-0 flex-1 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export default function Scholarship() {
  return (
    <>
      <PageHero
        eyebrow={`${scholarship.abbrev} Scholarship`}
        title={scholarship.name}
        intro={scholarship.tagline}
      />

      <Section eyebrow="Overview" title="What is STRAND?" intro={scholarship.description}>
        <p className="mx-auto max-w-2xl text-center text-sm text-slate-500 dark:text-navy-100/50">
          {scholarship.agency}. Program guidelines and slot availability are set by DOST-SEI each
          cycle — confirm current requirements with the ISUFST School of Graduate Studies before
          applying.
        </p>
      </Section>

      <Section className="bg-white dark:bg-navy-950/30" eyebrow="Eligibility" title="Who can apply">
        <div className="mx-auto max-w-2xl">
          <ChecklistCard title="Eligibility criteria" items={scholarshipEligibility} />
        </div>
      </Section>

      <Section
        eyebrow="Requirements"
        title="Documents you'll need"
        intro="Prepare these documents before submitting your application to the STRAND focal office."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <ChecklistCard title="Core requirements" items={scholarshipRequirements} />
          <ChecklistCard title="If currently employed" items={scholarshipIfEmployed} delay={0.08} />
        </div>
      </Section>

      <Section
        className="bg-white dark:bg-navy-950/30"
        eyebrow="Benefits"
        title="What the scholarship covers"
        intro={`${scholarshipBenefits.level} scholars — ${scholarshipBenefits.duration}.`}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scholarshipBenefits.amounts.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 0.06}
              variant="scale"
              className="gradient-border relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/10"
            >
              <div className="font-display text-3xl font-bold text-navy-800 dark:text-white">
                {item.amount}
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-700 dark:text-navy-100/75">
                {item.label}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl">
          <ul className="space-y-2.5">
            {scholarshipBenefits.notes.map((note) => (
              <li
                key={note}
                className="flex min-w-0 items-start gap-3 text-sm text-slate-600 dark:text-navy-100/65"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-500/15 dark:bg-teal-400/15">
                  <Icon name="check" className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                </span>
                <span className="min-w-0 flex-1 leading-relaxed">{note}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section eyebrow="Process" title="How to apply" intro="From admission to scholarship agreement — six steps.">
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {scholarshipSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.06} variant="scale" className="gradient-border rounded-2xl p-6">
              <span className="font-display text-3xl font-bold text-teal-500/30 dark:text-teal-400/30">
                {s.step}
              </span>
              <h3 className="mt-2 font-display text-base font-bold text-navy-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-navy-100/65">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white dark:bg-navy-950/30" eyebrow="Good to know" title="Important reminders">
        <div className="mx-auto max-w-2xl">
          <ChecklistCard title="Scholarship obligations" items={scholarshipReminders} />
        </div>
      </Section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-8 text-center text-white shadow-2xl shadow-navy-900/30 sm:p-12">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="animate-orb absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-500/15 blur-3xl" />
              <h2 className="relative font-display text-2xl font-bold sm:text-3xl">
                Ready to apply for STRAND?
              </h2>
              <p className="relative mx-auto mt-3 max-w-md text-navy-100/75">
                Talk to the School of Graduate Studies to confirm current STRAND slot availability for
                the MIT program.
              </p>
              <a
                href={`mailto:${contact.email}?subject=DOST-SEI%20STRAND%20Inquiry`}
                className="shine relative mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-400 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl"
              >
                Inquire about STRAND
                <Icon name="arrow" className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
