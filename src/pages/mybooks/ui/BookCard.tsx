import type {
  BookSearchFormat} from 'entities/book';
import {
  BookCover,
  useChangeMyBooksMutation,
  useGetBookAdditionalInfoQuery,
} from 'entities/book';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'shared/lib';
import { SkeletonLoader } from 'shared/ui';
import styled from 'styled-components';
import {
  handleBookAuthor,
  handleBookTitle,
} from 'widgets/Shelf/lib/sliceTextHelper';

export const BookCard = ({
  bookId,
  bookStatus,
}: {
  bookId: string;
  bookStatus: string;
}) => {
  const { data: book, isLoading } = useGetBookAdditionalInfoQuery(bookId);
  const [changeMyBooks] = useChangeMyBooksMutation();
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const [currentStatus, setCurrentStatus] = useState<
    'will_read' | 'reading' | 'read' | 'favorite'
  >(bookStatus as 'will_read' | 'reading' | 'read' | 'favorite');

  const handleBookClick = (book: BookSearchFormat) => {
    navigate(`/book/${book.cover_edition_key}`);
  };

  const handleAuthorClick = (author: string) => {
    navigate(`/author/${author}`, { state: { author } });
  };

  const handleStatusChange = async (newStatus: string) => {
    if (!user?.id) return;

    try {
      await changeMyBooks({
        from: 'mybooks',
        userId: user.id,
        bookId,
        bookStatus: newStatus as 'will_read' | 'reading' | 'read' | 'favorite',
        method: newStatus === 'remove' ? 'delete' : 'update',
      }).unwrap();
      setCurrentStatus(
        newStatus as 'will_read' | 'reading' | 'read' | 'favorite',
      );
    } catch (error) {
      console.error('Failed to update book status:', error);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CoverContainer>
          <SkeletonLoader height="200px" />
        </CoverContainer>
        <CardContent>
          <SkeletonLoader
            height="1rem"
            margin="0 0 0.4rem 0"
          />
          <SkeletonLoader
            height="0.9rem"
            margin="0 0 0.8rem 0"
            width="60%"
          />
          <SkeletonLoader
            height="1.5rem"
            margin="0 0 1rem 0"
            width="40%"
          />
          <BookActions>
            <SkeletonLoader height="32px" />
            <SkeletonLoader
              height="32px"
              width="32px"
            />
          </BookActions>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      {book && (
        <Card>
          <CoverContainer>
            <StyledBookCover
              cover_id={book.cover_id}
              cover_i={book.cover_i}
              onClick={() => handleBookClick(book)}
            />
          </CoverContainer>

          <CardContent>
            <BookTitle onClick={() => handleBookClick(book)}>
              {handleBookTitle(book.title)}
            </BookTitle>

            {book.author_name && (
              <AuthorName onClick={() => handleAuthorClick(book.author_key[0])}>
                {handleBookAuthor(book.author_name[0])}
              </AuthorName>
            )}

            <BookActions>
              <StatusSelect
                value={currentStatus}
                onChange={(e) => handleStatusChange(e.target.value)}
              >
                <option value="will_read">📚 Буду читать</option>
                <option value="reading">📖 Читаю</option>
                <option value="read">✅ Прочитано</option>
                <option value="favorite">💖 Избранное</option>
                <option value="remove">🗑️ Удалить</option>
              </StatusSelect>
            </BookActions>
          </CardContent>
        </Card>
      )}
    </>
  );
};

const Card = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const CoverContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 0.8rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
`;

const StyledBookCover = styled(BookCover)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div``;

const BookTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: black;
  margin-bottom: 0.4rem;
  line-height: 1.3;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--orange-accent);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const AuthorName = styled.p`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 0.8rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--link-color);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const BookActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StatusSelect = styled.select`
  flex: 1;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  background: #f8f9fa;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.75rem;
  font-weight: 500;
  appearance: none;

  &:focus {
    outline: none;
    border-color: var(--orange-accent);
    box-shadow: 0 0 0 2px rgba(255, 138, 76, 0.2);
  }

  option {
    background: white;
    color: rgba(0, 0, 0, 0.8);
    padding: 0.5rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;
