import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import { defaults } from 'chart.js'

defaults.font.weight = 'bold'
defaults.font.family = 'Gotham Rounded'
defaults.font.size = 12
defaults.font.lineHeight = 1.2
defaults.scale.grid.display = false
defaults.scale.ticks.padding = 20

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  maintainAspectRatio: true,
  responsive: true,
  aspectRatio: 4,
  plugins: {
    legend: {
      display: false,
    },
  },
}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5000 })),
      borderColor: '#7BCC29',
      backgroundColor: '#7BCC29',
      fill: true,
    },
  ],
}

export function StockLineChart() {
  return <Line options={options} data={data} />
}

export default StockLineChart
