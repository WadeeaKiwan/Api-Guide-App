import Vue from "vue";
import Vuex from "vuex";

import entries from "./modules/entries";
import categories from "./modules/categories";
import random from "./modules/random";
import sitemap from "./modules/sitemap";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    entries,
    categories,
    random,
    sitemap
  }
});
