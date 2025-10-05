'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Pie } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

interface ChartCardProps {
  title: string
  type: 'bar' | 'pie'
  data: any
}

export default function ChartCard({ title, type, data }: ChartCardProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#F1F5F9',
        },
      },
      title: {
        display: false,
      },
    },
    scales: type === 'bar' ? {
      y: {
        ticks: {
          color: '#F1F5F9',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      x: {
        ticks: {
          color: '#F1F5F9',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    } : undefined,
  }

  return (
    <div className="glass p-6 rounded-3xl animate-slide-up">
      <h3 className="text-2xl font-bold text-white mb-6 font-poppins">{title}</h3>
      <div className="h-[300px]">
        {type === 'bar' ? (
          <Bar options={options} data={data} />
        ) : (
          <Pie options={options} data={data} />
        )}
      </div>
    </div>
  )
}
