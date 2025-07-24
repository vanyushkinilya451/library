import styled from 'styled-components';

type SkeletonProps = {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  background?: string;
};

export const SkeletonLoader = ({
  width = '100%',
  height = '100%',
  margin = '0',
  padding = '0',
  background = 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)',
}: SkeletonProps) => {
  return (
    <Skeleton
      style={{
        width: width,
        height: height,
        margin: margin,
        background: background,
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite linear',
        borderRadius: '4px',
        padding: padding,
        zIndex: '999',
      }}
    ></Skeleton>
  );
};

const Skeleton = styled.div`
  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
