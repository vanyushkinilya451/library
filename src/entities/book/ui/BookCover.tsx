import { useState } from 'react';
import { SkeletonLoader } from 'shared/ui';
import { handleCoverUrlProps } from '../lib/handleCoverUrl';

type BookCoverProps = {
  onClick?: () => void;
  cover_id?: number;
  cover_i?: number;
  className?: string;
  size?: 'S' | 'M' | 'L';
  skeletonHeight?: string;
  borderRadius?: string;
};

export const BookCover = ({
  cover_id,
  cover_i,
  className = 'cover-image',
  onClick,
  size = 'M',
  skeletonHeight = '180px',
  borderRadius = '0px',
}: BookCoverProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const coverUrl = handleCoverUrlProps({
    id: (cover_i ? cover_i : cover_id)!,
    size,
  });
  return (
    <>
      {isLoading && <SkeletonLoader height={skeletonHeight} />}
      <img
        onClick={onClick}
        className={className}
        src={coverUrl}
        alt='cover'
        style={{
          display: isLoading ? 'none' : 'block',
          borderRadius: borderRadius,
        }}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};
