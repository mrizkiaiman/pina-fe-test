import * as React from 'react'
import { user } from '@app/data'
import { numberFormatter } from '@app/utils/formatter/number'

import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className="lg:pl-48 md:pl-24 z-10 h-20 fixed bg-white w-full flex lg:justify-between items-center px-4 lg:px-16">
      <div className="flex items-center justify-center w-3/4">
        <div className="relative flex items-center">
          <input
            maxLength={16}
            className="text-sm py-2 rounded-lg w-36 md:w-96 bg-gray-150 px-4"
            placeholder="Ketik nama atau simbol saham"
          />
          <Image className="hidden md:block absolute right-2" src="/icons/search.svg" width={24} height={24} alt="search-icon" />
        </div>
        <div className="ml-4">
          <p className="text-gray-350 lg:text-sm text-xs">Portfolio</p>
          <p className="font-bold text-sm lg:text-base">{numberFormatter(user.portfolio)}</p>
        </div>
        <div className="ml-2 lg:ml-24 hidden md:block">
          <p className="text-gray-350 lg:text-sm text-xs">Buying Power</p>
          <p className="font-bold text-sm lg:text-base">{numberFormatter(user.buyingPower)}</p>
        </div>
      </div>

      <div className="w-1/4 flex items-center justify-center gap-4 lg:gap-5 ml-4 lg:ml-0">
        <Image src="/icons/mail.svg" className="w-6 h-6 md:w-9 md:h-9" width={36} height={36} alt="message-icon" />
        <Image src="/user.webp" className="w-7 h-7 md:w-10 md:h-10" width={40} height={40} alt="user-photo" />
      </div>
    </nav>
  )
}

export default Navbar
