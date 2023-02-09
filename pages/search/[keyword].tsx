import * as React from 'react'
import { BBCA, user } from '@app/data'
import { useRouter } from 'next/router'
import { numberFormatter } from '@app/utils/formatter/number'

import Head from 'next/head'
import { BuySellSection } from '@app/components/_pages/search/buy-sell'
import { InformationSection } from '@app/components/_pages/search/information'
import { StockChart } from '@app/components/_pages/search/stock-chart'

export const Search = () => {
  const router = useRouter()
  const { keyword } = router.query
  const searchKeyword = keyword as string

  const userBalance = React.useMemo(() => numberFormatter(user.balance.bbca), [])

  return (
    <>
      <Head>
        <title>{`Search results for ${searchKeyword || '.....'}`}</title>
      </Head>
      <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start justify-center w-full pt-24 lg:pt-0 pb-24 xl:pb-0">
        <section className="w-full xl:w-4/6 flex flex-col gap-8">
          <StockChart data={BBCA.stockChart} />
          <div className="rounded-2xl w-full bg-white p-8 md:mb-16">
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

export default Search
