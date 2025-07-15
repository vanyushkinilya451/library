import { CONSTANTS } from '../constants/constants';

export const getApi = (subject: string, dateRange?: string) => {
  if (dateRange) {
    return `${CONSTANTS.OL_SEARCH_BOOKS}?q=subject:${subject}&first_publish_year:${dateRange}`;
  }
  return `${CONSTANTS.OL_SEARCH_BOOKS}?q=subject:${subject}`;
};
