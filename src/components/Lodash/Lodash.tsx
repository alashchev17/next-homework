import Script from 'next/script'
import { useEffect, useState } from 'react'

export const Lodash = () => {
  const [lodashLoaded, setLodashLoaded] = useState(false)

  useEffect(() => {
    if (lodashLoaded && window._) {
      console.log('[INFO]: Lodash loaded')
      console.log('[LODASH]:', window._)
      console.log('[LODASH]: Lodash version: ', window._.VERSION)
      const array = [1, 2, 3, 4, 5]
      console.log('[LODASH]: Reversed array:', window._.reverse([...array]))
    }
  }, [lodashLoaded])
  return (
    <Script
      src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"
      onLoad={() => {
        console.log('lodash.min.js loaded successfully')
        setLodashLoaded(true)
      }}
    />
  )
}
