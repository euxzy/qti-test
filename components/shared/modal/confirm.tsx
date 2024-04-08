import { ShowIf } from '~/components/logic/show-if'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '~/components/ui/dialog'

export interface ModalConfirmProps {
  isOpen: boolean
  onCancel: () => void
  onApprove: () => void
  title?: string
  desc?: string
  approveText?: string
}
export function ModalConfirm({
  isOpen,
  onCancel,
  onApprove,
  title = 'Confirmation',
  desc = '',
  approveText = 'Yes'
}: ModalConfirmProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onCancel} modal defaultOpen={isOpen}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl leading-snug">{title}</DialogTitle>
        </DialogHeader>
        <ShowIf condition={!!desc}>
          <DialogDescription className="mb-2 text-center text-lg font-normal">{desc}</DialogDescription>
        </ShowIf>
        <DialogFooter className="sm:justify-center">
          <Button
            type="button"
            variant="outline"
            className="border-destructive text-destructive hover:text-destructive"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="button" className="btn-gradient" onClick={onApprove}>
            {approveText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
