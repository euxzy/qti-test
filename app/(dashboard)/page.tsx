import { ChartData } from 'chart.js'
import { Statistic } from '~/components/shared/statistic'
import { getAggAsset } from '../actions'

export default async function Home() {
  const {
    labels: statusLabels,
    dataCount: statusDataCount,
    dataColors: statusColors,
    dataItems: statusItems
  } = await getAggAsset('status')
  const {
    labels: locationLabels,
    dataCount: locationDataCount,
    dataColors: locationColors,
    dataItems: locationItems
  } = await getAggAsset('location')

  const statusData: ChartData<'bar'> = {
    labels: statusLabels,
    datasets: [{ label: 'Status', data: statusDataCount, backgroundColor: statusColors }]
  }
  const locationData: ChartData<'bar'> = {
    labels: locationLabels,
    datasets: [{ label: 'Location', data: locationDataCount, backgroundColor: locationColors }]
  }

  return (
    <section className="pb-28 pe-6">
      <div className="mb-6">
        <h1 className="mb-6 text-3xl font-semibold">Status</h1>
        <Statistic data={statusData} statItems={statusItems} />
      </div>
      <div>
        <h1 className="mb-6 text-3xl font-semibold">Location</h1>
        <Statistic data={locationData} statItems={locationItems} />
      </div>
    </section>
  )
}
