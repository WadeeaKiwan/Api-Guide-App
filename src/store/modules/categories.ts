import { CategoriesState } from "../modules-types";

export default {
  state: {
    categories: []
  } as CategoriesState,
  mutations: {
    SET_CATEGORIES(state: CategoriesState, categories: string[]) {
      state.categories = categories;
    }
  },
  getters: {
    allCategories: (state: CategoriesState) => state.categories
  },
  actions: {
    async getCategories({ commit }: any) {
      try {
        // Fetch the data from the Api
        const res = await fetch("https://api.publicapis.org/categories");
        const categories = (await res.json()).categories;

        // Assign the data to the `categories` variable
        commit("SET_CATEGORIES", categories);
      } catch (err) {
        throw err;
      }
    }
  }
};
