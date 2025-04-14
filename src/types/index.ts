export interface User {
  createdAt: string;
  name: string;
  id: string;
}

export interface Project {
  createdAt: string;
  name: string;
  id: string;
}

export interface TableProps<T> {
  data: T[];
  columns: { header: string; accessor: keyof T }[];
  search: string;
  onSearchChange: (val: string) => void;
  currentPage: number;
  setPage: (page: number) => void;
  itemsPerPage?: number;
  title: string;
}