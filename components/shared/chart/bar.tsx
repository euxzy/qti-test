'use client'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartData } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Card, CardContent, CardHeader } from '~/components/ui/card'
import { cn } from '~/lib/cn'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export interface BarChartProps {
  data: ChartData<'bar'>
  className?: string
}
export function BarChart({ className, data }: BarChartProps) {
  return (
    <Card className={cn('border-none shadow-none', className)}>
      <CardHeader>
        <h2 className="text-xl font-semibold">Chart</h2>
      </CardHeader>
      <CardContent>
        <Bar
          options={{
            responsive: true,
            bar: {
              datasets: {
                maxBarThickness: 1,
                barPercentage: 0.3
              }
            },
            plugins: {
              legend: { display: false }
            }
          }}
          data={data}
          height={100}
        />
      </CardContent>
    </Card>
  )
}
