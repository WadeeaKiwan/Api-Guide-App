export interface Entry {
  API?: string;
  Description?: string;
  HTTPS?: boolean;
  Cors?: string;
  Link?: string;
  Category?: string;
}

export interface EntriesState {
  entries: Entry[];
  selectedEntry: Entry;
}

export interface CategoriesState {
  categories: string[];
}

export interface RandomState {
  randomItem: Entry;
}

export interface SitemapState {
  siteMapList: { name: string; path: string }[];
}
