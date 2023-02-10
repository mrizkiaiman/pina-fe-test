import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Sidebar } from '@components/sidebar'
import Navbar from '@components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`w-screen bg-gray-150`}>
      <Navbar />
      <Sidebar />
      <div className="px-8 py-8 lg:pt-28 lg:pl-48 lg:pr-16">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
