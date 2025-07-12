import { useGetMyBooksQuery } from 'entities/book';
import { useAppSelector } from 'shared/lib';
import styled, { keyframes } from 'styled-components';
import { BookCard } from './BookCard';

export const MyBooks = () => {
  const { user } = useAppSelector((state) => state.user);
  const {
    data: myBooks,
    isLoading,
    error,
  } = useGetMyBooksQuery({
    userId: user?.id as string,
    bookStatus: 'will_read',
    from: 'mybooks',
    select: 'book_id, book_status',
  });

  return (
    <Container>
      <BackgroundGradient />
      <FloatingElements>
        {[...Array(8)].map((_, index) => (
          <FloatingElement
            key={index}
            delay={index * 0.3}
            size={Math.floor(Math.random() * 20 + 10)}
          />
        ))}
      </FloatingElements>

      <Content>
        <Header>
          <Title>Моя библиотека</Title>
          <Subtitle>Книги, которые вы планируете прочитать</Subtitle>
        </Header>

        {isLoading && (
          <LoadingContainer>
            <LoadingSpinner />
            <LoadingText>Загружаем ваши книги...</LoadingText>
          </LoadingContainer>
        )}

        {!!error && (
          <ErrorContainer>
            <ErrorIcon>📚</ErrorIcon>
            <ErrorText>Не удалось загрузить книги</ErrorText>
          </ErrorContainer>
        )}

        {!isLoading && !error && myBooks && myBooks.length === 0 && (
          <EmptyState>
            <EmptyIcon>📖</EmptyIcon>
            <EmptyTitle>Библиотека пуста</EmptyTitle>
            <EmptyText>
              Добавьте книги в "Буду читать" чтобы они появились здесь
            </EmptyText>
          </EmptyState>
        )}

        {!isLoading && !error && myBooks && myBooks.length > 0 && (
          <BooksGrid>
            {myBooks.map((book) => (
              <BookCard
                key={book.book_id}
                bookId={book.book_id}
              />
            ))}
          </BooksGrid>
        )}
      </Content>
    </Container>
  );
};

// Анимации
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-30px) rotate(180deg); opacity: 0.7; }
`;

const slideIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Стили
const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: var(--gradient-primary);
  overflow-x: hidden;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 20% 30%,
      var(--orange-accent) 0%,
      transparent 40%
    ),
    radial-gradient(circle at 80% 70%, var(--link-color) 0%, transparent 40%),
    radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 60%
    );
  opacity: 0.4;
  animation: ${pulse} 6s ease-in-out infinite;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingElement = styled.div<{ delay: number; size: number }>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;

  &:nth-child(1) {
    top: 10%;
    left: 5%;
  }
  &:nth-child(2) {
    top: 20%;
    right: 10%;
  }
  &:nth-child(3) {
    top: 60%;
    left: 15%;
  }
  &:nth-child(4) {
    top: 70%;
    right: 5%;
  }
  &:nth-child(5) {
    top: 40%;
    left: 25%;
  }
  &:nth-child(6) {
    top: 80%;
    right: 20%;
  }
  &:nth-child(7) {
    top: 30%;
    left: 35%;
  }
  &:nth-child(8) {
    top: 90%;
    right: 35%;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  animation: ${slideIn} 1s ease-out;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-out 0.3s both;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-weight: 300;
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  animation: ${fadeIn} 1s ease-out 0.6s both;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  animation: ${fadeIn} 0.5s ease-out;
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1rem;
`;

const LoadingText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin: 0;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  animation: ${fadeIn} 0.5s ease-out;
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const ErrorText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  margin: 0;
  text-align: center;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

const EmptyIcon = styled.div`
  font-size: 5rem;
  margin-bottom: 1.5rem;
  animation: ${pulse} 3s ease-in-out infinite;
`;

const EmptyTitle = styled.h2`
  font-size: 2rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const EmptyText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  max-width: 400px;
  line-height: 1.6;
  margin: 0;
`;
