import { leadership, facultyMembers, contact } from '../data'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Avatar from '../components/Avatar'
import Icon from '../components/Icon'

function LeaderCard({ member, delay }: { member: (typeof leadership)[number]; delay: number }) {
  return (
    <Reveal
      delay={delay}
      variant="scale"
      className="gradient-border relative overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/10 sm:p-8"
    >
      <div className="flex min-w-0 items-start gap-5">
        <Avatar name={member.name} photo={member.photo} className="h-16 w-16 text-xl sm:h-20 sm:w-20 sm:text-2xl" />
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-700 dark:text-teal-300">
            {member.title}
          </div>
          <h3 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-white">{member.name}</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-navy-100/60">{member.degree}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-navy-100/70">
            {member.specialization}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

function FacultyCard({ member, delay }: { member: (typeof facultyMembers)[number]; delay: number }) {
  return (
    <Reveal
      delay={delay}
      variant="scale"
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 text-center transition-all duration-400 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-teal-400/30"
    >
      <Avatar name={member.name} photo={member.photo} className="mx-auto h-20 w-20 text-xl" />
      <h3 className="mt-4 font-display text-base font-bold text-navy-900 dark:text-white">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold text-teal-600 dark:text-teal-400">{member.title}</p>
      <p className="mt-1 text-xs text-slate-500 dark:text-navy-100/50">{member.degree}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-navy-100/65">{member.specialization}</p>
    </Reveal>
  )
}

export default function Faculty() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="The people behind the MIT program"
        intro="Meet the faculty leading instruction, research, and capstone mentorship for the Master in Information Technology."
      />

      <Section eyebrow="Leadership" title="Dean & Program Chair">
        <div className="grid gap-6 sm:grid-cols-2">
          {leadership.map((m, i) => (
            <LeaderCard key={m.name} member={m} delay={i * 0.08} />
          ))}
        </div>
      </Section>

      <Section
        className="bg-white dark:bg-navy-950/30"
        eyebrow="Faculty"
        title="MIT teaching faculty"
        intro="The instructors and research mentors guiding the Master in Information Technology program."
      >
        <div className="flex flex-wrap justify-center gap-5">
          {facultyMembers.map((m, i) => (
            <div key={m.name} className="w-full sm:w-[calc(50%_-_0.625rem)] lg:w-[calc(25%_-_0.9375rem)]">
              <FacultyCard member={m} delay={i * 0.06} />
            </div>
          ))}
        </div>
      </Section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-8 text-center text-white shadow-2xl shadow-navy-900/30 sm:p-12">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="animate-orb absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-500/15 blur-3xl" />
              <h2 className="relative font-display text-2xl font-bold sm:text-3xl">
                Want to work with our faculty?
              </h2>
              <p className="relative mx-auto mt-3 max-w-md text-navy-100/75">
                Reach out to the School of Graduate Studies to learn more about capstone advising and
                research mentorship.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="shine relative mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-400 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl"
              >
                Contact the Graduate Office
                <Icon name="arrow" className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
