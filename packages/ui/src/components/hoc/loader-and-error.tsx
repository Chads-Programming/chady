import { Skeleton } from '@/components/ui/skeleton'
import type { ReactNode } from 'react'

interface LoaderAndErrorProps<T> {
  loading: boolean
  isError: boolean
  errorState: ReactNode
  emptyState: ReactNode
  data?: T
  children: (props: { data: T }) => ReactNode
}

export const LoaderAndError = <T,>({
  loading,
  isError,
  data,
  children,
  errorState,
  emptyState,
}: LoaderAndErrorProps<T>) => {
  if (loading) {
    return <Skeleton className="w-full h-full" />
  }

  if (isError) {
    return <>{errorState}</>
  }

  if (!data) {
    return <>{emptyState}</>
  }

  return <>{children({ data })}</>
}
