import type { AppProps } from 'next/app'
import '@/styles/global.css'

// if (process.env.NODE_ENV === 'development') {
//   if (typeof window !== 'undefined') {
//     const mc = require('../mocks/browser')
//     mc.worker.start()
//   }
// }

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
