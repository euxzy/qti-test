export interface AggAssetItemProps {
  id: string
  name: string
}
export interface AggAssetResponseProps {
  count: number
  status?: AggAssetItemProps
  location?: AggAssetItemProps
}
