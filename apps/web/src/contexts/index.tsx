import { QueryClientProvider } from '@tanstack/react-query'

import { PropsWithChildren } from 'react'
import { queryClient } from '../api/query-client'
import { AuthProvider } from './auth/auth-provider'

export const GlobalProviders = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  )
}
