'use server'

// import { redirect } from 'next/navigation'
import { HTTPClientResponseProps, httpClient } from '~/lib/http-client'
import { setAuthToken } from '~/lib/use-auth'
import { TODO } from '~/types/todo'

export interface AuthResponseProps extends Omit<HTTPClientResponseProps, 'data'> {
  data: {
    token?: string
    message?: string
    email?: string
    username?: string
  }
}
export async function onLogin(_prevState: TODO, reqBody: TODO): Promise<AuthResponseProps['data']> {
  const response: AuthResponseProps | null = await httpClient({
    url: '/auth/login',
    method: 'POST',
    withAuth: false,
    body: reqBody
  })

  /**
   * Set auth token
   */
  if (response?.status === 200 && response?.data) {
    const data = response.data
    setAuthToken(data.token ?? '')
  }

  return {
    message: response?.data?.message,
    username: response?.data.username,
    email: response?.data?.email
  }
}
