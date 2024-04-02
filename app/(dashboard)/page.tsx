import { ChartData } from 'chart.js'
import { Statistic } from '~/components/shared/statistic'

export default function Home() {
  const labels = ['Sold', 'Stock', 'Expired']
  const data: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: 'Status',
        data: [10, 20, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }

  return (
    <section className="pe-6">
      <div className="mb-6">
        <h1 className="mb-6 text-3xl font-semibold">Status</h1>
        <Statistic data={data} />
      </div>
      <div>
        <h1 className="mb-6 text-3xl font-semibold">Location</h1>
        <Statistic data={data} />
      </div>
    </section>
  )
}
