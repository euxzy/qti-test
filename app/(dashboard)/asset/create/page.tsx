import { getLocations, getStatuses } from '~/app/actions'
import { CreateNewAsset } from './client'

export default async function CreateAsset() {
  const statuses = await getStatuses()
  const locations = await getLocations()
  return (
    <section className="pe-6">
      <CreateNewAsset statuses={statuses} locations={locations} />
    </section>
  )
}
