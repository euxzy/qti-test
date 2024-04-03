import { AssetForm, AssetFormProps } from '~/components/shared/form/asset'

export default function EditAsset() {
  const assetFormProps: AssetFormProps = {
    fields: {
      name: 'aaaa',
      statusId: 'aaa',
      locationId: 'aaa'
    }
  }
  return (
    <section className="pe-6">
      <AssetForm title="Edit this form bellow" isEdit {...assetFormProps} />
    </section>
  )
}
