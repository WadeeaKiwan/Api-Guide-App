import getRoutesList from "../../router/getRoutesList";
import router from "../../router/index";

import { SitemapState } from "../modules-types";

export default {
  state: {
    siteMapList: []
  } as SitemapState,
  mutations: {
    SET_SITEMAP_LIST(state: SitemapState, siteMapList: { name: string; path: string }[]) {
      state.siteMapList = siteMapList;
    }
  },
  getters: {
    siteMapList: (state: SitemapState) => state.siteMapList
  },
  actions: {
    async fetchSitemapList({ commit }: any) {
      try {
        // Call the custom function `getRoutesList` and assign its returned array to the `siteMapList` variable
        const siteMapList = getRoutesList(
          (router as any).options.routes,
          "https://api-guide-app.herokuapp.com"
          // "http://localhost:8080"
        );

        // Assign the data to the `random` variable
        commit("SET_SITEMAP_LIST", siteMapList);
      } catch (err) {
        throw err;
      }
    }
  }
};
