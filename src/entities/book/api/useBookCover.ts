import { useState } from "react";

type useBookCoverProps = {
  cover_id?: number;
  cover_i?: number;
  className?: string;
};

export const useBookCover = ({ cover_id, cover_i }: useBookCoverProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const coverUrl = `http://covers.openlibrary.org/b/id/${cover_id ? cover_id : cover_i}-M.jpg`;

  return {
    isLoading,
    setIsLoading,
    coverUrl,
  };
};
