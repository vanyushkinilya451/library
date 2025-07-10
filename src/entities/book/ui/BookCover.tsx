import { SkeletonLoader } from 'shared/ui';
import { useGetBookCover } from '../api/useGetBookCover';

type BookCoverProps = {
  onClick?: () => void;
  cover_id?: number;
  cover_i?: number;
  className?: string;
  coverSize?: 'S' | 'M' | 'L';
  skeletonHeight?: string;
};

export const BookCover = ({
  cover_id,
  cover_i,
  className = 'cover-image',
  onClick,
  coverSize = 'M',
  skeletonHeight = '180px',
}: BookCoverProps) => {
  const { isLoading, setIsLoading, coverUrl } = useGetBookCover({
    cover_id,
    cover_i,
    coverSize,
  });
  return (
    <>
      {isLoading && <SkeletonLoader height={skeletonHeight} />}
      <img
        onClick={onClick}
        className={className}
        src={coverUrl}
        alt='cover'
        style={{ display: isLoading ? 'none' : 'block' }}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};
