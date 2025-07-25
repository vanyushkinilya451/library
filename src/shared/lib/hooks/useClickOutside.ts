import { useEffect } from 'react';

export const useClickOutside = (
  refs: React.RefObject<HTMLElement | null>[],
  callback: () => void,
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      let found = false;
      refs.forEach((ref) => {
        if (ref.current && ref.current.contains(event.target as Node)) {
          found = true;
        }
      });
      if (!found) callback();
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [refs, callback]);
};
