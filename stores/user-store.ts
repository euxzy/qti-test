import { createStore } from 'zustand'

export type UserState = {
  username: string
  email: string
}

export type UserActions = {
  setUser: (user: UserState) => typeof user | void
  rmUser: () => void
}

export type UserStore = UserState & UserActions

export const initUserStore = (): UserState => ({ username: '', email: '' })

export const defaultInitState: UserState = {
  username: '',
  email: ''
}

export const createUserStore = (initState: UserState = defaultInitState) =>
  createStore<UserStore>()(set => ({
    ...initState,
    setUser: user => set(_ => ({ email: user.email, username: user.username })),
    rmUser: () => set(_ => ({ email: '', username: '' }))
  }))
