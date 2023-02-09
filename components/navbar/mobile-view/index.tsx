import * as React from 'react'
import Image from 'next/image'

import { user } from '@app/data'
import { numberFormatter } from '@app/utils/formatter/number'

export const NavbarMobileView = () => {
  const userPortfolio = React.useMemo(() => numberFormatter(user.portfolio), [user.portfolio])
  const userBuyingPower = React.useMemo(() => numberFormatter(user.buyingPower), [user.buyingPower])

  return (
    <div>
      <div className="relative flex items-center">
        <input className="text-sm py-2 rounded-lg w-32 bg-gray-150 px-4" placeholder="Ketik nama atau simbol saham" />
        <Image className="absolute right-2" src="/icons/search.svg" width={24} height={24} alt="search-icon" />
      </div>
    </div>
  )
}

export default NavbarMobileView
