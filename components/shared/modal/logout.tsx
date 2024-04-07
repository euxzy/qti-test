'use client'

import { logout } from '~/app/actions'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '~/components/ui/dialog'

interface ModalLogoutProps {
  isOpen: boolean
  onClose: () => void
}
export function ModalLogout({ isOpen, onClose }: ModalLogoutProps) {
  const onLogout = async () => {
    await logout()
    window.location.reload()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose} modal defaultOpen={isOpen}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl leading-snug">Logout</DialogTitle>
        </DialogHeader>
        <DialogDescription className="mb-2 text-center text-lg font-normal">
          When you want to use this app, you have to relogin, are you sure?
        </DialogDescription>
        <DialogFooter className="sm:justify-center">
          <Button
            type="button"
            variant="outline"
            className="border-destructive text-destructive hover:text-destructive"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button type="button" className="btn-gradient" onClick={onLogout}>
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
