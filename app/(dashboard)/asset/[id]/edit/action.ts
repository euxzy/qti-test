'use server'

import { TODO } from '~/types/todo'
import { CreateAssetResponseProps } from '../../create/action'
import { httpClient } from '~/lib/http-client'

export interface EditAssetResponseProps extends CreateAssetResponseProps {}
export async function onEditAsset(_prevState: TODO, reqBody: TODO): Promise<EditAssetResponseProps['data']> {
  const body = { ...reqBody }
  if (body?.assetId) delete body['assetId']
  const response = await httpClient({ url: `/asset/${reqBody?.assetId}`, method: 'PUT', body })

  return {
    id: response?.data?.id ?? '',
    name: response?.data?.name ?? '',
    status: response?.status ?? 400
  }
}
