import * as React from 'react'

import Image from 'next/image'
import { SectionPointHorizontal } from '@app/components/section-point-horizontal'
import { numberFormatter } from '@app/utils/formatter/number'

export interface BuySellSectionProps {
  userBalance: string
}

export const BuySellSection: React.FC<BuySellSectionProps> = ({ userBalance }) => {
  const [selectedTab, setSelectedTab] = React.useState<'beli' | 'jual'>('beli')
  const defaultTabStyle = 'cursor-pointer w-1/2 flex items-center justify-center border-b-gray-100 border-b-[1px]'
  const selectedTabStyle = 'cursor-pointer w-1/2 flex items-center justify-center border-b-2 border-orange-350 active'

  const [jumlahLot, setJumlahLot] = React.useState(1)
  const formattedPricePerStock = React.useMemo(() => `IDR ${numberFormatter(jumlahLot * 1000000)}`, [jumlahLot])

  const decreaseJumlahLot = () => {
    if (jumlahLot > 1) setJumlahLot(jumlahLot - 1)
  }
  const increaseJumlahLot = () => {
    setJumlahLot(jumlahLot + 1)
  }

  return (
    <>
      <ul className="flex flex-wrap items-center justify-between w-full px-1 bg-white rounded-t-2xl">
        <li onClick={() => setSelectedTab('beli')} className={`${selectedTab === 'beli' ? selectedTabStyle : defaultTabStyle}`}>
          <p className={`p-4 ${selectedTab === 'beli' ? 'text-orange-350' : 'text-gray-350'}`}>Beli</p>
        </li>
        <li onClick={() => setSelectedTab('jual')} className={`${selectedTab === 'jual' ? selectedTabStyle : defaultTabStyle}`}>
          <p className={`p-4 ${selectedTab === 'jual' ? 'text-orange-350' : 'text-gray-350'}`} aria-current="page">
            Jual
          </p>
        </li>
      </ul>
      <div className="p-5 bg-white w-full rounded-b-2xl">
        {selectedTab === 'beli' ? (
          <>
            <div>
              <p className="text-xs mb-2 text-gray-350">Dana yang tersedia</p>
              <p className="font-bold mb-4">IDR {userBalance}</p>
              <p className="text-xs text-gray-350 mb-2">Jumlah Lot</p>
              <div className="relative flex justify-center items-center">
                <button onClick={decreaseJumlahLot} className="absolute left-11">
                  <Image src="/icons/pages/search/minus.svg" width={24} height={24} alt="minus-icon" />
                </button>
                <input
                  className="border border-gray-100 text-sm h-12 rounded-lg w-80 bg-white-150 text-center px-4"
                  placeholder="Ketik nama atau simbol saham"
                  value={jumlahLot}
                  onChange={e => setJumlahLot(Number(e.target.value))}
                />
                <button onClick={increaseJumlahLot} className="absolute right-11">
                  <Image src="/icons/pages/search/plus.svg" width={24} height={24} alt="plus-icon" />
                </button>
              </div>
              <p className="text-xs text-gray-350 mt-4 mb-2">Harga Per Saham</p>
              <div className="relative flex justify-center items-center mb-8">
                {/* <Image className="absolute left-11" src="/icons/pages/search/minus.svg" width={24} height={24} alt="minus-icon" /> */}
                <input
                  className="font-bold border border-gray-100 text-sm h-12 rounded-lg w-80 bg-white-150 text-center px-4"
                  placeholder="Ketik nama atau simbol saham"
                  value={formattedPricePerStock}
                  disabled
                />
                {/* <Image className="absolute right-11" src="/icons/pages/search/plus.svg" width={24} height={24} alt="plus-icon" /> */}
              </div>
            </div>
            <div className="border-b-[1px] w-full border-gray-100 my-2" />
            <SectionPointHorizontal label="Total Pembelian" value="158.000" />
            <div className="border-b-[1px] w-full border-gray-100 my-2" />
            <button className="bg-yellow-650 rounded-lg flex items-center justify-center h-12 w-full mt-4">
              <p className="font-bold">Beli</p>
            </button>
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <p className="font-bold">Coming soon!</p>
          </div>
        )}
      </div>
    </>
  )
}

export default BuySellSection
