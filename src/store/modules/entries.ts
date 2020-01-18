import { EntriesState } from "../modules-types";
import { Entry } from "../modules-types";

export default {
  state: {
    entries: [],
    selectedEntry: {}
  } as EntriesState,
  mutations: {
    SET_ENTRIES(state: EntriesState, entries: Entry[]) {
      state.entries = entries;
    }
  },
  getters: {
    allEntries: (state: EntriesState) => state.entries
  },
  actions: {
    async fetchEntries({ commit }: any) {
      try {
        // Fetch the data from the Api
        const res = await fetch("https://api.publicapis.org/entries");
        const json = await res.json();
        let entries = [...json.entries];

        // Assign the data to the `entries` variable
        commit("SET_ENTRIES", entries);
      } catch (err) {
        throw err;
      }
    }
  }
};
