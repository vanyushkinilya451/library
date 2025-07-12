import {
  BookCover,
  BookSearchFormat,
  useGetBookAdditionalInfoQuery,
} from 'entities/book';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import {
  handleBookAuthor,
  handleBookTitle,
} from 'widgets/Shelf/lib/sliceTextHelper';

export const BookCard = ({ bookId }: { bookId: string }) => {
  const { data: book } = useGetBookAdditionalInfoQuery(bookId);
  const navigate = useNavigate();

  const handleBookClick = (book: BookSearchFormat) => {
    navigate(`/book/${book.cover_edition_key}`);
  };

  const handleAuthorClick = (author: string) => {
    navigate(`/author/${author}`, { state: { author } });
  };

  if (!book) {
    return <BookCardSkeleton />;
  }

  return (
    <CardContainer>
      <Card>
        <CoverContainer>
          <StyledBookCover
            cover_id={book.cover_id}
            cover_i={book.cover_i}
            onClick={() => handleBookClick(book)}
          />
          <CoverOverlay>
            <ReadButton onClick={() => handleBookClick(book)}>
              Читать
            </ReadButton>
          </CoverOverlay>
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

          <BookMeta>
            {book.first_publish_year && (
              <MetaItem>
                <MetaIcon>📅</MetaIcon>
                {book.first_publish_year}
              </MetaItem>
            )}
          </BookMeta>
        </CardContent>

        <CardActions>
          <ActionButton onClick={() => handleBookClick(book)}>
            <ActionIcon>👁️</ActionIcon>
            Подробнее
          </ActionButton>
        </CardActions>
      </Card>
    </CardContainer>
  );
};

const BookCardSkeleton = () => (
  <CardContainer>
    <Card>
      <SkeletonCover />
      <CardContent>
        <SkeletonTitle />
        <SkeletonAuthor />
        <SkeletonMeta />
      </CardContent>
    </Card>
  </CardContainer>
);

// Анимации
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

// Стили
const CardContainer = styled.div`
  animation: ${fadeIn} 0.6s ease-out;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.4);

    &::before {
      opacity: 1;
    }
  }
`;

const CoverContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const StyledBookCover = styled(BookCover)`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const CoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CoverContainer}:hover & {
    opacity: 1;
  }
`;

const ReadButton = styled.button`
  background: linear-gradient(135deg, var(--orange-accent), var(--link-color));
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }
`;

const CardContent = styled.div`
  margin-bottom: 1.5rem;
`;

const BookTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--orange-accent);
  }
`;

const AuthorName = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--link-color);
  }
`;

const BookMeta = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  backdrop-filter: blur(5px);
`;

const MetaIcon = styled.span`
  font-size: 0.8rem;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: center;
`;

const ActionButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`;

const ActionIcon = styled.span`
  font-size: 0.8rem;
`;

// Скелетон компоненты
const SkeletonCover = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 15px;
  margin-bottom: 1.5rem;
`;

const SkeletonTitle = styled.div`
  height: 1.5rem;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  width: 80%;
`;

const SkeletonAuthor = styled.div`
  height: 1rem;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 6px;
  margin-bottom: 1rem;
  width: 60%;
`;

const SkeletonMeta = styled.div`
  display: flex;
  gap: 1rem;

  &::before,
  &::after {
    content: '';
    height: 1.5rem;
    width: 60px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 25%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 75%
    );
    background-size: 200px 100%;
    animation: ${shimmer} 1.5s infinite;
    border-radius: 10px;
  }
`;
