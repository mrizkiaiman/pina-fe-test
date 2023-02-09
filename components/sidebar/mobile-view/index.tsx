import * as React from 'react'
import { useRouter } from 'next/router'

import * as Icons from '@components/sidebar/icons'
const { Home, Portfolio, Order, Profile, Search } = Icons

export const SidebarMobileView = () => {
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
    {
      name: 'Profile',
      icon: <Profile isSelected={router?.asPath.includes('/profile') ? true : false} />,
      path: '/profile',
    },
  ]

  return (
    <div className="flex z-20 items-center justify-center w-full bg-white py-4 fixed bottom-0 md:hidden border border-t-gray-150">
      {MainMenu.map((item, index) => (
        <button onClick={() => router.push(item.path)} className={`w-full flex flex-col items-center justify-center`} key={item.name}>
          {item.icon}
          <p className={`text-xs mt-1 ${router.asPath.includes(item.path) ? 'text-teal-350' : 'text-gray-350'}`}>{item.name}</p>
        </button>
      ))}
    </div>
  )
}

export default SidebarMobileView
