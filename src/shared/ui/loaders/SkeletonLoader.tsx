import styled, { keyframes } from 'styled-components';

interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
  margin?: string;
  padding?: string;
  background?: string;
}

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const Skeleton = styled.div<{
  width?: string | number;
  height?: string | number;
  margin?: string;
  padding?: string;
  background?: string;
}>`
  width: ${(p) =>
    typeof p.width === 'number' ? `${p.width}px` : p.width || '100%'};
  height: ${(p) =>
    typeof p.height === 'number' ? `${p.height}px` : p.height || '100%'};
  margin: ${(p) => p.margin || '0'};
  padding: ${(p) => p.padding || '0'};
  background: ${(p) =>
    p.background ||
    'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)'};
  background-size: 200% 100%;
  border-radius: 4px;
  animation: ${shimmer} 1.5s linear infinite;
  z-index: 999;
`;

export const SkeletonLoader = ({
  width,
  height,
  margin,
  padding,
  background,
}: SkeletonLoaderProps) => {
  return (
    <Skeleton
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      background={background}
    />
  );
};
