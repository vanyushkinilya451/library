import { useBookCover } from 'entities/book/api/useBookCover';
import { SkeletonLoader } from 'shared/ui';

type AuthorImageProps = {
  onClick?: () => void;
  cover_id?: number;
  cover_i?: number;
  className?: string;
  coverSize?: 'S' | 'M' | 'L';
  skeletonHeight?: string;
  objectFit?: 'cover' | 'contain';
};

export const AuthorImage = ({
  cover_id,
  cover_i,
  className = 'cover-image',
  onClick,
  coverSize = 'M',
  skeletonHeight = '180px',
  objectFit = 'contain',
}: AuthorImageProps) => {
  const { isLoading, setIsLoading, coverUrl } = useBookCover({
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
        style={{
          display: isLoading ? 'none' : 'block',
          objectFit: objectFit,
        }}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};
