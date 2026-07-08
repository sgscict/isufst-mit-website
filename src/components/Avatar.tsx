import { useState } from 'react'

type AvatarProps = {
  name: string
  photo?: string
  className?: string
}

const HONORIFICS = new Set(['dr', 'dr.', 'mr', 'mr.', 'mrs', 'mrs.', 'ms', 'ms.', 'prof', 'prof.', 'engr', 'engr.'])

function initials(name: string) {
  return name
    .split(' ')
    .filter((w) => /^[A-Za-zÀ-ÖØ-öø-ÿ]/.test(w) && !HONORIFICS.has(w.toLowerCase()))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function Avatar({ name, photo, className = 'h-16 w-16' }: AvatarProps) {
  const [failed, setFailed] = useState(false)

  if (photo && !failed) {
    return (
      <img
        src={photo}
        alt={name}
        onError={() => setFailed(true)}
        className={`${className} rounded-2xl object-cover shadow-md`}
      />
    )
  }

  return (
    <div
      className={`${className} grid shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 font-display font-bold text-white shadow-md dark:from-teal-500 dark:to-teal-600`}
      aria-hidden="true"
    >
      {initials(name) || '?'}
    </div>
  )
}
