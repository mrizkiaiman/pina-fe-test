import * as React from 'react'
import { useModal } from '@app/utils/hooks/useModal'
import { numberFormatter } from '@app/utils/formatter/number'
import { modal } from '@app/data'

import Image from 'next/image'
import { Modal } from '@components/modal'
import { Button } from '@components/button'
import { SectionPointHorizontal } from '@components/section-point-horizontal'

export interface BuySellSectionProps {
  userBalance: string
  pricePerStock: number
}

export const BuySellSection: React.FC<BuySellSectionProps> = ({ userBalance, pricePerStock }) => {
  const { modalState, toggleModal } = useModal()

  const [selectedTab, setSelectedTab] = React.useState<'beli' | 'jual'>('beli')
  const defaultTabStyle = 'cursor-pointer w-1/2 flex items-center justify-center border-b-gray-100 border-b-[1px]'
  const selectedTabStyle = 'cursor-pointer w-1/2 flex items-center justify-center border-b-2 border-orange-350 active'

  const [jumlahLot, setJumlahLot] = React.useState(1)
  const formattedPricePerStock = React.useMemo(() => numberFormatter(jumlahLot * pricePerStock, 'IDR'), [jumlahLot, pricePerStock])

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
          <p className={`p-4 ${selectedTab === 'jual' ? 'text-orange-350' : 'text-gray-350'}`}>Jual</p>
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
                  <Image className="h-auto w-auto" src="/icons/pages/search/minus.svg" width={24} height={24} alt="minus-icon" />
                </button>
                <input
                  className="border border-gray-100 text-sm h-12 rounded-lg w-80 bg-white-150 text-center px-4"
                  placeholder="Ketik nama atau simbol saham"
                  value={jumlahLot}
                  maxLength={5}
                  onChange={e => {
                    const result = e.target.value.replace(/\D/g, '')
                    setJumlahLot(Number(result))
                  }}
                />
                <button onClick={increaseJumlahLot} className="absolute right-11">
                  <Image className="h-auto w-auto" src="/icons/pages/search/plus.svg" width={24} height={24} alt="plus-icon" />
                </button>
              </div>
              <p className="text-xs text-gray-350 mt-4 mb-2">Harga Per Saham</p>
              <div className="relative flex justify-center items-center mb-8">
                <input
                  className="font-bold border border-gray-100 text-sm h-12 rounded-lg w-80 bg-white-150 text-center px-4"
                  placeholder="Ketik nama atau simbol saham"
                  value={numberFormatter(pricePerStock, 'IDR')}
                  disabled
                />
              </div>
            </div>
            <div className="border-b-[1px] w-full border-gray-100 my-2" />
            <SectionPointHorizontal label="Total Pembelian" value={formattedPricePerStock} />
            <div className="border-b-[1px] w-full border-gray-100 my-2" />
            <Button onClick={toggleModal}>Beli</Button>
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <p className="font-bold">Coming soon!</p>
          </div>
        )}
      </div>
      <Modal title="Mohon cek kembali order kamu" modalState={modalState} toggleModal={toggleModal}>
        <p className="text-gray-350 text-xs text-center mt-1">No Order: {modal.no_order}</p>
        <div className="border border-b-gray-150 w-full my-3" />
        <div className="flex flex-col gap-4">
          {modal.data.map((item, index) => (
            <SectionPointHorizontal key={item.label} label={item.label} value={item.value} onClickValue={item.onClickValue} />
          ))}
        </div>
        <div className="border border-b-gray-150 w-full my-3" />
        <SectionPointHorizontal label="Total Amount" value={numberFormatter(modal.total, 'IDR')} />
        <div className="border border-b-gray-150 w-full my-3" />
        <Button onClick={toggleModal}>Konfirmasi</Button>
      </Modal>
    </>
  )
}

export default BuySellSection
