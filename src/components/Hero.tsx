import { program, heroStats } from '../data'
import Icon from './Icon'
import { useCountUp } from '../hooks/useCountUp'
import { useParallax } from '../hooks/useParallax'

function StatCounter({ value, label }: { value: string; label: string }) {
  const numMatch = value.match(/^(\d+)/)
  const { ref, display } = useCountUp({
    end: numMatch ? parseInt(numMatch[1], 10) : 0,
    suffix: numMatch ? value.slice(numMatch[1].length) : '',
  })

  if (!numMatch) {
    return (
      <div className="text-center">
        <dt className="font-display text-3xl font-bold text-teal-400 sm:text-4xl">{value}</dt>
        <dd className="mt-1 text-sm text-navy-100/80">{label}</dd>
      </div>
    )
  }

  return (
    <div className="text-center">
      <dt ref={ref} className="font-display text-3xl font-bold text-teal-400 sm:text-4xl">
        {display}
      </dt>
      <dd className="mt-1 text-sm text-navy-100/80">{label}</dd>
    </div>
  )
}

export default function Hero() {
  const orb1 = useParallax(0.35)
  const orb2 = useParallax(0.2)
  const orb3 = useParallax(0.15)

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-navy-950 text-white">
      {/* Animated backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0d1f4a]" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="bg-noise absolute inset-0 opacity-60" />

      <div ref={orb1} className="animate-orb absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-teal-500/15 blur-[100px] 2xl:h-[640px] 2xl:w-[640px]" />
      <div ref={orb2} className="animate-orb-reverse absolute -right-32 top-1/3 h-[450px] w-[450px] rounded-full bg-navy-500/25 blur-[100px] 2xl:h-[580px] 2xl:w-[580px]" />
      <div ref={orb3} className="animate-orb absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-teal-400/10 blur-[80px] 2xl:h-[450px] 2xl:w-[450px]" />

      <div className="container-page relative flex min-h-screen flex-col justify-center pt-28 pb-32 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="animate-enter-up inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-navy-100 backdrop-blur-sm"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            {program.badge}
          </div>

          <h1
            className="animate-enter-up mx-auto mt-7 font-display text-[2.75rem] font-bold leading-[1.05] text-balance sm:text-6xl lg:text-[4rem] 2xl:text-[4.5rem]"
            style={{ animationDelay: '0.2s' }}
          >
            Master in{' '}
            <span className="gradient-text">Information Technology</span>
          </h1>

          <p
            className="animate-enter-up mt-5 text-lg font-medium text-teal-300/90 sm:text-xl"
            style={{ animationDelay: '0.3s' }}
          >
            Specialization — {program.specialization}
          </p>

          <p
            className="animate-enter-up mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-100/75"
            style={{ animationDelay: '0.4s' }}
          >
            {program.tagline}
          </p>

          <div
            className="animate-enter-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: '0.5s' }}
          >
            <a
              href="#graduate"
              className="shine group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-400 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-teal-500/25 transition-all hover:shadow-2xl hover:shadow-teal-500/30"
            >
              How you graduate
              <Icon name="arrow" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a
              href="#curriculum"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
            >
              Explore the curriculum
            </a>
          </div>

          <dl
            className="animate-enter-up mx-auto mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-10"
            style={{ animationDelay: '0.65s' }}
          >
            {heroStats.map((s) => (
              <StatCounter key={s.l} value={s.v} label={s.l} />
            ))}
          </dl>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="animate-scroll-bounce absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy-200/60 transition-colors hover:text-white"
          aria-label="Scroll to content"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
            <path strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f4f6fb] to-transparent dark:from-[#060e1f]" />
    </section>
  )
}
