'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ShowIf } from '~/components/logic/show-if'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { Button } from '~/components/ui/button'

const formSchema = z.object({
  name: z.string().min(1, { message: 'This form is required' }),
  status_id: z.string().min(1, { message: 'This form is required' }),
  location_id: z.string().min(1, { message: 'This form is required' })
})

export interface AssetFormProps {
  title?: string
  isEdit?: boolean
  fields?: {
    name?: string
    statusId?: string
    locationId?: string
  }
}
export function AssetForm({ title, isEdit = false, fields }: AssetFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: fields?.name || '',
      status_id: fields?.statusId || '',
      location_id: fields?.locationId || ''
    }
  })
  return (
    <div>
      <ShowIf condition={!!title}>
        <h1 className="mb-6 text-3xl font-semibold">{title}</h1>
      </ShowIf>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})} className="grid gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2">Asset Name</FormLabel>
                <Input placeholder="Input name" className="bg-primary-300 focus-visible:ring-primary-500" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2">Status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} name={field.name}>
                  <FormControl className="bg-primary-300 focus:ring-primary-500 focus-visible:ring-primary-500">
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="aaa">aaa</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2">Location</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} name={field.name}>
                  <FormControl className="bg-primary-300 focus:ring-primary-500 focus-visible:ring-primary-500">
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="aaa">aaa</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-6 flex justify-end gap-4">
            <ShowIf condition={isEdit}>
              <Button
                type="button"
                variant="outline"
                className="min-w-32 border-destructive text-destructive hover:text-destructive"
              >
                Delete
              </Button>
            </ShowIf>
            <Button type="submit" className="btn-gradient min-w-32">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
