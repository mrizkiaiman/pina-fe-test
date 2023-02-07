import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

import { Sidebar } from '@components/sidebar'
import Navbar from '@app/components/navbar'

const gothamRounded = localFont({
  src: [
    {
      path: '../public/fonts/GothamRnd-Light.woff2',
      weight: '100',
    },
    {
      path: '../public/fonts/GothamRnd-Medium.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/GothamRnd-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-gothamRounded',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${gothamRounded.variable} font-sans w-screen bg-gray-150`}>
      <Navbar />
      <Sidebar />

      <div className="pt-28 pl-48 pr-16">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
