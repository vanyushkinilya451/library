import { ROUTES } from 'app/routes/router';
import {
  BookCover,
  useChangeMyBooksMutation,
  useGetBookAdditionalInfoQuery,
} from 'entities/book';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { st, useAppSelector } from 'shared/lib';
import { SkeletonLoader } from 'shared/ui';
import styled from 'styled-components';
import { handleBookAuthor, handleBookTitle } from 'widgets/Shelf';

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

  const handleBookClick = (bookId: string) => {
    navigate(ROUTES.LINKS.BOOK(bookId));
  };

  const handleAuthorClick = (authorId: string) => {
    navigate(ROUTES.LINKS.AUTHOR(authorId));
  };

  const handleStatusChange = async (newStatus: string) => {
    if (!user?.id) return;

    setCurrentStatus(
      newStatus as 'will_read' | 'reading' | 'read' | 'favorite',
    );

    try {
      await changeMyBooks({
        from: 'mybooks',
        userId: user.id,
        bookId,
        bookStatus: newStatus as 'will_read' | 'reading' | 'read' | 'favorite',
        method: newStatus === 'remove' ? 'delete' : 'update',
      }).unwrap();
    } catch (error) {
      setCurrentStatus(
        bookStatus as 'will_read' | 'reading' | 'read' | 'favorite',
      );
      console.error('Failed to update book status:', error);
    }
  };

  useEffect(() => {
    setCurrentStatus(
      bookStatus as 'will_read' | 'reading' | 'read' | 'favorite',
    );
  }, [bookStatus]);

  return (
    <>
      {book && (
        <Card>
          <CoverContainer>
            <StyledBookCover
              skeletonHeight=""
              cover_id={book.cover_id}
              cover_i={book.cover_i}
              onClick={() => handleBookClick(book.cover_edition_key)}
            />
          </CoverContainer>
          {isLoading ? (
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
          ) : (
            <CardContent>
              <BookTitle
                onClick={() => handleBookClick(book.cover_edition_key)}
              >
                {handleBookTitle(book.title)}
              </BookTitle>

              {book.author_name && (
                <AuthorName
                  onClick={() => handleAuthorClick(book.author_key[0])}
                >
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
          )}
        </Card>
      )}
    </>
  );
};

const StatusButton = styled.button<{ $active?: boolean }>`
  all: unset;
  cursor: pointer;
  font-size: ${st('fontSizes', 'md')};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${({ $active }) =>
    $active ? st('colors', 'accent') : st('colors', 'backgroundSecondary')};
  color: ${({ $active }) =>
    $active ? st('colors', 'textWhite') : st('colors', 'textSecondary')};
  box-shadow: ${st('shadows', 'card')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${st('transitions', 'transform')};

  &:hover {
    transform: scale(1.1);
    background-color: ${st('colors', 'accent')};
    color: ${st('colors', 'textWhite')};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Card = styled.div`
  background: ${st('colors', 'background')};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: ${st('borderRadius', 'lg')};
  padding: 1rem;
  transition: ${st('transitions', 'colors')};
  position: relative;
  overflow: hidden;
  box-shadow: ${st('shadows', 'card')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${st('breakpoints', 'md')}) {
    padding-inline: 0.7rem;
  }

  @media (max-width: ${st('breakpoints', 'sm')}) {
    padding-inline: 0.7rem;
  }

  @media (max-width: ${st('breakpoints', 'xs')}) {
    padding-inline: 0.7rem;
  }
`;

const CoverContainer = styled.div`
  position: relative;
  border-radius: ${st('borderRadius', 'md')};
  width: 130px;
  height: 200px;
  overflow: hidden;
  margin-bottom: 0.8rem;
  box-shadow: ${st('shadows', 'card')};
`;

const StyledBookCover = styled(BookCover)`
  width: 130px;
  height: 200px;
  transition: ${st('transitions', 'transform')};
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const BookTitle = styled.h3`
  font-size: ${st('fontSizes', 'md')};
  font-weight: 600;
  color: ${st('colors', 'textPrimary')};
  margin-bottom: 0.4rem;
  line-height: 1.3;
  cursor: pointer;
  transition: ${st('transitions', 'colors')};

  &:hover {
    color: ${st('colors', 'accent')};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const AuthorName = styled.p`
  font-size: ${st('fontSizes', 'md')};
  color: ${st('colors', 'textSecondary')};
  margin-bottom: 0.8rem;
  cursor: pointer;
  transition: ${st('transitions', 'colors')};

  &:hover {
    color: ${st('colors', 'primary')};
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
