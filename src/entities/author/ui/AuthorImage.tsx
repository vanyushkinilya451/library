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
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const coverUrl = `${CONSTANTS.OL_AUTHOR_IMAGE}${id}-${coverSize}.jpg`;

  const handleImageLoad = () => {
    setIsLoading(false);

    // Проверяем, что изображение действительно загрузилось
    if (imgRef.current) {
      const img = imgRef.current;

      // Проверяем размеры изображения
      if (img.naturalWidth === 0 || img.naturalHeight === 0) {
        console.log('Image has zero dimensions, treating as error');
        setHasError(true);
        return;
      }

      // Проверяем, что изображение не слишком маленькое (возможно заглушка)
      if (img.naturalWidth < 10 || img.naturalHeight < 10) {
        console.log('Image too small, treating as error');
        setHasError(true);
        return;
      }

      setHasError(false);
    }
  };

  const handleImageError = () => {
    console.log('Image load error event fired');
    setIsLoading(false);
    setHasError(true);
  };

  // Дополнительная проверка через useEffect
  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(coverUrl, { method: 'HEAD' });
        if (!response.ok) {
          console.log('Fetch check failed:', response.status);
          setHasError(true);
          setIsLoading(false);
        }
      } catch (error) {
        console.log('Fetch check error:', error);
      }
    };

    checkImage();
  }, [coverUrl]);

  if (hasError) {
    console.log('hasError', hasError);
    return (
      <div
        style={{
          fontSize: '8px',
          width: '100%',
          height: skeletonHeight,
          background: 'var(--gradient-gray)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'var(--secondary-color)',
          textAlign: 'center',
        }}
      >
        Фото не найдено
      </div>
    );
  }

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
