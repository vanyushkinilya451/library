export const shelvesConfig = [
  {
    title: "Лучшие за год",
    api: `https://openlibrary.org/search.json?q=first_publish_year:${new Date().getFullYear()}`,
  },
  {
    title: "Популярное фэнтези",
    api: "https://openlibrary.org/search.json?q=subject:fantasy AND first_publish_year:[2000 TO *]&sort=editions",
  },
  {
    title: "Научная фантастика",
    api: "https://openlibrary.org/search.json?q=subject:science fiction AND first_publish_year:[2000 TO *]&sort=editions",
  },
  {
    title: "Саморазвитие",
    api: "https://openlibrary.org/search.json?q=subject:self-help AND first_publish_year:[2000 TO *]&sort=editions",
  },
  {
    title: "Вечная классика",
    api: "https://openlibrary.org/search.json?q=first_publish_year:[* TO 1900]&sort=editions",
  },
];
