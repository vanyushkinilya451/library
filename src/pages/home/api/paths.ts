export const api = {
  newByYear: `https://openlibrary.org/search.json?q=first_publish_year:`,
  fantasy:
    "https://openlibrary.org/search.json?q=subject:fantasy AND first_publish_year:[2000 TO *]&sort=editions",
  scifi:
    'https://openlibrary.org/search.json?q=subject:"science fiction" AND first_publish_year:[2010 TO *]&sort=editions',
  selfhelp:
    'https://openlibrary.org/search.json?q=subject:"self-help"&sort=editions',
  classics:
    "https://openlibrary.org/search.json?q=first_publish_year:[* TO 1900]&sort=editions",
};
