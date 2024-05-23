import { Metadata } from 'next'
import { ContactsPageSection } from '@/components/ContactsPageSection'
import { routes } from '@/routes'

export const metadata: Metadata = routes.find((el) => el.path === '/contacts')?.meta!

export default function ContactsPage() {
  return (
    <main className="flex h-[calc(100dvh-51px)] flex-col items-center justify-between p-24">
      <ContactsPageSection />
    </main>
  )
}
