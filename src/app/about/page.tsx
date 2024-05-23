import type { Metadata } from 'next'
import { AboutPageSection } from '@/components/AboutPageSection'
import { routes } from '@/routes'

export const metadata: Metadata = routes.find((el) => el.path === '/about')?.meta!

export default function AboutPage() {
  return (
    <main className="flex h-[calc(100dvh-51px)] flex-col items-center justify-between p-24">
      <AboutPageSection />
    </main>
  )
}
