'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Icon } from '~/components/shared/icons'
import { Button } from '~/components/ui/button'
import Logo from '~/assets/images/logo-horizontal-black.png'
import { usePathname } from 'next/navigation'
import { cn } from '~/lib/cn'

const routeItems: { icon: string; name: string; path: string }[] = [
  { icon: 'material-symbols:home-outline-rounded', name: 'Home', path: '/' },
  { icon: 'material-symbols:credit-card-outline', name: 'Asset', path: '/asset' }
]

export function Sidebar() {
  const currentPath = usePathname()

  return (
    <aside className="flex min-w-64 flex-col justify-between border-e px-8 py-12">
      <div>
        <div className="mb-16 grid place-items-center">
          <h2 className="mb-6 text-lg font-medium">TEST QTI</h2>
          <div className="relative h-10">
            <Image src={Logo} alt="Logo" fill className="!static w-full" />
          </div>
        </div>

        <ul className="grid space-y-4">
          {routeItems.map(item => (
            <li key={item.name}>
              <Button
                asChild
                variant={currentPath === item.path ? 'default' : 'ghost'}
                className={cn('w-full font-medium', currentPath !== item.path && 'text-neutral-500')}
              >
                <Link href={item.path}>
                  <Icon icon={item.icon} className="mr-2 text-xl" />
                  <span>{item.name}</span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <Button asChild variant="ghost" className="w-full font-medium">
        <Link href="#">
          <span>Logout</span>
          <Icon icon="material-symbols:logout-rounded" className="ms-2 text-lg" />
        </Link>
      </Button>
    </aside>
  )
}
