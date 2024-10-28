export type PaginationOptions = {
  page?: number;
  pageSize?: number;
};

export type QueryOptions = {
  populate?: string | string[];
  filters?: Record<string, string>;
  sort?: string;
  pagination?: PaginationOptions;
};

export function buildStrapiSingleTypeUrl(
  endpoint: string,
  options: QueryOptions = {}
): string {
  const url = new URL(endpoint);

  // Handle populate
  if (options.populate) {
    const populateFields = Array.isArray(options.populate)
      ? options.populate.join(",")
      : options.populate;
    url.searchParams.append("populate", populateFields);
  }

  // Handle filters
  if (options.filters) {
    for (const [field, value] of Object.entries(options.filters)) {
      url.searchParams.append(`filters[${field}][$eq]`, value);
    }
  }

  // Handle sorting
  if (options.sort) {
    url.searchParams.append("sort", options.sort);
  }

  // Handle pagination
  if (options.pagination) {
    if (options.pagination.page !== undefined) {
      url.searchParams.append(
        "pagination[page]",
        options.pagination.page.toString()
      );
    }
    if (options.pagination.pageSize !== undefined) {
      url.searchParams.append(
        "pagination[pageSize]",
        options.pagination.pageSize.toString()
      );
    }
  }
  return url.toString();
}
