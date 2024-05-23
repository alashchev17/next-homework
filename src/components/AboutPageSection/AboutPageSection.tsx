'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'

interface AboutPageSectionProps {
  text?: string
}

export const AboutPageSection = ({ text }: AboutPageSectionProps) => {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-4 items-center">
      <Button text="Go Back" onClick={() => router.back()} />
      <h2 className="text-lg">{text ? text : 'About page'}</h2>
    </div>
  )
}
