import styles from './loading-anim.module.css'

const LogoLoader = () => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <div>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles['loading']}
      >
        <rect
          x="1"
          y="1"
          width="42"
          height="42"
          rx="12"
          stroke="hsl(var(--brand-default))"
          strokeWidth={2}
        />
        <path
          d="M10 15c0-2.2 5.4-4 12-4s12 1.8 12 4-5.4 4-12 4-12-1.8-12-4Z"
          stroke="hsl(var(--brand-default))"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M10 15v7c0 2.2 5.4 4 12 4s12-1.8 12-4v-7M10 22v7c0 2.2 5.4 4 12 4s12-1.8 12-4v-7"
          stroke="hsl(var(--brand-default))"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
)

export default LogoLoader
