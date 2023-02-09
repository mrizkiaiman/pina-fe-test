import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Home, Portfolio, Order, Search, Profile } from '@components/sidebar/icons'

export const Sidebar = () => {
  const router = useRouter()

  const MainMenu = [
    {
      name: 'Home',
      icon: <Home isSelected={router?.asPath.includes('/home') ? true : false} />,
      path: '/home',
    },
    {
      name: 'Portfolio',
      icon: <Portfolio isSelected={router?.asPath.includes('/portfolio') ? true : false} />,
      path: '/portfolio',
    },
    {
      name: 'Order',
      icon: <Order isSelected={router?.asPath.includes('/order') ? true : false} />,
      path: '/order',
    },
    {
      name: 'Search',
      icon: <Search isSelected={router?.asPath.includes('/search') ? true : false} />,
      path: '/search/bbca',
    },
  ]

  return (
    <aside className="hidden lg:flex fixed py-10 z-20 bg-white w-32 h-screen flex-col justify-between items-center">
      <Image src="/pina.svg" alt="pina-logo" width={18} height={38} />
      <div>
        {MainMenu.map((item, index) => (
          <button
            onClick={() => router.push(item.path)}
            className={`py-2 w-full flex flex-col items-center justify-center my-8`}
            key={item.name}>
            {item.icon}
            <p className={`text-xs mt-1 ${router.asPath.includes(item.path) ? 'text-teal-350' : 'text-gray-350'}`}>{item.name}</p>
          </button>
        ))}
        <div className="w-24 border-b border-gray-200" />
        <button onClick={() => router.push('/profile')} className={`w-full flex flex-col items-center justify-center my-8 py-2`}>
          <Profile isSelected={router?.asPath.includes('/profile') ? true : false} />
          <p className={`text-xs mt-1 ${router.asPath.includes('/profile') ? 'text-teal-350' : 'text-gray-350'}`}>Profile</p>
        </button>
      </div>
      <Image src="/icons/logout.svg" alt="logout-icon" width={24} height={24} />
    </aside>
  )
}

export default Sidebar
