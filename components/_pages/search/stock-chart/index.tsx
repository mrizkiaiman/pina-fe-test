import * as React from 'react'
import Image from 'next/image'

import { StockLineChart } from '@app/components/_pages/search/stock-chart/chart'

export interface StockChartProps {
  data: {
    code: string
    name: string
    categories: Array<{
      icon: string
      name: string
    }>
    currentValue: number
    differentiation: number
    percentageDifference: number
    pricePerStock: number
    data: {
      '1D': {
        id: string
        label: string
        timeline: Array<string>
      }
      '1M': {
        id: string
        label: string
        timeline: Array<string>
      }
      '6M': {
        id: string
        label: string
        timeline: Array<string>
      }
      YTD: {
        id: string
        label: string
        timeline: Array<string>
      }
      '1Y': {
        id: string
        label: string
        timeline: Array<string>
      }
      '5Y': {
        id: string
        label: string
        timeline: Array<string>
      }
      All: {
        id: string
        label: string
        timeline: Array<string>
      }
    }
  }
}

type Timeline = '1D' | '1M' | '6M' | 'YTD' | '1Y' | '5Y' | 'All'

export const StockChart: React.FC<StockChartProps> = ({
  data: { categories, code, currentValue, data, differentiation, name, percentageDifference },
}) => {
  const [selectedTimeline, setSelectedTimeline] = React.useState<Timeline>('YTD')
  const timelineMenu = Object.keys(data) as Array<Timeline>

  return (
    <div className="rounded-2xl w-full bg-white p-8">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center">
          <Image className="pl-2" src="/pictures/BBCA.webp" alt="bbca-icon" width={40} height={40} />
          <div className="ml-6">
            <p className="font-bold">{code}</p>
            <p className="text-sm text-gray-350">{name}</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-right">{currentValue}</p>
          <p className={`${differentiation > 0 ? 'text-green-250' : 'text-red-400'} text-sm`}>
            {differentiation > 0 ? `+${differentiation}(+${percentageDifference})` : `-${differentiation}(-${percentageDifference})`}{' '}
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 mt-4">
        {categories.map((item, index) => (
          <div key={item.name} className="flex gap-2 items-center p-2 rounded-3xl border border-gray-100">
            <Image src={item.icon} width={24} height={24} alt={`${item.name}-icon`} />
            <p className="font-bold text-sm">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        {timelineMenu.map((item, index) => (
          <button
            onClick={() => setSelectedTimeline(item)}
            className={`${
              selectedTimeline === item ? 'bg-yellow-650' : 'bg-gray-150'
            }  flex items-center justify-center py-2 w-32 rounded-xl`}
            key={item}>
            <p className="text-xs lg:text-sm">{item}</p>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center pt-8 w-full">
        <StockLineChart labels={data[selectedTimeline].timeline} />
      </div>
    </div>
  )
}

export default StockChart
