import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from 'shared/lib';

export const supabaseApi = createApi({
  reducerPath: 'supabaseApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['MyBooks'],
  endpoints: (builder) => ({
    getMyBooks: builder.query<number[], string>({
      queryFn: async (userId: string) => {
        const { data, error } = await supabase
          .from('mybooks')
          .select('book_id')
          .eq('user_id', userId);
        if (error) return { error: error.message };
        if (!data) return { error: 'Произошла ошибка' };
        console.log(data);
        return { data: data.map((item) => item.book_id) };
      },
      providesTags: ['MyBooks'],
    }),
    addToMyBooks: builder.mutation<
      number[],
      { userId: string; bookId: number } & Partial<{
        userId: string;
        bookId: number;
      }>
    >({
      queryFn: async (arg) => {
        const { data, error } = await supabase
          .from('mybooks')
          .insert({ book_id: arg.bookId, user_id: arg.userId });
        if (error) return { error: error.message };
        if (!data) return { error: 'Произошла ошибка' };
        return { data: data as number[] };
      },
      invalidatesTags: ['MyBooks'],
      onQueryStarted: async (
        { userId, ...patch },
        { dispatch, queryFulfilled }
      ) => {
        const patchResult = dispatch(
          supabaseApi.util.updateQueryData('getMyBooks', userId, (draft) => {
            draft.push(patch.bookId);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetMyBooksQuery, useAddToMyBooksMutation } = supabaseApi;
