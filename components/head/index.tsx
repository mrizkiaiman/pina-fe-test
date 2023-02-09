import React from 'react'
import Head from 'next/head'

interface PinaHeadProps {
  title: string
  description?: string
  keywords?: string
}

export const PinaHead: React.FC<PinaHeadProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  )
}

export default PinaHead
