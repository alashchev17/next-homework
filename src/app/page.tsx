import type { Metadata } from 'next'
import { routes } from '@/routes'

import { HomePageSection } from '@/components/HomePageSection'

export const metadata: Metadata = routes.find((el) => el.path === '/')?.meta!

export default function Home() {
  return (
    <main className="flex h-[calc(100dvh-51px)] flex-col items-center justify-between p-7">
      <h2 className="text-lg">Homepage</h2>
      <HomePageSection />
    </main>
  )
}
