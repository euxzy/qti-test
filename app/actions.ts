'use server'

import { redirect } from 'next/navigation'
import { HTTPClientResponseProps, httpClient } from '~/lib/http-client'
import { rmAuthToken, setRefreshToken } from '~/lib/use-auth'
import { UserState } from '~/stores/user-store'
import { AggAssetResponseProps } from '~/types/response'

export interface ProfileResponseProps extends Omit<HTTPClientResponseProps, 'data'> {
  data: {
    email?: string
    username?: string
    refreshed_token?: string
  }
}
export async function getProfile(): Promise<UserState> {
  const response: ProfileResponseProps | null = await httpClient({ url: '/auth/me' })

  /**
   * Set refresh token
   */
  if (response?.status === 200) {
    const data = response?.data
    setRefreshToken(data?.refreshed_token ?? '')
  } else {
    rmAuthToken()
    redirect('/auth/login')
  }

  return { email: response?.data?.email ?? '', username: response?.data?.username ?? '' }
}

export async function logout() {
  await httpClient({ url: '/auth/logout', method: 'POST' })

  rmAuthToken()
  return { logout: true }
}

export interface AggAssetProps {
  labels: string[]
  dataCount: number[]
  dataColors: string[]
  dataItems: { name: string; count: number }[]
}
export async function getAggAsset(type: 'status' | 'location'): Promise<AggAssetProps> {
  const response = await httpClient({ url: `/home/agg-asset-by-${type}/` })
  const statsData: AggAssetResponseProps[] = response?.data?.results
  const labels = statsData?.map(item => (type === 'status' ? item?.status?.name : item?.location?.name) ?? '')
  const dataCount = statsData?.map(item => item?.count ?? 0)

  const colors = ['rgba(0, 182, 172, 1)', 'rgba(255, 124, 69, 1)', 'rgba(255, 97, 105, 1)']
  const dataColors = statsData?.map((_, idx) => colors[idx % colors.length])

  const dataItems = statsData?.map(item => ({
    name: (type === 'status' ? item?.status?.name : item?.location?.name) ?? '',
    count: item?.count ?? 0
  }))

  return { labels, dataCount, dataColors, dataItems }
}
