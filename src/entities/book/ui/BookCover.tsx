import { useEffect, useRef, useState } from "react";
import { SkeletonLoader } from "shared/ui";
import { handleCoverUrl } from "../lib/handleCoverUrl";
import type { BookCoverProps } from "../lib/types";

export const BookCover = ({
  cover_id,
  cover_i,
  className = "cover-image",
  onClick,
  size = "M",
  skeletonHeight = "180px",
  borderRadius = "0px",
}: BookCoverProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
  const coverUrl = handleCoverUrl({
    id: (cover_i ? cover_i : cover_id)!,
    size,
  });

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const checkImage = async () => {
      const response = await fetch(coverUrl, { method: "HEAD" });
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
          display: isLoading ? "none" : "block",
          borderRadius: borderRadius,
          width: "100%",
          height: "100%",
        }}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </>
  );
};
