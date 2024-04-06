'use server'

import { HTTPClientResponseProps, httpClient } from '~/lib/http-client'
import { setRefreshToken } from '~/lib/use-auth'
import { UserState } from '~/stores/user-store'

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
  }

  return { email: response?.data?.email ?? '', username: response?.data?.username ?? '' }
}
