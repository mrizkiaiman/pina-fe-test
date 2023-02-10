import * as React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import { defaults } from 'chart.js'
import Gradient from 'chartjs-plugin-gradient'

defaults.font.family = 'Gotham Rounded'
defaults.font.size = 12
defaults.font.lineHeight = 1.2
defaults.scale.ticks.padding = 20
defaults.color = '#9E9E9E'
// defaults.font.weight = 'bold'
// defaults.scale.grid.display = false
// defaults.scale.reverse = true

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)
export const options = {
  maintainAspectRatio: false,
  aspectRatio: 3,
  plugins: {
    legend: {
      display: false,
    },
  },
}

interface StockLineChartProps {
  labels: Array<string>
}

export const StockLineChart: React.FC<StockLineChartProps> = ({ labels }) => {
  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => faker.datatype.number({ min: 4000, max: 5000 })),
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 165)
          gradient.addColorStop(0, '#7BCC29')
          gradient.addColorStop(1, '#FFFFFF')
          return gradient
        },
        borderColor: '#7BCC29',
        fill: true,
      },
    ],
  }
  return (
    <div className="h-[16rem] w-full">
      <Line options={options} data={data} plugins={[Gradient]} />
    </div>
  )
}

export default StockLineChart
