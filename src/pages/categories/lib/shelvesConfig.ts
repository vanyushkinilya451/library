import { CONSTANTS } from 'shared/lib';

const DATE_RANGE = '[2000 TO *]';

export const shelvesConfig = [
  {
    title: 'Фэнтези',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:fantasy AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Детективы',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:mystery AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Романы',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:romance AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Триллеры',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:thriller AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Историческая литература',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:historical fiction AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Биографии',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:biography AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Научная литература',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:science AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Психология',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:psychology AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Поэзия',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:poetry AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Драма',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:drama AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Ужасы',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:horror AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Приключения',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:adventure AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Комиксы и графические романы',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:graphic novels AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Детская литература',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:children's literature AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Философия',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:philosophy AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Экономика',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:economics AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Политика',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:politics AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Технологии',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:technology AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Искусство',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:art AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Путешествия',
    api: `${CONSTANTS.OL_SEARCH}?q=subject:travel AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
];
