import { st } from 'shared/lib';
import styled, { keyframes } from 'styled-components';

interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
  margin?: string;
  padding?: string;
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
}>`
  width: ${(p) =>
    typeof p.width === 'number' ? `${p.width}px` : p.width || '100%'};
  height: ${(p) =>
    typeof p.height === 'number' ? `${p.height}px` : p.height || '100%'};
  margin: ${(p) => p.margin || '0'};
  padding: ${(p) => p.padding || '0'};
  background: ${st('gradients', 'skeleton')};
  background-size: 200% 100%;
  border-radius: ${st('borderRadius', 'sm')};
  animation: ${shimmer} 1.5s linear infinite;
  z-index: 999;
`;

export const SkeletonLoader = ({
  width,
  height,
  margin,
  padding,
}: SkeletonLoaderProps) => {
  return (
    <Skeleton
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
};
