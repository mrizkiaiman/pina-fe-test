import * as React from 'react'
import Image from 'next/image'

const MainMenu = [
  {
    name: 'Home',
    icon: <Image src="/icons/home.svg" alt="home-icon" width={24} height={24} />,
  },
  {
    name: 'Portfolio',
    icon: <Image src="/icons/portfolio.svg" alt="portfolio-icon" width={24} height={24} />,
  },
  {
    name: 'Order',
    icon: <Image src="/icons/order.svg" alt="order-icon" width={20} height={20} />,
  },
  {
    name: 'Search',
    icon: <Image src="/icons/search.svg" alt="search-icon" width={28} height={28} />,
  },
]

export const Sidebar = () => {
  return (
    <aside className="fixed py-10 bg-white w-32 h-screen flex flex-col justify-between items-center">
      <Image src="/pina-logo.svg" alt="pina-logo" width={18} height={38} />
      <div>
        {MainMenu.map((item, index) => (
          <div className="flex flex-col items-center justify-center my-8" key={item.name}>
            {item.icon}
            <p className="text-xs text-gray-350 mt-1">{item.name}</p>
          </div>
        ))}
        <div className="w-24 border-b border-gray-200" />
        <div className="flex flex-col items-center justify-center my-8">
          <Image src="/icons/profile.svg" alt="profile-icon" width={24} height={24} />
          <p className="text-xs text-gray-350 mt-1">Profile</p>
        </div>
      </div>
      <Image src="/icons/logout.svg" alt="logout-icon" width={24} height={24} />
    </aside>
  )
}

export default Sidebar
