import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'up' | 'scale'
  as?: ElementType
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
  as: Tag = 'div',
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>()
  const base = variant === 'scale' ? 'reveal-scale' : 'reveal'

  return (
    <Tag
      ref={ref}
      className={`${base} ${visible ? 'is-visible' : ''} min-w-0 ${className}`}
      style={{ '--reveal-delay': `${delay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
