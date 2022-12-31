import type { AppProps } from 'next/app'
import '@/styles/global.css'
import { apiClient } from '@/lib/apiClient'
import { preload } from 'swr'

// if (process.env.NODE_ENV === 'development') {
//   if (typeof window !== 'undefined') {
//     const mc = require('../mocks/browser')
//     mc.worker.start()
//   }
// }

preload('todo', apiClient.todo.$get)

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
