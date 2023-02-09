import * as React from 'react'
import Image from 'next/image'

import { user } from '@app/data'
import { numberFormatter } from '@app/utils/formatter/number'

export const Navbar = () => {
  const userPortfolio = React.useMemo(() => numberFormatter(user.portfolio), [user.portfolio])
  const userBuyingPower = React.useMemo(() => numberFormatter(user.buyingPower), [user.buyingPower])

  return (
    <nav className="hidden pl-48 z-10 h-20 fixed bg-white w-screen lg:flex justify-between items-center px-16">
      <div className="flex gap-6">
        <div className="relative flex items-center">
          <input className="text-sm py-2 rounded-lg w-96 bg-gray-150 px-4" placeholder="Ketik nama atau simbol saham" />
          <Image className="absolute right-2" src="/icons/search.svg" width={24} height={24} alt="search-icon" />
        </div>
        <div>
          <p className="text-gray-350 text-sm">Portfolio</p>
          <p className="font-bold">{userPortfolio}</p>
        </div>
        <div className="ml-24">
          <p className="text-gray-350 text-sm">Buying Power</p>
          <p className="font-bold">{userBuyingPower}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <Image src="/icons/mail.svg" width={36} height={36} alt="message-icon" />
        <Image src="/user.webp" width={40} height={40} alt="user-photo" />
      </div>
    </nav>
  )
}

export default Navbar
