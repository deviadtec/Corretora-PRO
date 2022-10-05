export interface FoundEntitiesData<T> {
  data: T[];
  page: {
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
  };
}
