<template>
  <div class="container">
    <template v-if="loading">
      <PulseLoader :color="`#575f66`" />
    </template>
    <template v-else>
      <h2>This is a random API</h2>
      <ul>
        <ApiItemDetails
          class="random-item"
          :entry="randomApi"
          :itemDetails="itemDetails"
        />
      </ul>
      <div>
        <button class="btn" @click="randomClick">Random API</button>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ is an alias to /src
import ApiItemDetails from "@/components/ApiItemDetails.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import { mapGetters, mapActions } from "vuex";

import { RandomData } from "../types";

export default Vue.extend({
  name: "Random",
  components: {
    ApiItemDetails,
    PulseLoader
  },
  data(): RandomData {
    return {
      loading: true,
      itemDetails: true
    };
  },
  methods: {
    // Map state to the component
    ...mapActions(["fetchRandomItem"]),
    // Call the fetch function on click event
    randomClick(): void {
      this.fetchRandomItem();
    }
  },
  computed: {
    ...mapGetters(["randomApi"])
  },
  async created() {
    // Call the `fetchRandomItem` action for a random entry
    await this.fetchRandomItem();
    this.loading = false;
  }
});
</script>

<style scoped>
h2 {
  padding-bottom: 2vw;
  font-size: 1.6em;
}

.random-item {
  max-width: 60%;
  margin: 5vh auto;
  background-color: rgb(250, 240, 242, 0.5);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
  padding: 5vh;
}

.btn {
  margin: 20px 0;
  padding: 10px;
  color: white;
  background-color: #4a5157;
  border: #575f66;
}

.btn:hover {
  cursor: pointer;
  background-color: #3a3f44;
}

@media (max-width: 480px) {
  .random {
    padding-top: 220px;
  }

  ul {
    margin: 0 5vw;
  }
}
</style>
