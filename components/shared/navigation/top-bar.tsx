'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Button } from '~/components/ui/button'
import { BUTTON_ACTION } from '~/constants/layouts/top-bar'
import { ShowIf } from '~/components/logic/show-if'
import { cn } from '~/lib/cn'
import ProfileImg from '~/assets/images/avatar-circle.png'

export function TopBar() {
  const currentPath = usePathname()
  const action = BUTTON_ACTION.find(item => item.path === currentPath)

  return (
    <header className="py-8 pe-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12">
            <Image src={ProfileImg} alt="Profile" fill className="!static w-full" />
          </div>
          <div className="flex items-center gap-2">
            <div className="font-medium">
              <h3>Dindin Mahfud</h3>
              <p className="text-sm text-neutral-400">dindinmahfud@goods.com</p>
            </div>
            <div>
              <span className="icon-[material-symbols--keyboard-arrow-down-rounded] text-xl"></span>
            </div>
          </div>
        </div>

        <ShowIf condition={!!action}>
          <Button asChild className="btn-gradient min-w-28 font-medium">
            <Link href={action?.actionPath as string}>
              <span className={cn('icon-[material-symbols--add]', 'mr-1 text-lg')}></span>
              <span>{action?.text}</span>
            </Link>
          </Button>
        </ShowIf>
      </div>
    </header>
  )
}
