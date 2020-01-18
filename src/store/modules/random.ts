import { RandomState } from "../modules-types";
import { Entry } from "../modules-types";

export default {
  state: {
    randomItem: {}
  } as RandomState,
  mutations: {
    SET_RANDOM(state: RandomState, randomItem: Entry) {
      state.randomItem = randomItem;
    }
  },
  getters: {
    randomApi: (state: RandomState) => state.randomItem
  },
  actions: {
    async fetchRandomItem({ commit }: any) {
      try {
        // Fetch the data from the Api
        const res = await fetch("https://api.publicapis.org/random");
        const json = await res.json();
        const random = await await json.entries[0];
        console.log(random);

        // Assign the data to the `random` variable
        commit("SET_RANDOM", random);
      } catch (err) {
        throw err;
      }
    }
  }
};
