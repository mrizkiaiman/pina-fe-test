import { HOME_PAGE_HEAD } from '@app/constants/head'

import { PinaHead } from '@components/head/'

export const Home = () => {
  return (
    <>
      <PinaHead title={HOME_PAGE_HEAD.title} description={HOME_PAGE_HEAD.description} keywords={HOME_PAGE_HEAD.keywords} />
      <div className="w-full h-screen p-8 pt-24 lg:pt-0 ">
        <div className="p-8 py-32 bg-white shadow-lg rounded-2xl">
          <p className="font-bold text-6xl text-center">Coming soon!</p>
        </div>
      </div>
    </>
  )
}

export default Home
