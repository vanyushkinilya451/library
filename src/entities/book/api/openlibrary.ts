import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONSTANTS } from 'shared/lib';
import type {
  BookSearchFormat,
  BookWorkFormat,
  SearchApiResponse,
} from '../lib/types';
export const openlibraryApi = createApi({
  reducerPath: 'openlibrary',
  baseQuery: fetchBaseQuery({ baseUrl: `${CONSTANTS.URLS.BASE_URL}` }),
  endpoints: (build) => ({
    getBookById: build.query<BookWorkFormat, string>({
      query: (id) => `/books/${id}.json`,
    }),
    getBookAdditionalInfo: build.query<BookSearchFormat, string>({
      query: (id) => `/search.json?q=${id}`,
      transformResponse: (response: SearchApiResponse) => response.docs[0],
    }),
    getBooksByCategory: build.query<BookSearchFormat[], string>({
      query: (api) => `${api}&limit=${CONSTANTS.LIMITS.SHELF_LIMIT}`,
      transformResponse: (response: SearchApiResponse) => response.docs,
    }),
  }),
});

export const {
  useGetBookByIdQuery,
  useGetBookAdditionalInfoQuery,
  useGetBooksByCategoryQuery,
} = openlibraryApi;
