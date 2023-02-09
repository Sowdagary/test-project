export interface IPaginationLink {
  active: boolean;
  label: string;
  url: null | string;
}

export interface IResponseWithPagination<T> {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: IPaginationLink[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null | string;
  to: number;
  total: number;
}

export interface IPaginationResponse<T> {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: IPaginationLink[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null | string;
  to: number;
  total: number;
  data: T[];
}

export interface IResponseForSubmitEntity<T> {
  data: {
    item: T;
  };
  message: string;
  status: string | number;
}

export interface IResponseForFetchEntity<T> {
  data: {
    item: T;
  };
  message: string;
  status: string | number;
}

export interface IResponseForFetchPaginationEntity<T> {
  data: {
    items: IPaginationResponse<T>;
  };
  message: string;
  status: string | number;
}
