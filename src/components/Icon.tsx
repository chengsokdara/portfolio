type Props = { className?: string }

export function ArrowUpRight({ className = 'h-4 w-4' }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Mail({ className = 'h-4 w-4' }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16v12H4V6zm0 0l8 7 8-7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Phone({ className = 'h-4 w-4' }: Props) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 4.5h3l1.5 4-2 1.5a12 12 0 005.5 5.5l1.5-2 4 1.5v3A2 2 0 0118 20 14 14 0 014 6a2 2 0 012.5-1.5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
