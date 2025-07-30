import { useChangeMyBooksMutation } from 'entities/book';
import { useAppSelector } from 'shared/lib';

export const useMyBooks = () => {
  const { user } = useAppSelector((state) => state.user);
  const [changeMyBooks] = useChangeMyBooksMutation();

  const addToMyBooks = (bookId: string) => {
    if (bookId && user?.id) {
      changeMyBooks({
        from: 'mybooks',
        bookId: bookId,
        userId: user.id,
        bookStatus: 'will_read',
        method: 'insert',
      });
    }
  };

  const removeFromMyBooks = (bookId: string) => {
    if (bookId && user?.id) {
      changeMyBooks({
        from: 'mybooks',
        bookId: bookId,
        userId: user.id,
        bookStatus: 'will_read',
        method: 'delete',
      });
    }
  };
  return {
    addToMyBooks,
    removeFromMyBooks,
  };
};
