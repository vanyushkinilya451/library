import { CONSTANTS } from 'shared/lib';

type handleCoverUrlProps = {
  id: number;
  size: 'S' | 'M' | 'L';
};

export const handleCoverUrlProps = ({
  id,
  size = 'S',
}: handleCoverUrlProps) => {
  const coverUrl = `${CONSTANTS.OL_COVER}${id}-${size}.jpg`;
  return coverUrl;
};
