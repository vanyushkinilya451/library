import { CONSTANTS } from '../constants/constants';

export const getApi = (subject: string, dateRange?: string) => {
  if (dateRange) {
    return `${CONSTANTS.URLS.SEARCH_BOOKS}?q=subject:${subject}&first_publish_year:${dateRange}`;
  }
  return `${CONSTANTS.URLS.SEARCH_BOOKS}?q=subject:${subject}`;
};
