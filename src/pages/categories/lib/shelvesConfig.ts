import { CONSTANTS } from 'shared/lib';

const DATE_RANGE = '[2000 TO *]';

export const shelvesConfig = [
  {
    title: 'Фэнтези',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:fantasy AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Детективы',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:mystery AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Романы',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:romance AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Триллеры',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:thriller AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Историческая литература',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:historical fiction AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Биографии',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:biography AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Научная литература',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:science AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Психология',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:psychology AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Поэзия',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:poetry AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Драма',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:drama AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Ужасы',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:horror AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Приключения',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:adventure AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Комиксы и графические романы',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:graphic novels AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Детская литература',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:children's literature AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Философия',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:philosophy AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Экономика',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:economics AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Политика',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:politics AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Технологии',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:technology AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Искусство',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:art AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
  {
    title: 'Путешествия',
    api: `${CONSTANTS.OPEN_LIBRARY_API}?q=subject:travel AND first_publish_year:${DATE_RANGE}&sort=editions`,
  },
];
