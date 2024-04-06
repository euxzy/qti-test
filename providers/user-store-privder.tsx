'use client'

import { ReactNode, createContext, useContext, useRef } from 'react'
import { StoreApi, useStore } from 'zustand'
import { UserStore, createUserStore, initUserStore } from '~/stores/user-store'

export const UserStoreContext = createContext<StoreApi<UserStore> | null>(null)

export const UserStoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<StoreApi<UserStore>>()
  if (!storeRef.current) storeRef.current = createUserStore(initUserStore())

  return <UserStoreContext.Provider value={storeRef.current}>{children}</UserStoreContext.Provider>
}

export const useUserStore = <T,>(selector: (_: UserStore) => T): T => {
  const userStoreContext = useContext(UserStoreContext)
  if (!userStoreContext) throw new Error('useUserStore must be use within UserStoreProvider')

  return useStore(userStoreContext, selector)
}
