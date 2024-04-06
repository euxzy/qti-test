'use client'

import { useEffect } from 'react'
import { useUserStore } from '~/providers/user-store-privder'
import { getProfile } from './actions'

export function Profile() {
  const { email, username, setUser } = useUserStore(state => state)

  useEffect(() => {
    const profile = async () => {
      const profile = await getProfile()
      setUser({ email: profile.email, username: profile.username })
    }

    if (!email || !username) profile()
  }, [email, setUser, username])

  return null
}
