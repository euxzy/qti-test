'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '~/components/ui/button'
import Logo from '~/assets/images/logo-horizontal-black.png'
import { cn } from '~/lib/cn'
import { ModalLogout } from '../modal/logout'

const routeItems: { icon: string; name: string; path: string }[] = [
  { icon: 'icon-[material-symbols--home-outline-rounded]', name: 'Home', path: '/' },
  { icon: 'icon-[material-symbols--credit-card-outline]', name: 'Asset', path: '/asset' }
]

export function Sidebar() {
  const currentPath = usePathname()
  const [modalOpen, setModalOpen] = useState(false)
  const activeLink = (path: string) => currentPath === path || (path !== '/' && currentPath.startsWith(path))

  return (
    <aside className="sticky top-0 hidden max-h-screen min-w-64 flex-col justify-between border-e px-8 py-8 md:flex">
      <div>
        <div className="mb-16 grid place-items-center">
          <h2 className="mb-6 text-lg font-medium">TEST QTI</h2>
          <div className="relative h-10">
            <Image src={Logo} alt="Logo" fill className="!relative w-full" />
          </div>
        </div>

        <ul className="grid space-y-4">
          {routeItems.map(item => (
            <li key={item.name}>
              <Button
                asChild
                variant={activeLink(item.path) ? 'default' : 'ghost'}
                className={cn('w-full font-medium', !activeLink(item.path) && 'text-neutral-500')}
              >
                <Link href={item.path}>
                  <span className={cn(item.icon, 'mr-2 text-lg')}></span>
                  <span>{item.name}</span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <Button type="button" variant="ghost" className="w-full font-medium" onClick={() => setModalOpen(_ => true)}>
        <span>Logout</span>
        <span className={cn('icon-[material-symbols--logout-rounded]', 'ms-2 text-lg')}></span>
      </Button>

      <ModalLogout isOpen={modalOpen} onClose={() => setModalOpen(_ => false)} />
    </aside>
  )
}
