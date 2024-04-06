import { cookies } from 'next/headers'

/**
 * If you want to get auth token from cookies (only works on server action and middleware)
 * @returns { string } will return auth token or null
 */
export const getAuthToken = (): string | null => cookies().get('_at__')?.value ?? null

/**
 * If you want to remove auth token from cookies (only works on server action and middleware)
 */
export const rmAuthToken = () => cookies().delete('_at__')

/**
 * Function for set auth token to cookies (only works on server action and middleware)
 * @param { string } token - Token from response API
 */
export const setAuthToken = (token: string): void => {
  cookies().set({ name: '_at__', value: token, path: '/' })
}

/**
 * If you want to get refresh token from cookies
 * @returns { string } will return refresh token or null
 */
export const getRefreshToken = (): string | null => cookies().get('_rt__')?.value ?? null

/**
 * If you want to remove refresh token from cookies
 */
export const rmRefreshToken = () => cookies().delete('_rt__')

/**
 * Function for set refresh token to cookies
 * @param { string } token - Token from response API
 */
export const setRefreshToken = (token: string): void => {
  cookies().set({ name: '_rt__', value: token, path: '/' })
}
