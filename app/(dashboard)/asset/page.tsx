import { SearchInput } from '~/components/shared/micro/search-input'
import { Button } from '~/components/ui/button'
import { Card, CardContent } from '~/components/ui/card'
import { cn } from '~/lib/cn'

export default function Asset() {
  return (
    <section className="pe-6">
      <h1 className="mb-6 text-3xl font-semibold">List Asset</h1>
      <SearchInput className="mb-4" />
      <div>
        <Card className="border-none shadow-none">
          <CardContent className="p-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className={cn('mb-4 flex items-center justify-between', idx !== 3 && 'border-b pb-4')}>
                <div className="font-semibold">
                  <h3 className="mb-1 text-sm text-neutral-400">Asset Name</h3>
                  <p>Susu Bendera</p>
                </div>
                <Button className="btn-gradient h-10 w-10 rounded-full p-0 text-xl">
                  <span className="icon-[material-symbols--edit-rounded]"></span>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
