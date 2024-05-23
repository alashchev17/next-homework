import type { Metadata } from 'next'
import { routes } from '@/routes'
import { AboutPageSection } from '@/components/AboutPageSection'

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return { title: `${routes.find((el) => el.path === '/about')?.meta.title} ${params.slug}` }
}

type AboutSlugPageProps = {
  params: {
    slug: string
  }
}

export default async function AboutSlugPage({ params }: AboutSlugPageProps) {
  return (
    <main className="flex h-[calc(100dvh-51px)] flex-col items-center justify-between p-24">
      {/* <h2 className="text-lg">About page & {params.slug}</h2> */}
      <AboutPageSection text={`About page & ${params.slug}`} />
    </main>
  )
}
