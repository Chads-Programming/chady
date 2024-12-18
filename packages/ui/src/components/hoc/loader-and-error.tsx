import { Skeleton } from '@/components/ui/skeleton'
import type { ReactNode } from 'react'

type NonNullableObject<T> = {
  [P in keyof T]-?: NonNullable<T[P]>
}

interface LoaderAndErrorProps<T> {
  loading: boolean
  isError: boolean
  errorState: ReactNode
  emptyState: ReactNode
  loadingState?: ReactNode
  data?: T
  children: (props: { data: NonNullableObject<T> }) => ReactNode
}

export const LoaderAndError = <T,>({
  loading,
  isError,
  data,
  children,
  errorState,
  loadingState,
  emptyState,
}: LoaderAndErrorProps<T>) => {
  if (loading) {
    return (
      <>
        {loadingState ?? <Skeleton className="w-full h-full bg-neutral-600" />}
      </>
    )
  }

  if (isError) {
    return <>{errorState}</>
  }

  if (!data || (Array.isArray(data) && data.length === 0)) {
    return <>{emptyState}</>
  }

  return <>{children({ data } as { data: NonNullableObject<T> })}</>
}
