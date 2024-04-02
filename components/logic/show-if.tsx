import { ReactNode } from 'react'

export interface ShowIfProps {
  children: ReactNode
  condition: boolean
}

/**
 *
 * @param { ShowIfProps }
 * @returns { ReactNode | null }
 */
export function ShowIf({ children, condition }: ShowIfProps): ReactNode | null {
  return condition ? children : null
}
