'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import { cn } from '~/lib/cn'

export function BottomBar() {
  const currentPath = usePathname()
  const activeLink = (path: string) => currentPath === path

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 mx-auto md:hidden',
        currentPath !== '/' && currentPath !== '/asset' && 'hidden'
      )}
    >
      <Card className="rounded-none shadow-none">
        <CardContent className="relative flex items-center justify-around p-4">
          <Button asChild variant="ghost">
            <Link href="/">
              <span
                className={cn('icon-[material-symbols--home-rounded]', 'text-3xl', activeLink('/') && 'text-primary')}
              ></span>
            </Link>
          </Button>
          <Button asChild className="absolute inset-x-0 -top-6 mx-auto aspect-square h-14 w-14 rounded-full">
            <Link href="/asset/create">
              <span className={cn('icon-[material-symbols--add]', 'text-3xl')}></span>
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/asset">
              <span
                className={cn(
                  'icon-[material-symbols--credit-card]',
                  'text-3xl',
                  activeLink('/asset') && 'text-primary'
                )}
              ></span>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
