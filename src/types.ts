export interface HomeData {
  loading: boolean;
  entries: Entries[];
  randomEntries: Entries[];
  itemDetails: boolean;
}

export interface ItemDetailsData {
  loading: boolean;
  entries: Entries[];
  selectedEntry: Entries[];
  relatedEntries: Entries[];
  itemDetails: boolean;
}

export interface CategoriesData {
  loading: boolean;
  categories: string[];
  entries: Entries[];
  selectedCategory: Entries[];
  selectedValue: string;
  itemDetails: boolean;
}

export interface RandomData {
  loading: boolean;
  randomItem: Entries;
  itemDetails: boolean;
}

export interface Entries {
  API?: string;
  Description?: string;
  HTTPS?: boolean;
  Cors?: string;
  Link?: string;
  Category?: string;
}
