'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Lodash } from '@/components/Lodash'

export const HomePageSection = () => {
  const [imageUrl, setImageUrl] = useState('https://i.redd.it/k3b8cs0ob8ya1.jpg')
  const [buttonText, setButtonText] = useState('What a shame! Change it!')
  const [isDisabled, setIsDisabled] = useState(false)

  const handleImageChange = () => {
    setImageUrl('https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png')
    setButtonText('Seems to be more appropriate! Well done!')
    setIsDisabled(true)
  }
  return (
    <>
      <Image className="h-auto w-auto" src={imageUrl} width={400} height={500} alt="Homepage Image" onLoadStart={() => alert(1)} priority />
      <Button text={buttonText} onClick={handleImageChange} disabled={isDisabled} />
      <Lodash />
    </>
  )
}
