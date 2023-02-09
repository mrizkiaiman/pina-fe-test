import * as React from 'react'
import { BBCA, user } from '@app/data'
import { numberFormatter } from '@app/utils/formatter/number'

import Image from 'next/image'
import { BuySellSection } from '@app/pages/search/buy-sell'
import { InformationSection } from '@app/pages/search/information'
import { StockChart } from '@app/pages/search/stock-chart'

export const Search = () => {
  const userBalance = React.useMemo(() => numberFormatter(user.balance.bbca), [user.balance.bbca])

  return (
    <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start justify-center w-full pt-24 pb-24 md:pb-0 md:pt-0">
      <section className="w-full xl:w-4/6 flex flex-col gap-8">
        <StockChart data={BBCA.stockChart} />
        <div className="rounded-2xl w-full bg-white p-8 md:mb-16">
          <InformationSection data={BBCA.statistics} />
        </div>
      </section>
      <section className="w-full lg:w-2/6">
        <BuySellSection userBalance={userBalance} />
      </section>
    </div>
  )
}

export default Search
