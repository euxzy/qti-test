'use client'

import { LoginForm } from '~/components/shared/form/login'
import { onLogin } from './actions'
import { useFormState } from 'react-dom'
import { useToast } from '~/components/ui/use-toast'
import { useEffect } from 'react'

export function LoginClient() {
  const [state, formState] = useFormState(onLogin, {
    message: ''
  })

  const { toast } = useToast()

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
    if (state?.message) showToast()
  }, [state, toast])

  return <LoginForm action={formState} />
}
