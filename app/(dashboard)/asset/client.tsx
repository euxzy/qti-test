'use client'

import Link from 'next/link'
import { ShowIf } from '~/components/logic/show-if'
import { SearchInput } from '~/components/shared/micro/search-input'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '~/components/ui/pagination'
import { useSearchAsset } from '~/hooks/use-search-asset'
import { cn } from '~/lib/cn'

export function ListAsset() {
  const { assets, pagination, setSearch, onChangePage } = useSearchAsset()
  return (
    <>
      <SearchInput className="mb-4" onChange={val => setSearch(val)} />
      <div className="mb-28">
        <Card className="mb-4 border-none shadow-none">
          <CardContent className="p-6">
            {assets?.map((asset, idx) => (
              <div
                key={idx}
                className={cn('mb-4 flex items-center justify-between', idx !== assets.length - 1 && 'border-b pb-4')}
              >
                <div className="font-semibold">
                  <h3 className="mb-1 text-sm text-neutral-400">Asset Name</h3>
                  <p>{asset?.name}</p>
                </div>
                <Button asChild className="btn-gradient h-10 w-10 rounded-full p-0 text-xl">
                  <Link href={`/asset/${asset?.id}/edit`}>
                    <span className="icon-[material-symbols--edit-rounded]"></span>
                  </Link>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
        <ShowIf condition={pagination.pageCount > 1}>
          <Pagination>
            <PaginationContent>
              <PaginationItem className="cursor-pointer select-none">
                <PaginationPrevious onClick={() => onChangePage({ direction: 'prev' })} />
              </PaginationItem>
              {[...Array(pagination.pageCount)].map((_, idx) => {
                if (idx > pagination.page || idx < pagination.page - 2) return null
                return (
                  <PaginationItem key={idx} className="cursor-pointer select-none">
                    <PaginationLink
                      isActive={idx + 1 === pagination.page}
                      onClick={() => onChangePage({ page: idx + 1 })}
                    >
                      {idx + 1}
                    </PaginationLink>
                  </PaginationItem>
                )
              })}
              <PaginationItem className="cursor-pointer select-none">
                <PaginationNext onClick={() => onChangePage({ direction: 'next' })} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </ShowIf>
      </div>
    </>
  )
}
