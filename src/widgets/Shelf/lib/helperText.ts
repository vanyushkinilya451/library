import { CONSTANTS } from 'shared/lib';

export const handleTitle = (title: string) => {
  return title.length > CONSTANTS.TITLE_CHAR_LIMIT
    ? title.slice(0, CONSTANTS.TITLE_CHAR_LIMIT) + '...'
    : title;
};

export const handleAuthor = (author: string) => {
  return author.length > CONSTANTS.AUTHOR_CHAR_LIMIT
    ? author.slice(0, CONSTANTS.AUTHOR_CHAR_LIMIT) + '...'
    : author;
};
