import { CONSTANTS } from 'shared/lib';

export const shelvesConfig = [
  {
    title: 'Лучшие за год',
    api: `${CONSTANTS.OL_SEARCH}?q=first_publish_year:${new Date().getFullYear()}`,
  },
  {
    title: 'Популярное фэнтези',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:fantasy AND first_publish_year:[2000 TO *]&sort=editions`,
  },
  {
    title: 'Научная фантастика',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:science fiction AND first_publish_year:[2000 TO *]&sort=editions`,
  },
  {
    title: 'Саморазвитие',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:self-help AND first_publish_year:[2000 TO *]&sort=editions`,
  },
  {
    title: 'Вечная классика',
    api: `${CONSTANTS.OL_SEARCH}?q=first_publish_year:[* TO 1900]&sort=editions`,
  },
];
