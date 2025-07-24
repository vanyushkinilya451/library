import { useEffect, useRef, useState } from 'react';
import { SkeletonLoader } from 'shared/ui';
import { handleCoverUrl } from '../lib/handleCoverUrl';

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
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const coverUrl = handleCoverUrl({
    id: (cover_i ? cover_i : cover_id)!,
    size,
  });

  const handleImageLoad = () => {
    setIsLoading(false);

    // Проверяем, что изображение действительно загрузилось
    if (imgRef.current) {
      const img = imgRef.current;

      // Проверяем размеры изображения
      if (img.naturalWidth === 0 || img.naturalHeight === 0) {
        console.log('Book cover has zero dimensions, treating as error');
        setHasError(true);
        return;
      }

      // Проверяем, что изображение не слишком маленькое (возможно заглушка)
      if (img.naturalWidth < 10 || img.naturalHeight < 10) {
        console.log('Book cover too small, treating as error');
        setHasError(true);
        return;
      }

      setHasError(false);
    }
  };

  const handleImageError = () => {
    console.log('Book cover load error event fired');
    setIsLoading(false);
    setHasError(true);
  };

  // Дополнительная проверка через useEffect
  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(coverUrl, { method: 'HEAD' });
        if (!response.ok) {
          console.log('Book cover fetch check failed:', response.status);
          setHasError(true);
          setIsLoading(false);
        }
      } catch (error) {
        console.log('Book cover fetch check error:', error);
        // Не устанавливаем hasError здесь, так как onError может сработать позже
      }
    };

    checkImage();
  }, [coverUrl]);

  if (hasError) {
    return (
      <div
        style={{
          width: '100%',
          height: skeletonHeight,
          background: 'var(--gradient-gray)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'var(--secondary-color)',
          fontSize: '12px',
          textAlign: 'center',
          borderRadius: borderRadius,
        }}
      >
        Обложка не найдена
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
          borderRadius: borderRadius,
        }}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </>
  );
};
