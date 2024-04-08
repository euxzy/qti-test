import { cn } from '~/lib/cn'
import { Card, CardContent } from '../ui/card'
import { BarChart, BarChartProps } from './chart/bar'

export interface StatisticProps extends BarChartProps {
  chartStyle?: string
  statItems?: { name: string; count: number }[]
}
export function Statistic({ data, className, chartStyle, statItems = [] }: StatisticProps) {
  return (
    <div className={cn('flex flex-col gap-6 md:flex-row', className)}>
      <BarChart data={data} className={cn('order-2 flex-1 md:order-1', chartStyle)} />
      <div className="order-1 grid grid-cols-3 gap-3 md:order-2 md:grid-cols-1">
        {statItems.map((item, idx) => (
          <Card key={idx} className="border-none shadow-none">
            <CardContent className="flex h-full flex-col justify-between p-3 md:min-w-40">
              <h3 className="max-w-16 font-semibold leading-none text-neutral-500">{item.name}</h3>
              <p className="text-xl font-semibold">{item.count}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
