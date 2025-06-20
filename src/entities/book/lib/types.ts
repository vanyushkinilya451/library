export type Book = {
  author_key: string[];
  author_name: string[];
  cover_edition_key: string;
  ebook_access: string;
  first_publish_year: number;
  has_fulltext: boolean;
  ia: string[];
  ia_collection_s: string[];
  key: string;
  language: string[];
  lending_edition_s: string;
  lending_identifier_s: string;
  public_scan_b: boolean;
  title: string;
  cover_i?: number;
  cover_id?: number;
  authors: { name: string }[];
};
