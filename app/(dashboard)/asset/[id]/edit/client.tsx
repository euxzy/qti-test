'use client'

import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'
import { AssetForm, AssetFormProps } from '~/components/shared/form/asset'
import { onDeleteAsset, onEditAsset } from './action'
import { useToast } from '~/components/ui/use-toast'
import { ModalConfirm } from '~/components/shared/modal/confirm'
import { ModalInfo } from '~/components/shared/modal/info'

export function EditAssetClient({ assetId, fields, locations, statuses }: { assetId: string } & AssetFormProps) {
  const [formState, formAction] = useFormState(onEditAsset, { id: '', name: '', status: 0 })
  const [deleteState, deleteAction] = useFormState(onDeleteAsset, { status: 0 })

  const { toast } = useToast()
  const router = useRouter()
  const [modal, setModal] = useState({ confirm: false, info: false, infoDesc: '' })

  useEffect(() => {
    const showToast = () => {
      if (formState.status === 200 || formState.status === 201) {
        setModal(prevVal => ({ ...prevVal, infoDesc: 'Data has been Updated!', info: true }))
        toast({ title: 'Success!', description: 'Edit asset successfully!' })

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

  useEffect(() => {
    const showToast = () => {
      if (deleteState.status === 200 || deleteState.status === 204) {
        setModal(prevVal => ({ ...prevVal, infoDesc: 'Data has been Deleted!', info: true }))
        toast({ title: 'Success!', description: 'Data has been Deleted!' })

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

    if (deleteState.status !== 0) showToast()
  }, [deleteState, router, toast])

  return (
    <>
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
        onDelete={() => setModal(prevVal => ({ ...prevVal, confirm: true }))}
      />

      <ModalConfirm
        desc="Your action will cause this data permanently deleted."
        approveText="Delete"
        isOpen={modal.confirm}
        onCancel={() => setModal(prevVal => ({ ...prevVal, confirm: false }))}
        onApprove={() => deleteAction({ assetId })}
      />
      <ModalInfo
        isOpen={modal.info}
        desc={modal.infoDesc}
        onClose={() => setModal(prevVal => ({ ...prevVal, info: false }))}
      />
    </>
  )
}
