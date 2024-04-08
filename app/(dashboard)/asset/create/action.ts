'use server'

import { HTTPClientResponseProps, httpClient } from '~/lib/http-client'
import { TODO } from '~/types/todo'

export interface CreateAssetResponseProps extends Omit<HTTPClientResponseProps, 'data'> {
  data: {
    id: string
    name: string
    status: number
  }
}
export async function onCreateAsset(_prevState: TODO, reqBody: TODO): Promise<CreateAssetResponseProps['data']> {
  const response = await httpClient({ url: '/asset/', method: 'POST', body: reqBody })

  return {
    id: response?.data?.id ?? '',
    name: response?.data?.name ?? '',
    status: response?.status ?? 400
  }
}
