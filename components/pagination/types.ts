export interface IPropsPagination {
  unpagedData: any[];
  pagedData: any[];
  setPagedData: React.Dispatch<React.SetStateAction<any[]>>;
  paginationInfoComplete?: boolean;
}
