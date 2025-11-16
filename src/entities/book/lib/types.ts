export type BookSearchFormat = {
  author_key: string[];
  author_name: string[];
  cover_edition_key: string;
  ebook_access: string;
  first_publish_year: number;
  has_fulltext: boolean;
  key: string;
  language: string[];
  lending_edition_s: string;
  lending_identifier_s: string;
  public_scan_b: boolean;
  title: string;
  cover_id?: number;
  cover_i?: number;
};

export type SearchApiResponse = {
  docs: BookSearchFormat[];
  documentation_url: string;
  numFound: number;
  numFoundExact: boolean;
  num_found: number;
  offset: number | null;
  q: string;
  start: number;
};

export type BookWorkFormat = {
  subjects: string[];
  subtitle: string;
  covers: number[];
  created: {
    type: string;
    value: string;
  };
  description: {
    type: string;
    value: string;
  };
  identifiers: { amazon: string[] };
  isbn_10: string[];
  isbn_13: string[];
  key: string;
  last_modified: {
    type: string;
    value: string;
  };
  latest_revision: number;
  number_of_pages: number;
  publish_date: string;
  publishers: string[];
  series: string[];
  source_records: string[];
  title: string;
  type: { key: string };
  work: { key: string };
};

export type MyBooksQuery = {
  from: string;
  select: string;
  userId: string;
  bookStatus: "will_read" | "reading" | "read" | "favorite";
};

export type GetAllMyBooksQuery = {
  from: string;
  select: string;
  userId: string;
};

export type MyBooksMutation = {
  from: string;
  userId: string;
  bookId: string;
  bookStatus: "will_read" | "reading" | "read" | "favorite";
  method: "insert" | "update" | "delete";
};

export type BookCoverProps = {
  onClick?: () => void;
  cover_id?: number;
  cover_i?: number;
  className?: string;
  size?: "S" | "M" | "L";
  skeletonHeight?: string;
  borderRadius?: string;
};
