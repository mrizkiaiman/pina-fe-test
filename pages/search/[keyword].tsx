import * as React from 'react'
import { BBCA, user } from '@app/data'
import { numberFormatter } from '@app/utils/formatter/number'

import Image from 'next/image'
import { BuySellSection } from '@app/pages/search/buy-sell'
import { InformationSection } from '@app/pages/search/information'
import { StockChart } from '@app/pages/search/stock-chart'

export const Search = () => {
  const userBalance = React.useMemo(() => numberFormatter(user.balance.bbca), [user.balance.bbca])
  const dataPerMenu = ['Statistik', 'Corp Action', 'Berita', 'Laporan Keuangan', 'Tentang Perusahaan']

  const [selectedMenu, setSelectedMenu] = React.useState('Statistik')

  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-center w-full">
      <section className="w-full lg:w-4/6 bg-red-250 flex flex-col gap-8">
        <StockChart data={BBCA.stockChart} />
        <div className="rounded-2xl w-full bg-white p-8 mb-16">
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
