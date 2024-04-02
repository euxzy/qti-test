import { ReactNode } from 'react'
import { Sidebar } from '~/components/shared/navigation/sidebar'
import { TopBar } from '~/components/shared/navigation/top-bar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen space-x-5">
      <Sidebar />
      <div className="w-full">
        <TopBar />
        <div>{children}</div>
      </div>
    </div>
  )
}
