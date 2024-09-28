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
  pageRange?: number
  onPageChange: (page: number) => void
}

export const Paginator = ({
  totalPages,
  currentPage,
  pageSize,
  onPageChange,
  pageRange = 5,
}: Props) => {
  const hasPrevious = totalPages > pageRange && currentPage > 1
  const pagesOffset = useMemo(() => {
    const startOffset =
      totalPages > pageRange ? Math.floor(currentPage / totalPages) + 1 : 1

    return Array.from(
      { length: totalPages > pageRange ? pageRange : totalPages },
      (_, i) => i + startOffset,
    )
  }, [currentPage, totalPages, pageRange])

  const hasNext = totalPages > pageRange && currentPage < totalPages

  const handlePaginationNext = () => {
    return onPageChange(pageSize + 1)
  }

  const handlePaginationPrevious = () => {
    return onPageChange(currentPage - pageSize - (currentPage % pageSize) + 1)
  }

  return (
    <Pagination className="select-none">
      <PaginationContent>
        {hasPrevious && (
          <PaginationItem>
            <PaginationPrevious onClick={handlePaginationPrevious} />
          </PaginationItem>
        )}

        {pagesOffset.map((page) => {
          return (
            <PaginationItem key={`page-${page}`}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => onPageChange(page)}
              >
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
