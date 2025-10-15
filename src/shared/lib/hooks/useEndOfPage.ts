import { useEffect, useState } from "react";
import { CONSTANTS } from "shared/lib";

export const useEndOfPage = () => {
  const [categoriesLimit, setCategoriesLimit] = useState<number>(
    CONSTANTS.LIMITS.CATEGORIES_LIMIT
  );

  useEffect(() => {
    const handleScrollEnd = () => {
      const documentHeight = document.body.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;

      if (currentScroll >= documentHeight) {
        setCategoriesLimit((prev) => prev + CONSTANTS.LIMITS.CATEGORIES_LIMIT);
      }
    };

    window.addEventListener("scroll", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScrollEnd);
    };
  }, []);

  return { categoriesLimit };
};
