import type { BookSearchFormat } from 'entities/book';
import {
  BookCover,
  useChangeMyBooksMutation,
  useGetBookAdditionalInfoQuery,
} from 'entities/book';
import { useEffect, useState } from 'react';
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
    } catch (error) {
      console.error('Failed to update book status:', error);
    }
  };

  useEffect(() => {
    setCurrentStatus(
      bookStatus as 'will_read' | 'reading' | 'read' | 'favorite',
    );
  }, [bookStatus]);

  if (isLoading) {
    return (
      <Card>
        <CoverContainer>
          <SkeletonLoader height="200px" />
        </CoverContainer>
        <CardContent>
          <SkeletonLoader
            height="20px"
            width="100%"
            margin="0 0 5px 0"
          />
          <SkeletonLoader
            height="20px"
            width="100%"
            margin="0 0 5px 0"
          />
          <SkeletonLoader
            height="20px"
            width="100%"
            margin="0 0 5px 0"
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
              {currentStatus !== 'will_read' && (
                <StatusButton onClick={() => handleStatusChange('will_read')}>
                  📚
                </StatusButton>
              )}
              {currentStatus !== 'reading' && (
                <StatusButton onClick={() => handleStatusChange('reading')}>
                  📖
                </StatusButton>
              )}
              {currentStatus !== 'read' && (
                <StatusButton onClick={() => handleStatusChange('read')}>
                  ✅
                </StatusButton>
              )}
              {currentStatus !== 'favorite' && (
                <StatusButton onClick={() => handleStatusChange('favorite')}>
                  💖
                </StatusButton>
              )}
              <StatusButton onClick={() => handleStatusChange('remove')}>
                🗑️
              </StatusButton>
            </BookActions>
          </CardContent>
        </Card>
      )}
    </>
  );
};

const StatusButton = styled.button<{ $active?: boolean }>`
  all: unset;
  cursor: pointer;
  font-size: 1rem;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${({ $active }) =>
    $active ? 'var(--orange-accent)' : '#f0f0f0'};
  color: ${({ $active }) => ($active ? '#fff' : '#333')};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.1);
    background-color: var(--orange-accent);
    color: #fff;
  }

  &:active {
    transform: scale(0.95);
  }
`;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-inline: 0.7rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-inline: 0.7rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding-inline: 0.7rem;
  }
`;

const CoverContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 0.8rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
`;

const StyledBookCover = styled(BookCover)`
  width: 130px;
  height: 200px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

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

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

const BookActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
  justify-content: center;
  align-items: center;
`;
