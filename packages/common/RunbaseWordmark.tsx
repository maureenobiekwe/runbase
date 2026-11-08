import type { ComponentProps } from 'react'

export const RunbaseWordmark = ({ className, ...props }: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 176 48"
    fill="none"
    width={124}
    height={25}
    className={className}
    role="img"
    aria-label="Runbase"
    {...props}
  >
    <rect width="44" height="44" y="2" rx="12" fill="#3ECF8E" />
    <path
      d="M11 16.5c0-2.2 4.9-4 11-4s11 1.8 11 4-4.9 4-11 4-11-1.8-11-4Z"
      stroke="#10251C"
      strokeWidth="2.5"
    />
    <path
      d="M11 16.5v7c0 2.2 4.9 4 11 4s11-1.8 11-4v-7M11 23.5v7c0 2.2 4.9 4 11 4s11-1.8 11-4v-7"
      stroke="#10251C"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x="56"
      y="34"
      fill="currentColor"
      fontFamily="Inter, Arial, sans-serif"
      fontSize="29"
      fontWeight="600"
      letterSpacing="-1.2"
    >
      runbase
    </text>
  </svg>
)
