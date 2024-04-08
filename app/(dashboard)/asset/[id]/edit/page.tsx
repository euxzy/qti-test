import { getDetailAsset, getLocations, getStatuses } from '~/app/actions'
import { EditAssetClient } from './client'

export default async function EditAsset({ params }: { params: { id: string } }) {
  const detailAsset = await getDetailAsset(params.id ?? '')
  const statuses = await getStatuses()
  const locations = await getLocations()

  return (
    <section className="pe-6">
      <EditAssetClient assetId={params.id} statuses={statuses} locations={locations} fields={{ ...detailAsset }} />
    </section>
  )
}
