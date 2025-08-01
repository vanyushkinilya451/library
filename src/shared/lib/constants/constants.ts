export const CONSTANTS = {
  LIMITS: {
    //shelf card char limits to show
    TITLE_CHAR_LIMIT: 40,
    AUTHOR_CHAR_LIMIT: 20,

    //shelf scroll distance on arrow click
    SCROLL_DISTANCE: 150,

    //books results in search panel
    SEARCH_LIMIT: 5,

    //books quantity in shelf
    SHELF_LIMIT: 15,

    //categories qunatity per single load
    CATEGORIES_LIMIT: 3,
  } as const,

  URLS: {
    BASE_URL: "https://openlibrary.org",
    SEARCH_BOOKS: `https://openlibrary.org/search.json`,
    SEARCH_AUTHORS: "https://openlibrary.org/search/authors.json",
    BOOK: "https://openlibrary.org/books",
    AUTHOR: "https://openlibrary.org/authors",
    COVER: "http://covers.openlibrary.org/b/id/",
    AUTHOR_IMAGE: "https://covers.openlibrary.org/a/olid/",
    SUBJECTS: "https://openlibrary.org/subjects.json?limit=1000&offset=0",
  } as const,
};
