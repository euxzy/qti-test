import { ReactNode, Suspense } from 'react'
import { Sidebar } from '~/components/shared/navigation/sidebar'
import { TopBar } from '~/components/shared/navigation/top-bar'
import { Profile } from '../client'
import { BottomBar } from '~/components/shared/navigation/bottom-bar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen space-x-5">
        <Profile />

        <Sidebar />
        <div className="flex-1">
          <Suspense fallback={null}>
            <TopBar />
          </Suspense>
          <div>{children}</div>
        </div>
      </div>
      <BottomBar />
    </>
  )
}
