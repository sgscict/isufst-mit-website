type IconProps = { name: string; className?: string }

// Minimal inline stroke-icon set (no external icon dependency).
const paths: Record<string, string> = {
  brain:
    'M9 3a3 3 0 0 0-3 3v.5A3 3 0 0 0 4 9.5a3 3 0 0 0 1 5.6V17a3 3 0 0 0 5 2.2A3 3 0 0 0 15 17v-1.9a3 3 0 0 0 1-5.6A3 3 0 0 0 14 6.5V6a3 3 0 0 0-5-3Zm0 0v18',
  flask: 'M9 3h6M10 3v6l-5 8a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 17l-5-8V3M7.5 14h9',
  users:
    'M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM21 20v-1a4 4 0 0 0-3-3.9M16 4.1a4 4 0 0 1 0 7.8',
  globe:
    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18',
  chip: 'M6 6h12v12H6zM9 9h6v6H9M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2',
  award:
    'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM8.2 13.5 7 22l5-3 5 3-1.2-8.5',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  check: 'M20 6 9 17l-5-5',
  build: 'M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5ZM7 17l1 1',
  anchor: 'M12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 0v13M5 12H3a9 9 0 0 0 18 0h-2M8 15l-3-3M16 15l3-3',
  wave: 'M2 8c1.5-1.5 3-1.5 4.5 0S9.5 9.5 11 8s3-1.5 4.5 0S18.5 9.5 20 8M2 13c1.5-1.5 3-1.5 4.5 0S9.5 14.5 11 13s3-1.5 4.5 0S18.5 14.5 20 13M2 18c1.5-1.5 3-1.5 4.5 0S9.5 19.5 11 18s3-1.5 4.5 0S18.5 19.5 20 18',
  sprout: 'M12 21v-9m0 0C12 8 9 6 4 6c0 5 3 6 8 6Zm0 0c0-3 2-5 6-5 0 4-2 5-6 5Z',
  scale:
    'M12 3v18M7 21h10M12 6l-7 2 3 5a3 3 0 0 1-6 0l3-5M12 6l7 2-3 5a3 3 0 0 0 6 0l-3-5',
  compass: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM15.5 8.5l-2 5-5 2 2-5 5-2Z',
  doc: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5ZM14 3v5h5M9 13h6M9 17h6',
  journal: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5ZM19 3v18M9 8h6M9 12h4',
  mail: 'M4 6h16v12H4zM4 7l8 6 8-6',
  pin: 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  phone:
    'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2',
}

export default function Icon({ name, className = 'h-6 w-6' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name] ?? paths.check} />
    </svg>
  )
}
