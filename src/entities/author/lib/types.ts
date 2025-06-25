export type Author = {
  alternate_names: string[];
  bio: string | { type: string; value: string };
  birth_date: string;
  created: { type: string; value: string };
  key: string;
  last_modified: { type: string; value: string };
  latest_revision: number;
  name: string;
  personal_name: string;
  photos: number[];
  remote_ids: { wikidata: string; isni: string; viaf: string };
  revision: number;
  source_records: string[];
  type: { key: string };
};
