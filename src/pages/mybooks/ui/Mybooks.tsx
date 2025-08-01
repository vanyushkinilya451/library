import { useGetAllMyBooksQuery } from "entities/book";
import { useMemo, useState } from "react";
import { st, useAppSelector } from "shared/lib";
import { styled } from "styled-components";
import { BookCard } from "./BookCard";

export const MyBooks = () => {
  const [status, setStatus] = useState<
    "will_read" | "reading" | "read" | "favorite"
  >("will_read");
  const { user } = useAppSelector((state) => state.user);

  const { data: allMyBooks, isLoading } = useGetAllMyBooksQuery({
    userId: user?.id as string,
    from: "mybooks",
    select: "book_id, book_status",
  });

  const filteredBooks = useMemo(() => {
    if (!allMyBooks) return [];
    return allMyBooks.filter((book) => book.book_status === status);
  }, [allMyBooks, status]);

  return (
    <PageContainer>
      <StatusTabs>
        <StatusTab
          active={status === "will_read"}
          onClick={() => setStatus("will_read")}
          data-active={status === "will_read"}
        >
          <TabIcon>📚</TabIcon>
          Буду читать
        </StatusTab>
        <StatusTab
          active={status === "favorite"}
          onClick={() => setStatus("favorite")}
          data-active={status === "favorite"}
        >
          <TabIcon>💖</TabIcon>
          Избранное
        </StatusTab>
        <StatusTab
          active={status === "reading"}
          onClick={() => setStatus("reading")}
          data-active={status === "reading"}
        >
          <TabIcon>📖</TabIcon>
          Читаю
        </StatusTab>
        <StatusTab
          active={status === "read"}
          onClick={() => setStatus("read")}
          data-active={status === "read"}
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
  border: 4px solid ${st("colors", "secondary")};
  border-top: 4px solid ${st("colors", "primary")};
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
  min-height: 100dvh;
  background: ${st("gradients", "primary")};
  padding: 1.5rem;

  @media (max-width: ${st("breakpoints", "xs")}) {
    padding-inline: 7px;
  }
`;

const StatusTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: ${st("breakpoints", "md")}) {
    gap: 0.5rem;
  }

  @media (max-width: ${st("breakpoints", "md")}) {
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
  border-radius: ${st("borderRadius", "md")};
  border: none;
  font-size: ${st("fontSizes", "md")};
  font-weight: 600;
  cursor: pointer;
  transition: ${st("transitions", "transform")};
  position: relative;
  overflow: hidden;
  text-align: center;

  @media (max-width: ${st("breakpoints", "xs")}) {
    font-size: ${st("fontSizes", "sm")};
    padding: 0.5rem 0.9rem;
  }

  background: ${({ active }) =>
    active ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.1)"};
  color: ${st("colors", "textWhite")};
  backdrop-filter: blur(10px);
  border: 1px solid
    ${({ active }) =>
      active ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.1)"};
  box-shadow: ${({ active }) =>
    active
      ? "0 8px 25px rgba(255, 255, 255, 0.2)"
      : "0 2px 8px rgba(0, 0, 0, 0.1)"};

  &:hover {
    transform: translateY(-2px);
    background: ${({ active }) =>
      active ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.2)"};
    box-shadow: ${({ active }) =>
      active
        ? "0 12px 35px rgba(255, 255, 255, 0.3)"
        : "0 6px 20px rgba(0, 0, 0, 0.2)"};
  }

  &:active {
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

const TabIcon = styled.span`
  font-size: ${st("fontSizes", "md")};
  position: relative;
  z-index: 1;
  transition: ${st("transitions", "transform")};

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

  @media (max-width: ${st("breakpoints", "xs")}) {
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
  color: ${st("colors", "textWhite")};
  font-size: ${st("fontSizes", "md")};
  margin: 0;
  opacity: 0.8;
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
  font-size: ${st("fontSizes", "xxl")};
  margin-bottom: 1rem;
`;

const EmptyTitle = styled.h2`
  font-size: ${st("fontSizes", "xl")};
  color: ${st("colors", "textWhite")};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const EmptyText = styled.p`
  color: ${st("colors", "textWhite")};
  font-size: ${st("fontSizes", "md")};
  max-width: 400px;
  line-height: 1.6;
  margin: 0;
  opacity: 0.7;
`;
