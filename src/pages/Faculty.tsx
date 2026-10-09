import { useState } from 'react'
import { leadership, facultyMembers, contact } from '../data'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Avatar from '../components/Avatar'
import InquiryModal from '../components/InquiryModal'

function FacultyProfileCard({
  member,
  delay,
  isLeadership = false,
}: {
  member: (typeof leadership)[number]
  delay: number
  isLeadership?: boolean
}) {
  return (
    <Reveal
      delay={delay}
      variant="scale"
      className={`rounded-3xl border transition-all duration-300 ${
        isLeadership
          ? 'border-amber-400/40 bg-white p-7 shadow-lg shadow-slate-900/5 hover:-translate-y-1 hover:border-amber-500 dark:border-amber-400/30 dark:bg-navy-900/80 sm:p-8'
          : 'border-slate-200/90 bg-white p-6 shadow-sm hover:-translate-y-1 hover:border-teal-400/50 hover:shadow-md dark:border-white/10 dark:bg-navy-900/60'
      }`}
    >
      <div className="flex flex-col sm:flex-row items-start gap-5">
        <Avatar
          name={member.name}
          photo={member.photo}
          className={`shrink-0 rounded-2xl ${
            isLeadership ? 'h-20 w-20 sm:h-24 sm:w-24 text-2xl' : 'h-18 w-18 sm:h-20 sm:w-20 text-xl'
          }`}
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider ${
                isLeadership
                  ? 'bg-amber-500/10 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300'
                  : 'bg-teal-500/10 text-teal-800 dark:bg-teal-400/15 dark:text-teal-300'
              }`}
            >
              {member.title}
            </span>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="font-mono text-xs text-slate-500 hover:text-navy-900 dark:text-slate-400 dark:hover:text-white"
              >
                {member.email}
              </a>
            )}
          </div>

          <h3 className="mt-2 font-display text-xl font-bold text-navy-950 dark:text-white sm:text-2xl">
            {member.name}
          </h3>

          <p className="font-mono text-xs font-semibold text-slate-500 dark:text-amber-400/80">
            {member.degree}
          </p>

          <p className="mt-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
            Primary Domain: {member.specialization}
          </p>

          {/* Research Interests */}
          {member.researchInterests && member.researchInterests.length > 0 && (
            <div className="mt-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Research & Mentorship Areas:
              </span>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {member.researchInterests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[10px] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Courses Taught */}
          {member.courses && member.courses.length > 0 && (
            <div className="mt-3 border-t border-slate-100 pt-3 dark:border-white/5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Key Courses & Advising:
              </span>
              <ul className="mt-1 space-y-0.5 text-xs text-slate-600 dark:text-slate-400">
                {member.courses.map((course) => (
                  <li key={course} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-teal-500" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function Faculty() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Academic Leadership & Mentorship"
        title="Faculty & Research Advisers"
        intro="Learn under published doctoral researchers, industry consultants, and applied computing fellows dedicated to advancing IT in Western Visayas."
      />

      {/* Leadership Section */}
      <Section eyebrow="College Leadership" title="Dean & Program Chair">
        <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-1">
          {leadership.map((m, i) => (
            <FacultyProfileCard key={m.name} member={m} delay={i * 0.08} isLeadership />
          ))}
        </div>
      </Section>

      {/* Teaching & Research Faculty */}
      <Section
        className="bg-slate-50/70 dark:bg-navy-950/40"
        eyebrow="Graduate Faculty"
        title="Instruction & Capstone Advisory Committee"
        intro="Our multidisciplinary faculty members combine academic doctoral training with practical engineering in cloud architecture, machine learning, and IoT sensor systems."
      >
        <div className="mx-auto max-w-4xl space-y-5">
          {facultyMembers.map((m, i) => (
            <FacultyProfileCard key={m.name} member={m} delay={i * 0.06} />
          ))}
        </div>
      </Section>

      {/* Consultation & Mentorship Call to Action */}
      <section className="py-16 sm:py-24 bg-white dark:bg-navy-950/60">
        <div className="container-page">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-8 text-center text-white shadow-xl sm:p-12">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                Research Collaboration
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl text-white">
                Interested in Capstone Mentorship with Our Faculty?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-slate-300">
                Discuss potential thesis and capstone research proposals aligned with the CICT Research Agenda 2026–2031.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="rounded-xl bg-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-navy-950 shadow-md hover:bg-amber-400 transition-colors"
                >
                  Schedule an Academic Consultation
                </button>
                <a
                  href={`mailto:${contact.email}`}
                  className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                >
                  Contact Graduate Office
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Inquiry Dialog */}
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
