'use client'

import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'
import { AssetForm, AssetFormProps } from '~/components/shared/form/asset'
import { onEditAsset } from './action'
import { useToast } from '~/components/ui/use-toast'

export function EditAssetClient({ assetId, fields, locations, statuses }: { assetId: string } & AssetFormProps) {
  const [formState, formAction] = useFormState(onEditAsset, { id: '', name: '', status: 0 })
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const showToast = () => {
      if (formState.status === 200 || formState.status === 201) {
        toast({
          title: 'Success!',
          description: 'Edit asset successfully!'
        })

        setTimeout(() => {
          router.push('/asset')
        }, 400)
        return
      }

      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.'
      })
    }

    if (formState.status !== 0) showToast()
  }, [formState, router, toast])

  return (
    <AssetForm
      action={val => {
        val.assetId = assetId
        formAction(val)
      }}
      title="Edit this form bellow"
      isEdit
      statuses={statuses}
      locations={locations}
      fields={{ ...fields }}
    />
  )
}
