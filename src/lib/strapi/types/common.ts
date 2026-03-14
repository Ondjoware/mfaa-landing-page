// Strapi v5: fields are flat on data — no `attributes` wrapper
export type StrapiData<T> = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
} & T;

export type StrapiResponse<T> = {
  data: StrapiData<T>;
  meta: Record<string, never>;
};

export type StrapiListResponse<T> = {
  data: StrapiData<T>[];
  meta: {
    pagination: Pagination;
  };
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type StrapiImage = StrapiData<{
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  url: string;
  formats: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
}>;

type StrapiImageFormat = {
  url: string;
  width: number;
  height: number;
};

export type QueryParams = {
  page?: number;
  pageSize?: number;
  sort?: string | string[];
  filters?: Record<string, unknown>;
  populate?: string | string[];
  fields?: string | string[];
};
