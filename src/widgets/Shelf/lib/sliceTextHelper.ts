import { CONSTANTS } from 'shared/lib';

export const handleBookTitle = (title: string) => {
  return title.length > CONSTANTS.LIMITS.TITLE_CHAR_LIMIT
    ? title.slice(0, CONSTANTS.LIMITS.TITLE_CHAR_LIMIT) + '...'
    : title;
};

export const handleBookAuthor = (author: string) => {
  return author.length > CONSTANTS.LIMITS.AUTHOR_CHAR_LIMIT
    ? author.slice(0, CONSTANTS.LIMITS.AUTHOR_CHAR_LIMIT) + '...'
    : author;
};
