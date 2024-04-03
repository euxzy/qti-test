'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '~/components/ui/button'
import { Form, FormField, FormItem, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/cn'

const formSchema = z.object({
  email: z.string().min(1, { message: 'This form is required' }).email({ message: 'Invalid email!' }),
  password: z.string().min(1, { message: 'This form is required' }).min(6)
})

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' }
  })

  const [passVisible, setPassVisible] = useState(false)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="w-full md:max-w-screen-sm">
        <div className="mb-12 grid gap-4 md:mb-28">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <Input placeholder="Email" className="bg-primary-300 ps-9 focus-visible:ring-primary-500" {...field} />
                <span
                  className={cn(
                    'icon-[material-symbols--mail-outline-rounded]',
                    'absolute inset-y-0 left-3 my-auto text-lg text-neutral-500'
                  )}
                ></span>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <Input
                  type={passVisible ? 'text' : 'password'}
                  placeholder="Email"
                  className="bg-primary-300 ps-9 focus-visible:ring-primary-500"
                  {...field}
                />
                <span
                  className={cn(
                    'icon-[material-symbols--lock-outline]',
                    'absolute inset-y-0 left-3 my-auto text-lg text-neutral-500'
                  )}
                ></span>
                <span
                  className={cn(
                    passVisible
                      ? 'icon-[material-symbols--visibility-rounded]'
                      : 'icon-[material-symbols--visibility-off-rounded]',
                    'absolute inset-y-0 right-3 my-auto cursor-pointer text-lg text-neutral-500'
                  )}
                  onClick={() => setPassVisible(val => !val)}
                ></span>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="btn-gradient w-full">
          Login
        </Button>
      </form>
    </Form>
  )
}
