import Layout from '~/components/Layouts/Default'
import SectionContainer from '~/components/Layouts/SectionContainer'
import Container from 'components/Container'
import { NextSeo } from 'next-seo'

const assets = [
  {
    name: 'Symbol',
    description: 'Use the symbol when space is limited.',
    src: '/brand-assets/runbase-symbol.svg',
    alt: 'Runbase database symbol',
    width: 44,
    height: 44,
    previewClassName: 'bg-white',
  },
  {
    name: 'Wordmark for light backgrounds',
    description: 'Use the dark wordmark on a light background.',
    src: '/brand-assets/runbase-wordmark-light.svg',
    alt: 'Runbase wordmark on a light background',
    width: 176,
    height: 48,
    previewClassName: 'bg-white',
  },
  {
    name: 'Wordmark for dark backgrounds',
    description: 'Use the light wordmark on a dark background.',
    src: '/brand-assets/runbase-wordmark-dark.svg',
    alt: 'Runbase wordmark on a dark background',
    width: 176,
    height: 48,
    previewClassName: 'bg-[#1c1c1c]',
  },
]

const BrandPage = () => (
  <>
    <NextSeo
      title="Runbase brand assets"
      description="Download the Runbase symbol and wordmark as SVG files."
    />
    <Layout>
      <Container>
        <SectionContainer className="flex flex-col gap-10 py-16 md:py-24">
          <header className="flex max-w-2xl flex-col gap-3">
            <h1 className="m-0 text-5xl tracking-tight text-foreground sm:text-6xl">
              Runbase brand assets
            </h1>
            <p className="m-0 text-pretty text-base text-foreground-light">
              Choose the symbol for compact spaces or the wordmark when there is room for the name.
            </p>
          </header>
          <ul className="m-0 grid list-none gap-6 p-0 md:grid-cols-3">
            {assets.map((asset) => (
              <li key={asset.name} className="flex flex-col gap-4">
                <div
                  className={`flex h-40 items-center justify-center rounded-lg border p-6 ${asset.previewClassName}`}
                >
                  <img
                    src={asset.src}
                    alt={asset.alt}
                    width={asset.width}
                    height={asset.height}
                    className="h-auto max-h-24 w-auto max-w-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="m-0 text-base font-medium text-foreground">{asset.name}</h2>
                  <p className="m-0 text-sm text-foreground-light">{asset.description}</p>
                </div>
                <a
                  className="text-sm text-foreground underline underline-offset-4"
                  href={asset.src}
                  download
                >
                  Download SVG
                </a>
              </li>
            ))}
          </ul>
        </SectionContainer>
      </Container>
    </Layout>
  </>
)

export default BrandPage
