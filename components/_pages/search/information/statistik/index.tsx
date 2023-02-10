import * as React from 'react'
import { numberFormatter } from '@app/utils/formatter/number'

import { SubSection } from '@components/sub-section'
import { SectionPointHorizontal } from '@components/section-point-horizontal'

export interface StatistikSectionProps {
  data: {
    marketCap: number
    pe: number
    pbv: number
    dividendYield: number
    fiftyTwoWeeksHigh: number
    fiftyTwoWeeksLow: number
    fundamental: {
      cashEquivalent: number
      totalAssets: number
      totalLiabilitas: number
      totalEquity: number
    }
    earning: {
      earningPerShare: number
      bookValuePerShare: number
    }
    profitabilitas: {
      grossProfitMargin: number
      operatingProfitMargin: number
      netProfitMargin: number
      roa: number
      roe: number
    }
  }
}

export const StatistikSection: React.FC<StatistikSectionProps> = ({
  data: { marketCap, pe, pbv, dividendYield, fiftyTwoWeeksHigh, fiftyTwoWeeksLow, fundamental, earning, profitabilitas },
}) => {
  //Main
  const formattedMarketCap = React.useMemo(() => numberFormatter(marketCap, 'billion'), [marketCap])
  const formattedFiftyTwoWeeksHigh = React.useMemo(() => numberFormatter(fiftyTwoWeeksHigh), [fiftyTwoWeeksHigh])
  const formattedFiftyTwoWeeksLow = React.useMemo(() => numberFormatter(fiftyTwoWeeksLow), [fiftyTwoWeeksLow])
  //Fundamental
  const formattedCashEquivalent = React.useMemo(() => numberFormatter(fundamental.cashEquivalent, 'billion'), [fundamental.cashEquivalent])
  const formattedTotalAssets = React.useMemo(() => numberFormatter(fundamental.totalAssets, 'billion'), [fundamental.totalAssets])
  const formattedTotalLiabilitas = React.useMemo(
    () => numberFormatter(fundamental.totalLiabilitas, 'billion'),
    [fundamental.totalLiabilitas],
  )
  const formattedTotalEquity = React.useMemo(() => numberFormatter(fundamental.totalEquity, 'billion'), [fundamental.totalEquity])

  const mainSection = [
    {
      label: 'Market Cap',
      value: formattedMarketCap,
    },
    {
      label: 'P/E Annualized',
      value: pe,
    },
    {
      label: 'PBV',
      value: `${pbv}%`,
    },
    {
      label: 'Dividend Yield',
      value: dividendYield,
    },
    {
      label: '52W High',
      value: formattedFiftyTwoWeeksHigh,
    },
    {
      label: '52W Low',
      value: formattedFiftyTwoWeeksLow,
    },
  ]

  const fundamentalSection = [
    {
      label: 'Cash Equivalent',
      value: formattedCashEquivalent,
    },
    {
      label: 'Total Assets',
      value: formattedTotalAssets,
    },
    {
      label: 'Total Liabilitas',
      value: formattedTotalLiabilitas,
    },
    {
      label: 'Total Equity',
      value: formattedTotalEquity,
    },
  ]

  const earningSection = [
    {
      label: 'Earning Per Share (Annualized)',
      value: earning.earningPerShare,
    },
    {
      label: 'Book Value Per Share',
      value: earning.bookValuePerShare,
    },
  ]

  const profitabilitasSection = [
    {
      label: 'Gross Profit Margin',
      value: `${profitabilitas.grossProfitMargin}%`,
    },
    {
      label: 'Operating Profit Margin',
      value: `${profitabilitas.operatingProfitMargin}%`,
    },
    {
      label: 'Net Profit Margin',
      value: `${profitabilitas.netProfitMargin}%`,
    },
    {
      label: 'ROA',
      value: `${profitabilitas.roa}%`,
    },
    {
      label: 'ROE',
      value: `${profitabilitas.roe}%`,
    },
  ]

  return (
    <div className="mt-8 flex flex-col lg:flex-row justify-between gap-8">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-4">
          {mainSection.map((item, index) => (
            <SectionPointHorizontal label={item.label} value={item.value} key={item.label} />
          ))}
        </div>
        <SubSection className="mt-8" title="Fundamental" data={fundamentalSection} />
      </div>
      <div className="w-full lg:w-1/2">
        <SubSection className="-mt-1" title="Earning" data={earningSection} />
        <SubSection className="mt-8" title="Profitabilitas" data={profitabilitasSection} />
      </div>
    </div>
  )
}

export default React.memo(StatistikSection)
