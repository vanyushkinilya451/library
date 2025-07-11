import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONSTANTS } from 'shared/lib';
import { BookSearchFormat, BookShelf, BookWorkFormat } from '../lib/types';
export const openlibraryApi = createApi({
  reducerPath: 'openlibrary',
  baseQuery: fetchBaseQuery({ baseUrl: `${CONSTANTS.OPEN_LIBRARY_URL}` }),
  endpoints: (build) => ({
    getBookById: build.query<BookWorkFormat, string>({
      query: (id) => `/books/${id}.json`,
    }),
    getBookAdditionalInfo: build.query<BookSearchFormat, string>({
      query: (id) => `/search.json?q=${id}`,
    }),
    getBooksByCategory: build.query<BookShelf, string>({
      query: (api) => `${api}&limit=${CONSTANTS.SHELF_LIMIT}`,
    }),
  }),
});

export const {
  useGetBookByIdQuery,
  useGetBookAdditionalInfoQuery,
  useGetBooksByCategoryQuery,
} = openlibraryApi;
