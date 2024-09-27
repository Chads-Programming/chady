import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { useMemo } from 'react'

interface Props {
  totalPages: number
  currentPage: number
  pageSize: number
  onPageChange: (page: number) => void
}

export const Paginator = ({
  totalPages,
  currentPage,
  pageSize,
  onPageChange,
}: Props) => {
  const hasPrevious = currentPage > pageSize
  const pagesOffset = useMemo(() => {
    const startOffset = Math.floor(currentPage / pageSize) + 1

    return Array.from({ length: pageSize }, (_, i) => i + startOffset)
  }, [currentPage, pageSize])

  const hasNext = currentPage < totalPages

  const handlePaginationNext = () => {
    return onPageChange(pageSize + 1)
  }

  const handlePaginationPrevious = () => {
    return onPageChange(currentPage - pageSize - (currentPage % pageSize) + 1)
  }

  return (
    <Pagination>
      <PaginationContent>
        {hasPrevious && (
          <PaginationItem>
            <PaginationPrevious onClick={handlePaginationPrevious} />
          </PaginationItem>
        )}

        {pagesOffset.map((page) => {
          return (
            <PaginationItem key={`page-${page}`}>
              <PaginationLink onClick={() => onPageChange(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        {hasNext && (
          <PaginationItem>
            <PaginationNext onClick={handlePaginationNext} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
