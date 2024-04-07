'use client'

import { Input } from '~/components/ui/input'
import { cn } from '~/lib/cn'

export interface SearchInputProps {
  className?: string
  onChange?: (args: any) => typeof args | void
}
export function SearchInput({ className, onChange = () => {} }: SearchInputProps) {
  return (
    <div className={cn('relative', className)}>
      <Input
        placeholder="Search asset"
        className="bg-primary-300 focus-visible:ring-primary-500"
        onChange={val => onChange(val.target.value)}
      />
      <span className="icon-[material-symbols--search-rounded] absolute inset-y-0 right-2 my-auto text-xl text-neutral-400"></span>
    </div>
  )
}
