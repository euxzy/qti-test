import { cookies } from 'next/headers'

/**
 * If you want to get auth token from cookies (only works on server action and middleware)
 * @returns { string } will return auth token or null
 */
export const getAuthToken = (): string | null => cookies().get('_at__')?.value ?? null

/**
 * If you want to remove auth token from cookies (only works on server action and middleware)
 */
export const rmAuthTOken = () => cookies().delete('_at__')

/**
 * Function for set auth token to cookies (only works on server action and middleware)
 * @param { string } token - Token from response API
 */
export const setAuthTOken = (token: string): void => {
  cookies().set({ name: '_at__', value: token, path: '/' })
}
