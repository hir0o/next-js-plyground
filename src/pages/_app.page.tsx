import type { AppProps } from 'next/app'
import '@/styles/global.css'

import { useEffect } from 'react'
import { worker } from '@/mocks/browser'
import { server } from '@/mocks/server'

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    const mc = require('../mocks/browser')
    mc.worker.start()
  }
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <h2>やあああ</h2>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
