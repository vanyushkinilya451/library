import { CONSTANTS } from 'shared/lib';
import { getApi } from 'shared/lib/helpers/getApi';

export const homepageConfig = [
  {
    title: 'Новые книги 2025',
    api: `${CONSTANTS.URLS.SEARCH_BOOKS}?q=first_publish_year:2025`,
  },
  {
    title: 'Популярное фэнтези',
    api: getApi('fantasy'),
  },
  {
    title: 'Научная фантастика',
    api: getApi('science fiction'),
  },
  {
    title: 'Современная проза',
    api: getApi('fiction'),
  },
  {
    title: 'Саморазвитие',
    api: getApi('self-help'),
  },
  {
    title: 'Детективы',
    api: getApi('mystery'),
  },
  {
    title: 'Романтические романы',
    api: getApi('romance'),
  },
  {
    title: 'Бизнес литература',
    api: getApi('business'),
  },
  {
    title: 'Исторические романы',
    api: getApi('historical fiction'),
  },
  {
    title: 'Классическая литература',
    api: getApi('classics'),
  },
];
