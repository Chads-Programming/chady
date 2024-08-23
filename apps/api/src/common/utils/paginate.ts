import { AbtractPaginated, PageInfo, PlainPagination } from '../dto/page-info';

export function paginate<Data>(
  payload: PlainPagination<Data>,
): AbtractPaginated<Data> {
  const pageInfo = new PageInfo();

  pageInfo.currentPage = payload.currentPage;
  pageInfo.hasNextPage = payload.hasNextPage;
  pageInfo.total = payload.total;
  pageInfo.totalPages = payload.totalPages;

  return {
    data: payload.data,
    pageInfo,
  };
}
