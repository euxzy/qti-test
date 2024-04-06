'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Button } from '~/components/ui/button'
import { BUTTON_ACTION } from '~/constants/layouts/top-bar'
import { ShowIf } from '~/components/logic/show-if'
import { cn } from '~/lib/cn'
import ProfileImg from '~/assets/images/avatar-circle.png'
import { useUserStore } from '~/providers/user-store-privder'
import { Skeleton } from '~/components/ui/skeleton'

export function TopBar() {
  const currentPath = usePathname()
  const action = BUTTON_ACTION.find(item => item.path === currentPath)
  const { email, username } = useUserStore(state => state)

  return (
    <header className="py-8 pe-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12">
            <ShowIf condition={!!username && !!email}>
              <Image src={ProfileImg} alt="Profile" fill className="!static w-full" />
            </ShowIf>
            <ShowIf condition={!username || !email}>
              <Skeleton className="h-12 w-12 rounded-full" />
            </ShowIf>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-medium">
              <ShowIf condition={!!username && !!email}>
                <h3>{username}</h3>
                <p className="text-sm text-neutral-400">{email}</p>
              </ShowIf>
              <ShowIf condition={!username || !email}>
                <Skeleton className="mb-2 h-5 w-32" />
                <Skeleton className="h-3 w-24" />
              </ShowIf>
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
