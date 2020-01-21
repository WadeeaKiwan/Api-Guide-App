export interface Entry {
  API?: string;
  Description?: string;
  HTTPS?: boolean;
  Cors?: string;
  Link?: string;
  Category?: string;
}

export interface AppData {
  mobileView: boolean;
  showNav: boolean;
}

export interface HomeData {
  loading: boolean;
  itemDetails: boolean;
  currentPage: number;
}

export interface ItemDetailsData {
  loading: boolean;
  itemDetails: boolean;
}

export interface CategoriesData {
  loading: boolean;
  itemDetails: boolean;
  selectedCategory: Entry[];
  selectedValue: string;
}

export interface RandomData {
  loading: boolean;
  itemDetails: boolean;
}
