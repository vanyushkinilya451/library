import { useEffect, useRef, useState } from 'react';
import { CONSTANTS } from 'shared/lib';
import { SkeletonLoader } from 'shared/ui';

type AuthorImageProps = {
  onClick?: () => void;
  id: string;
  className?: string;
  coverSize?: 'S' | 'M' | 'L';
  skeletonHeight?: string;
  objectFit?: 'cover' | 'contain';
};

export const AuthorImage = ({
  className = 'cover-image',
  onClick,
  id,
  coverSize = 'M',
  skeletonHeight = '180px',
  objectFit = 'contain',
}: AuthorImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
  const coverUrl = `${CONSTANTS.URLS.AUTHOR_IMAGE}${id}-${coverSize}.jpg`;

  const handleImageLoad = () => {
    setIsLoading(false);

    if (imgRef.current) {
      const img = imgRef.current;

      if (img.naturalWidth === 0 || img.naturalHeight === 0) {
        return;
      }

      if (img.naturalWidth < 10 || img.naturalHeight < 10) {
        return;
      }
    }
  };

  const handleImageError = () => {
    ('Image load error event fired');
    setIsLoading(false);
  };

  useEffect(() => {
    const checkImage = async () => {
      const response = await fetch(coverUrl, { method: 'HEAD' });
      if (!response.ok) {
        setIsLoading(false);
      }
    };

    checkImage();
  }, [coverUrl]);

  return (
    <>
      {isLoading && <SkeletonLoader height={skeletonHeight} />}
      <img
        ref={imgRef}
        onClick={onClick}
        className={className}
        src={coverUrl}
        alt="cover"
        style={{
          display: isLoading ? 'none' : 'block',
          width: '100%',
          height: '100%',
          objectFit: objectFit,
        }}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </>
  );
};
