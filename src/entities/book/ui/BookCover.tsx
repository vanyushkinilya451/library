import { SkeletonLoader } from 'shared/ui';
import { useBookCover } from '../api/useBookCover';

type BookCoverProps = {
  onClick?: () => void;
  cover_id?: number;
  cover_i?: number;
  className?: string;
};

export const BookCover = ({
  cover_id,
  cover_i,
  className,
  onClick,
}: BookCoverProps) => {
  const { isLoading, setIsLoading, coverUrl } = useBookCover({
    cover_id,
    cover_i,
  });
  return (
    <>
      {isLoading && <SkeletonLoader height='180px' />}
      <img
        onClick={onClick}
        className={className}
        src={coverUrl}
        alt='cover'
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};
