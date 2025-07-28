import { SkeletonLoader } from 'shared/ui';
import styled from 'styled-components';

export const FakeShelfLoader = () => {
  return (
    <ShelfContainer>
      {Array.from({ length: 10 }).map((_, index) => (
        <ShelfItem key={`skeleton-${index}`}>
          <CardWrapper>
            <SkeletonLoader height="180px" />
          </CardWrapper>
          <CardBody>
            <SkeletonLoader
              height="1.5rem"
              margin="10px 0"
            />
            <SkeletonLoader
              height="1.5rem"
              margin="10px 0"
            />
          </CardBody>
        </ShelfItem>
      ))}
    </ShelfContainer>
  );
};

const ShelfContainer = styled.div.attrs(() => ({
  className: 'shelf__container',
}))`
  display: flex;
  flex-wrap: nowrap; /* из твоего CSS */
  overflow-x: auto;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const ShelfItem = styled.div.attrs(() => ({
  className: 'shelf__item',
}))`
  width: 150px; /* из твоего CSS */
  flex: 0 0 auto;
  padding: 10px 10px 0 10px;
  scroll-snap-align: center;
  height: 300px;
  position: relative;
`;

const CardWrapper = styled.div.attrs(() => ({
  className: 'card',
}))`
  border-style: none;
`;

const CardBody = styled.div.attrs(() => ({
  className: 'card__description',
}))`
  padding: 10px 10px 0 10px;
`;
