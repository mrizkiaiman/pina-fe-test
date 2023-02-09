import { PORTFOLIO_PAGE_HEAD } from '@app/constants/head'

import { PinaHead } from '@components/head'

export const Portfolio = () => {
  return (
    <>
      <PinaHead title={PORTFOLIO_PAGE_HEAD.title} keywords={PORTFOLIO_PAGE_HEAD.keywords} description={PORTFOLIO_PAGE_HEAD.description} />
      <div className="w-full h-screen p-8 pt-24 lg:pt-0 ">
        <div className="p-8 py-32 bg-white shadow-lg rounded-2xl">
          <p className="font-bold text-6xl text-center">Coming soon!</p>
        </div>
      </div>
    </>
  )
}

export default Portfolio
