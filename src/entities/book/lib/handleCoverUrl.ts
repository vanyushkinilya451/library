import { CONSTANTS } from 'shared/lib';

type handleCoverUrlProps = {
  id: number;
  size: 'S' | 'M' | 'L';
};

export const handleCoverUrl = ({ id, size = 'S' }: handleCoverUrlProps) => {
  const coverUrl = `${CONSTANTS.URLS.COVER}${id}-${size}.jpg`;
  return coverUrl;
};
