import { CONSTANTS } from '../constants/constants';

export const getApi = (subject: string, dateRange: string = '[2000 TO *]') => {
  return `${CONSTANTS.OL_SEARCH_BOOKS}?q=subject:${subject} AND first_publish_year:${dateRange}&sort=editions`;
};
