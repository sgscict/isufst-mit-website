import { useEffect, useRef, useState } from 'react'

type Options = {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function useCountUp({ end, duration = 1800, suffix = '', prefix = '' }: Options) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(`${prefix}0${suffix}`)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(`${prefix}${end}${suffix}`)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, prefix, suffix])

  useEffect(() => {
    if (!started) return

    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(`${prefix}${Math.round(end * eased)}${suffix}`)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [started, end, duration, prefix, suffix])

  return { ref, display }
}
