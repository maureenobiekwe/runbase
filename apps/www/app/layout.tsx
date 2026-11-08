import '@code-hike/mdx/styles.css'
import 'config/code-hike.css'
import '../styles/globals.css'
import '../pages/launch-week/launchWeek.css'

import { inter, manrope, sourceCodePro } from '~/lib/fonts'
import { genFaviconData } from 'common/MetaFavicons/app-router'
import type { Metadata, Viewport } from 'next'

import Providers from './providers'
import { APP_NAME, DEFAULT_META_DESCRIPTION, SITE_ORIGIN } from '@/lib/constants'

const site_title = `${APP_NAME} | The Postgres Development Platform`

const FAVICON_ROUTE = process.env.NODE_ENV === 'development' ? '/favicon/local' : '/favicon'

export const metadata: Metadata = {
  title: site_title,
  description: DEFAULT_META_DESCRIPTION,
  icons: { icon: '/brand-assets/runbase-symbol.svg' },
  openGraph: {
    type: 'website',
    url: SITE_ORIGIN,
    siteName: APP_NAME,
    card: 'summary_large_image',
  },
  // www serves from the site root (`basePath: ''` in next.config.mjs)
  icons: genFaviconData('', FAVICON_ROUTE),
  manifest: `${FAVICON_ROUTE}/manifest.json`,
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${inter.variable} ${sourceCodePro.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
