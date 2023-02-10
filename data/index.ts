import { numberFormatter } from '@app/utils/formatter/number'

export const user = {
  name: 'M. Rizki Aiman',
  portfolio: 130431449,
  buyingPower: 130431449,
  balance: {
    bbca: 1250000,
  },
}

export const BBCA = {
  code: 'BBCA',
  name: 'Bank Central Asia',
  stockChart: {
    code: 'BBCA',
    name: 'Bank Central Asia',
    categories: [
      {
        icon: '/icons/pages/search/categories/energi.svg',
        name: 'Energi',
      },
      {
        icon: '/icons/pages/search/categories/batu-bara.svg',
        name: 'Batu Bara',
      },
      {
        icon: '/icons/pages/search/categories/blue-chip.svg',
        name: 'Blue Chip',
      },
    ],
    currentValue: 7726.19,
    differentiation: 48.83,
    percentageDifference: 0.68,
    pricePerStock: 1000000,
    data: {
      '1D': {
        id: 'one-day',
        label: '1D',
        timeline: ['09.00', '11.00', '13.00', '15.00', '17.00'],
      },
      '1M': {
        id: 'one-month',
        label: '1M',
        timeline: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      },
      '6M': {
        id: 'six-month',
        label: '6M',
        timeline: ['Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
      },
      YTD: {
        id: 'year-to-date',
        label: 'YTD',
        timeline: ['Jan', 'Feb'],
      },
      '1Y': {
        id: 'one-year',
        label: '1Y',
        timeline: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
      },
      '5Y': {
        id: 'five-year',
        label: '5Y',
        timeline: ['2019', '2020', '2021', '2022', '2023'],
      },
      All: {
        id: 'all',
        label: 'All',
        timeline: ['2000', '2005', '2010', '2015', '2020', '2023'],
      },
    },
  },
  statistics: {
    marketCap: 86682,
    pe: 6.7,
    pbv: 1.51,
    dividendYield: 8.12,
    fiftyTwoWeeksHigh: 3270,
    fiftyTwoWeeksLow: 1160,
    fundamental: {
      cashEquivalent: 25859,
      totalAssets: 108326,
      totalLiabilitas: 44670,
      totalEquity: 59065,
    },
    earning: {
      earningPerShare: 416.7,
      bookValuePerShare: 1846.59,
    },
    profitabilitas: {
      grossProfitMargin: 56.2,
      operatingProfitMargin: 53.8,
      netProfitMargin: 36.1,
      roa: 12.3,
      roe: 22.6,
    },
  },
}

export const modal = {
  data: [
    {
      label: 'Stock',
      value: 'ADRO',
    },
    {
      label: 'Action',
      value: 'Buy',
      onClickValue: () => console.log('Buy!'),
    },
    {
      label: 'Harga',
      value: 156,
    },
    {
      label: 'Lot',
      value: 1,
    },
    {
      label: 'Biaya',
      value: numberFormatter(2500),
    },
  ],
  no_order: 'PI213123123DHEX',
  total: 158000,
}
