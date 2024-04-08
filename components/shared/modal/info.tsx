import Image from 'next/image'
import { ShowIf } from '~/components/logic/show-if'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '~/components/ui/dialog'
import badgeImg from '~/assets/images/badge.png'

export interface ModalInfoProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  desc?: string
}
export function ModalInfo({ isOpen, onClose, title = 'Success!', desc = '' }: ModalInfoProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} modal defaultOpen={isOpen}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <div className="h-20">
            <Image src={badgeImg} fill className="!relative mx-auto mb-4 !h-full !w-auto" alt="" />
          </div>
          <DialogTitle className="text-center text-2xl leading-snug">{title}</DialogTitle>
        </DialogHeader>
        <ShowIf condition={!!desc}>
          <DialogDescription className="mb-2 text-center text-lg font-normal">{desc}</DialogDescription>
        </ShowIf>
      </DialogContent>
    </Dialog>
  )
}
