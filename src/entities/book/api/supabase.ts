import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from 'shared/lib';

type MyBooksQuery = {
  from: string;
  select: string;
  userId: string;
  bookStatus: 'will_read' | 'reading' | 'read' | 'favorite';
};

type GetAllMyBooksQuery = {
  from: string;
  select: string;
  userId: string;
};

type MyBooksMutation = {
  from: string;
  userId: string;
  bookId: string;
  bookStatus: 'will_read' | 'reading' | 'read' | 'favorite';
  method: 'insert' | 'update' | 'delete';
};

export const supabaseApi = createApi({
  reducerPath: 'supabaseApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['MyBooks'],
  endpoints: (builder) => ({
    getMyBooks: builder.query<
      { book_id: string; book_status: string }[],
      MyBooksQuery
    >({
      queryFn: async ({ userId, from, select, bookStatus }) => {
        const { data, error } = await supabase
          .from(from)
          .select(select)
          .eq('user_id', userId)
          .eq('book_status', bookStatus);
        if (error) return { error: error.message };
        if (!data) return { data: [] };
        return {
          data: data as unknown as { book_id: string; book_status: string }[],
        };
      },
      providesTags: ['MyBooks'],
    }),

    getAllMyBooks: builder.query<
      { book_id: string; book_status: string }[],
      GetAllMyBooksQuery
    >({
      queryFn: async ({ userId, from, select }) => {
        const { data, error } = await supabase
          .from(from)
          .select(select)
          .eq('user_id', userId);
        if (error) return { error: error.message };
        if (!data) return { data: [] };
        return {
          data: data as unknown as { book_id: string; book_status: string }[],
        };
      },
      providesTags: ['MyBooks'],
    }),

    changeMyBooks: builder.mutation<void, MyBooksMutation>({
      queryFn: async ({ from, userId, bookId, bookStatus, method }) => {
        switch (method) {
          case 'insert': {
            const { error } = await supabase.from(from).insert({
              book_id: bookId,
              user_id: userId,
              book_status: bookStatus,
            });

            if (error) {
              return { error: error.message };
            }
            return { data: undefined };
          }

          case 'update': {
            const { error } = await supabase
              .from(from)
              .update({
                book_status: bookStatus,
              })
              .eq('book_id', bookId)
              .eq('user_id', userId);
            if (error) {
              return { error: error.message };
            }
            return { data: undefined };
          }

          case 'delete': {
            const { error } = await supabase
              .from(from)
              .delete()
              .eq('book_id', bookId)
              .eq('user_id', userId);
            if (error) {
              return { error: error.message };
            }
            return { data: undefined };
          }
        }
      },
      invalidatesTags: ['MyBooks'],
      onQueryStarted: async (
        { userId, bookStatus, method, ...patch },
        { dispatch, queryFulfilled },
      ) => {
        const patchResult1 = dispatch(
          supabaseApi.util.updateQueryData(
            'getMyBooks',
            { from: 'mybooks', bookStatus, userId, select: 'book_id' },
            (draft) => {
              if (method === 'insert') {
                draft.push({ book_id: patch.bookId, book_status: bookStatus });
              } else if (method === 'delete') {
                const index = draft.findIndex(
                  (item) => item.book_id === patch.bookId,
                );
                if (index > -1) {
                  draft.splice(index, 1);
                }
              }
            },
          ),
        );

        const patchResult2 = dispatch(
          supabaseApi.util.updateQueryData(
            'getAllMyBooks',
            { from: 'mybooks', userId, select: 'book_id, book_status' },
            (draft) => {
              if (method === 'insert') {
                draft.push({ book_id: patch.bookId, book_status: bookStatus });
              } else if (method === 'update') {
                const bookIndex = draft.findIndex(
                  (item) => item.book_id === patch.bookId,
                );
                if (bookIndex > -1) {
                  draft[bookIndex].book_status = bookStatus;
                }
              } else if (method === 'delete') {
                const index = draft.findIndex(
                  (item) => item.book_id === patch.bookId,
                );
                if (index > -1) {
                  draft.splice(index, 1);
                }
              }
            },
          ),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult1.undo();
          patchResult2.undo();
        }
      },
    }),
  }),
});

export const {
  useGetMyBooksQuery,
  useGetAllMyBooksQuery,
  useChangeMyBooksMutation,
} = supabaseApi;
