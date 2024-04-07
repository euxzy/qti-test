import { cn } from '~/lib/cn'
import { Card, CardContent } from '../ui/card'
import { BarChart, BarChartProps } from './chart/bar'

export interface StatisticProps extends BarChartProps {
  chartStyle?: string
  statItems?: { name: string; count: number }[]
}
export function Statistic({ data, className, chartStyle, statItems = [] }: StatisticProps) {
  return (
    <div className={cn('flex gap-6', className)}>
      <BarChart data={data} className={cn('flex-1', chartStyle)} />
      <div className="grid gap-3">
        {statItems.map((item, idx) => (
          <Card key={idx} className="border-none shadow-none">
            <CardContent className="flex h-full min-w-40 flex-col justify-between p-3">
              <h3 className="max-w-16 font-semibold leading-none text-neutral-500">{item.name}</h3>
              <p className="text-xl font-semibold">{item.count}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
