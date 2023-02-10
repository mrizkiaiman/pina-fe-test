import * as React from 'react'
import { GetServerSideProps } from 'next'
import { BBCA, user } from '@app/data'
import { useRouter } from 'next/router'
import { numberFormatter } from '@app/utils/formatter/number'

import Head from 'next/head'
import { BuySellSection } from '@components/_pages/search/buy-sell'
import { InformationSection } from '@components/_pages/search/information'
import { StockChart } from '@components/_pages/search/stock-chart'

export interface SearchPageParams {
  keyword: string
}

export const Search: React.FC<SearchPageParams> = ({ keyword }) => {
  const userBalance = React.useMemo(() => numberFormatter(user.balance.bbca), [])

  return (
    <>
      <Head>
        <title>{`Search results for ${keyword || '.....'}`}</title>
      </Head>
      <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start justify-center w-full pt-24 lg:pt-0 pb-24 xl:pb-0">
        <section className="w-full xl:w-4/6 flex flex-col gap-8">
          <StockChart data={BBCA.stockChart} />
          <div className="rounded-2xl w-full bg-white p-8 xl:mb-16">
            <InformationSection data={BBCA.statistics} />
          </div>
        </section>
        <section className="w-full xl:w-2/6">
          <BuySellSection userBalance={userBalance} pricePerStock={BBCA.stockChart.pricePerStock} />
        </section>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{ keyword: string }> = async context => {
  const { keyword } = context.params as { keyword: string }
  return { props: { keyword } }
}

export default Search
