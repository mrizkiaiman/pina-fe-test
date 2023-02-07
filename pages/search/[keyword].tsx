import * as React from 'react'
import { BBCA } from '@app/data'

import Image from 'next/image'

export const Search = () => {
  return (
    <div className="flex gap-8 justify-center w-full">
      <section className="w-4/6 bg-red-250 flex flex-col gap-8">
        <div className="rounded-lg w-full bg-white p-5">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center">
              <Image src="/pictures/BBCA.webp" alt="bbca-icon" width={40} height={40} />
              <div className="ml-6">
                <p className="font-bold">{BBCA.code}</p>
                <p className="text-sm text-gray-350">{BBCA.name}</p>
              </div>
            </div>
            <div>
              <p className="font-bold text-right">{BBCA.currentValue}</p>
              <p className={`${BBCA.differentiation > 0 ? 'text-green-250' : 'text-red-400'} text-sm`}>
                {BBCA.differentiation > 0
                  ? `+${BBCA.differentiation}(+${BBCA.percentageDifference})`
                  : `-${BBCA.differentiation}(-${BBCA.percentageDifference})`}{' '}
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            {BBCA.categories.map((item, index) => (
              <div key={item.name} className="flex gap-2 items-center p-2 rounded-3xl border border-gray-100">
                <Image src={item.icon} width={24} height={24} alt={`${item.name}-icon`} />
                <p className="font-bold text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg w-full bg-green-700 h-32"></div>
      </section>
      <section className="w-2/6">
        <div className="rounded-lg w-full h-32 bg-zinc-600"></div>
      </section>
    </div>
  )
}

export default Search
