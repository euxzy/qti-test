'use client'

import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'
import { AssetForm, AssetFormProps } from '~/components/shared/form/asset'
import { onCreateAsset } from './action'
import { useToast } from '~/components/ui/use-toast'
import { ModalInfo } from '~/components/shared/modal/info'

export interface CreateNewAssetProps {
  statuses?: AssetFormProps['statuses']
  locations?: AssetFormProps['locations']
}
export function CreateNewAsset({ statuses, locations }: CreateNewAssetProps) {
  const [formState, formAction] = useFormState(onCreateAsset, { id: '', name: '', status: 0 })
  const [modalOpen, setModalOpen] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const showToast = () => {
      if (formState.status === 200 || formState.status === 201) {
        setModalOpen(_ => true)
        toast({ title: 'Created!', description: 'Asset created successfully!' })

        setTimeout(() => {
          router.push('/asset')
        }, 1000)
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
    <>
      <AssetForm action={formAction} title="Fill this form bellow" statuses={statuses} locations={locations} />
      <ModalInfo isOpen={modalOpen} desc="Data has been submitted!" onClose={() => setModalOpen(_ => false)} />
    </>
  )
}
