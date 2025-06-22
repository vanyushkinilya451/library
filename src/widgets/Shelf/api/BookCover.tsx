import { useState } from "react";
import { SkeletonLoader } from "shared/ui/SkeletonLoader";


type BookCoverProps = {
  cover_id?: number;
  cover_i?: number;
  className?: string;
}

export const BookCover = ({ cover_id, cover_i, className }: BookCoverProps) => {
  const [isLoader, setIsLoader] = useState(true);
  return (
    <>
      {isLoader && <SkeletonLoader height="180px" />}
      <img className={className} src={`http://covers.openlibrary.org/b/id/${cover_id ? cover_id : cover_i}-M.jpg`} alt="cover" onLoad={() => setIsLoader(false)} />
    </>
  )
}
