import type { AppProps } from 'next/app'
import '@/styles/global.css'

import { Suspense } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => (
  //  eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
)

export default MyApp
