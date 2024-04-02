'use client'

import { Input } from '~/components/ui/input'
import { cn } from '~/lib/cn'

export interface SearchInputProps {
  className?: string
  action?: (args: any) => typeof args | void
}
export function SearchInput({ className }: SearchInputProps) {
  return (
    <div className={cn('relative', className)}>
      <Input placeholder="Search asset" className="bg-primary-300 focus-visible:ring-primary-500" />
      <span className="icon-[material-symbols--search-rounded] absolute inset-y-0 right-2 my-auto text-xl text-neutral-400"></span>
    </div>
  )
}
