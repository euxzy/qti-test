import { cn } from '~/lib/cn'
import { Card, CardContent } from '../ui/card'
import { BarChart, BarChartProps } from './chart/bar'

export interface StatisticProps extends BarChartProps {
  chartStyle?: string
}
export function Statistic({ data, className, chartStyle }: StatisticProps) {
  return (
    <div className={cn('flex gap-6', className)}>
      <BarChart data={data} className={cn('flex-1', chartStyle)} />
      <div className="grid gap-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Card key={idx} className="border-none shadow-none">
            <CardContent className="flex h-full min-w-40 flex-col justify-between p-3">
              <h3 className="max-w-16 font-semibold leading-none text-neutral-500">Asset Sold</h3>
              <p className="text-xl font-semibold">35</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
