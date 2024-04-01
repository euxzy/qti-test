import { ReactNode } from 'react'
import { Sidebar } from '~/components/shared/navigation/sidebar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen space-x-5">
      <Sidebar />
      <div>{children}</div>
    </div>
  )
}
