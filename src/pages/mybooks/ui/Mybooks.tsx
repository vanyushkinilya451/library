import { useGetAllMyBooksQuery } from 'entities/book';
import { useMemo, useState } from 'react';
import { theme.breakpoints, theme.fontSizes, useAppSelector } from 'shared/lib';
import styled from 'styled-components';
import { BookCard } from './BookCard';

export const MyBooks = () => {
  const [status, setStatus] = useState<
    'will_read' | 'reading' | 'read' | 'favorite'
  >('will_read');
  const { user } = useAppSelector((state) => state.user);

  const { data: allMyBooks, isLoading } = useGetAllMyBooksQuery({
    userId: user?.id as string,
    from: 'mybooks',
    select: 'book_id, book_status',
  });

  const filteredBooks = useMemo(() => {
    if (!allMyBooks) return [];
    return allMyBooks.filter((book) => book.book_status === status);
  }, [allMyBooks, status]);

  return (
    <PageContainer>
      <StatusTabs>
        <StatusTab
          active={status === 'will_read'}
          onClick={() => setStatus('will_read')}
          data-active={status === 'will_read'}
        >
          <TabIcon>📚</TabIcon>
          Буду читать
        </StatusTab>
        <StatusTab
          active={status === 'favorite'}
          onClick={() => setStatus('favorite')}
          data-active={status === 'favorite'}
        >
          <TabIcon>💖</TabIcon>
          Избранное
        </StatusTab>
        <StatusTab
          active={status === 'reading'}
          onClick={() => setStatus('reading')}
          data-active={status === 'reading'}
        >
          <TabIcon>📖</TabIcon>
          Читаю
        </StatusTab>
        <StatusTab
          active={status === 'read'}
          onClick={() => setStatus('read')}
          data-active={status === 'read'}
        >
          <TabIcon>✅</TabIcon>
          Прочитано
        </StatusTab>
      </StatusTabs>

      <Content>
        {isLoading ? (
          <LoadingState>
            <LoadingSpinner />
            <LoadingText>Загружаем ваши книги...</LoadingText>
          </LoadingState>
        ) : filteredBooks && filteredBooks.length > 0 ? (
          <BooksGrid>
            {filteredBooks.map((book) => (
              <BookCard
                key={book.book_id}
                bookId={book.book_id}
                bookStatus={book.book_status}
              />
            ))}
          </BooksGrid>
        ) : (
          <EmptyState>
            <EmptyIcon>📖</EmptyIcon>
            <EmptyTitle>Нет книг</EmptyTitle>
            <EmptyText>
              В этой категории пока нет книг. Добавьте книги из поиска!
            </EmptyText>
          </EmptyState>
        )}
      </Content>
    </PageContainer>
  );
};

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.5rem;

  @media (max-width: ${theme.breakpoints.xs}) {
    padding-inline: 7px;
  }
`;

const StatusTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.md}) {
    gap: 0.5rem;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const StatusTab = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 1.2rem;
  border-radius: 12px;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-align: center;

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: ${theme.fontSizes.sm};
    padding: 0.5rem 0.9rem;
  }

  background: ${({ active }) =>
    active
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)'
      : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid
    ${({ active }) =>
      active ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.1)'};
  box-shadow: ${({ active }) =>
    active
      ? '0 8px 25px rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      : '0 2px 8px rgba(0, 0, 0, 0.1)'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
    ${({ active }) => active && 'left: 100%;'}
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ active }) =>
      active
        ? 'linear-gradient(135deg, rgba(255, 138, 76, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
        : 'transparent'};
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: ${({ active }) =>
      active
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)'
        : 'rgba(255, 255, 255, 0.2)'};
    box-shadow: ${({ active }) =>
      active
        ? '0 12px 35px rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)'
        : '0 6px 20px rgba(0, 0, 0, 0.2)'};
  }

  &:active {
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
    &::before {
      display: none;
    }
  }
`;

const TabIcon = styled.span`
  font-size: 1rem;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;

  ${StatusTab}:hover & {
    transform: scale(1.1);
  }

  ${StatusTab}[data-active="true"] & {
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`;

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.xs}) {
    gap: 6px;
  }
`;

const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`;

const LoadingText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin: 0;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
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
