'use server'

import { redirect } from 'next/navigation'
import { HTTPClientResponseProps, httpClient } from '~/lib/http-client'
import { setAuthTOken } from '~/lib/use-auth'
import { TODO } from '~/types/todo'

export interface AuthResponseProps extends Omit<HTTPClientResponseProps, 'data'> {
  data: {
    token?: string
    message?: string
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
   * Redirect to home if login success
   */
  if (response?.status === 200 && response?.data) {
    setAuthTOken(response.data.token as string)
    redirect('/')
  }

  return {
    message: response?.data?.message
  }
}
