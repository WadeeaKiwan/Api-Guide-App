import Vue from "vue";
import Vuex from "vuex";

import entries from "./modules/entries";
import categories from "./modules/categories";
import random from "./modules/random";
import sitemap from "./modules/sitemap";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   // loading: false,
  //   entries: [],
  //   randomEntries: []
  // },
  // mutations: {
  //   // SET_Loading_STATUS(state, status) {
  //   //   state.loading = status;
  //   // },
  //   SET_ENTRIES(state, entries) {
  //     state.entries = entries;
  //   },
  //   SET_RANDOM_ENTRIES(state, entries) {
  //     state.randomEntries = entries.sort(() => 0.5 - Math.random()).slice(0, 10);
  //   }
  // },
  // getters: {
  //   allEntries: state => state.entries,
  //   randomEntries: state => state.randomEntries
  //   // loadingStatus: state => state.loading
  // },
  // actions: {
  //   async fetchEntries({ commit }) {
  //     try {
  //       // commit("SET_Loading_STATUS", true);
  //       // Fetch the data from the Api
  //       const res = await fetch("https://api.publicapis.org/entries");
  //       const json = await res.json();
  //       const entries = await [...json.entries];
  //       console.log(entries);

  //       // Assign the data to the `entries` variable
  //       commit("SET_ENTRIES", entries);

  //       // Change the order of the entries randomly
  //       // this.randomEntries = await this.entries.sort(() => 0.5 - Math.random()).slice(0, 10);
  //     } catch (err) {
  //       throw err;
  //     }
  //   },
  //   randomizeEntries({ commit }) {
  //     commit("SET_RANDOM_ENTRIES");
  //   }
  // },
  modules: {
    entries,
    categories,
    random,
    sitemap
  }
});
