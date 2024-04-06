'use client'

import { LoginForm } from '~/components/shared/form/login'
import { onLogin } from './actions'
import { useFormState } from 'react-dom'
import { useToast } from '~/components/ui/use-toast'
import { useEffect } from 'react'
import { useUserStore } from '~/providers/user-store-privder'
import { useRouter } from 'next/navigation'

export function LoginClient() {
  const [state, formState] = useFormState(onLogin, {})
  const { setUser } = useUserStore(state => state)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const showToast = () => {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: state?.message ?? 'There was a problem with your request.'
      })
    }

    /**
     * Show toast if login failed
     */
    if (state?.message && !state.email) showToast()

    /**
     * Store username and email user to state and redirect to home
     */
    if (state.email && state.username) {
      setUser({ email: state.email, username: state.username })
      router.push('/')
    }
  }, [router, setUser, state, toast])

  return <LoginForm action={formState} />
}
