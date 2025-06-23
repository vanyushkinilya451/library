export type Author = {
  birth_date: string;
  created: { type: string; value: string };
  key: string;
  last_modified: { type: string; value: string };
  latest_revision: number;
  name: string;
  remote_ids: { wikidata: string };
  revision: number;
  source_records: string[];
  type: { key: string };
};
