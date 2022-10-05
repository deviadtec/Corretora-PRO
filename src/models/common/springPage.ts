export interface SpringPage<T> {
  content: T[];
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  sort: { unsorted: boolean; sorted: boolean };
  totalElements: number;
  totalPages: number;
  pageable: {
    sort: { unsorted: boolean; sorted: boolean };
    paged: boolean;
    unpaged: boolean;
    offset: number;
    pageNumber: number;
    pageSize: number;
  };
}
