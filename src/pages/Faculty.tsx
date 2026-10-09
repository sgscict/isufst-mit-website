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
      className={`rounded-2xl border transition-all duration-200 ${
        isLeadership
          ? 'border-sky-300 bg-white p-6 shadow-md hover:border-[#0284c7] dark:border-sky-800 dark:bg-slate-900/80 sm:p-7'
          : 'border-slate-200 bg-white p-6 shadow-sm hover:border-[#0284c7] hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60'
      }`}
    >
      <div className="flex flex-col sm:flex-row items-start gap-5">
        <Avatar
          name={member.name}
          photo={member.photo}
          className={`shrink-0 rounded-2xl ${
            isLeadership ? 'h-20 w-20 sm:h-22 sm:w-22 text-2xl' : 'h-16 w-16 sm:h-18 sm:w-18 text-xl'
          }`}
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-md px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${
                isLeadership
                  ? 'bg-sky-100 text-[#0b3d91] dark:bg-sky-950 dark:text-sky-300'
                  : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {member.title}
            </span>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="font-mono text-xs text-slate-500 hover:text-[#0b3d91] dark:hover:text-sky-300"
              >
                {member.email}
              </a>
            )}
          </div>

          <h3 className="mt-2 font-sans text-lg font-bold text-[#0b3d91] dark:text-white sm:text-xl">
            {member.name}
          </h3>

          <p className="font-mono text-xs text-slate-500">
            {member.degree}
          </p>

          <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
            Primary Domain: {member.specialization}
          </p>

          {member.researchInterests && member.researchInterests.length > 0 && (
            <div className="mt-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Research & Mentorship Areas:
              </span>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {member.researchInterests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[10px] text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          {member.courses && member.courses.length > 0 && (
            <div className="mt-3 border-t border-slate-100 pt-2.5 dark:border-slate-800">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Key Courses & Advising:
              </span>
              <ul className="mt-1 space-y-0.5 text-xs text-slate-600 dark:text-slate-400">
                {member.courses.map((course) => (
                  <li key={course} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-[#0284c7]" />
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

      <Section eyebrow="College Leadership" title="Dean & Program Chair">
        <div className="mx-auto max-w-4xl grid gap-5 sm:grid-cols-1">
          {leadership.map((m, i) => (
            <FacultyProfileCard key={m.name} member={m} delay={i * 0.05} isLeadership />
          ))}
        </div>
      </Section>

      <Section
        className="bg-slate-50/70 dark:bg-[#071328]/40"
        eyebrow="Graduate Faculty"
        title="Instruction & Capstone Advisory Committee"
        intro="Our multidisciplinary faculty members combine academic doctoral training with practical engineering in cloud architecture, machine learning, and IoT sensor systems."
      >
        <div className="mx-auto max-w-4xl space-y-4">
          {facultyMembers.map((m, i) => (
            <FacultyProfileCard key={m.name} member={m} delay={i * 0.04} />
          ))}
        </div>
      </Section>

      <section className="py-16 sm:py-20 bg-white dark:bg-[#071328]/60">
        <div className="container-page">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b3d91] to-[#051a40] p-8 text-center text-white shadow-xl sm:p-10">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                Research Collaboration
              </span>
              <h2 className="mt-2 font-sans text-2xl font-bold sm:text-3xl text-white">
                Interested in Capstone Mentorship with Our Faculty?
              </h2>
              <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-sky-100/90">
                Discuss potential thesis and capstone research proposals aligned with the CICT Research Agenda 2026–2031.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="rounded-xl bg-[#0284c7] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#0369a1] transition-colors"
                >
                  Schedule an Academic Consultation
                </button>
                <a
                  href={`mailto:${contact.email}`}
                  className="rounded-xl border border-white/20 bg-white/10 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-colors"
                >
                  Contact Graduate Office
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
