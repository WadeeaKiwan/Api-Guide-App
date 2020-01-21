<template>
  <div class="container">
    <template v-if="loading">
      <PulseLoader class="spinner" :color="`#7ca971`" />
    </template>
    <template v-else>
      <h2>A random API</h2>
      <div>
        <button type="button" class="btn" @click="randomClick">
          Random API
        </button>
      </div>
      <ul>
        <ApiItemDetails
          class="random-item"
          :entry="randomApi"
          :itemDetails="itemDetails"
        />
      </ul>
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
    ...mapActions(["getRandomItem"]),
    // Call the fetch function on click event
    randomClick(): void {
      this.getRandomItem();
    }
  },
  computed: {
    ...mapGetters(["randomApi"])
  },
  async created() {
    // Call the `getRandomItem` action for a random entry
    await this.getRandomItem();
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
  width: 80%;
  margin: 3vw auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 2vw;
  background-color: beige;
  color: #5c7756;
  font-size: 1.2em;
}

.btn {
  margin: 20px 0;
  padding: 10px;
  color: beige;
  background-color: #5c7756;
  border: #5c7756;
  text-decoration: none;
  border-radius: 5px;
  text-align: left !important;
}

.btn:hover {
  cursor: pointer;
  background-color: #3a3f44;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: beige;
  color: #5c7756;
  font-weight: bold;
}

@media (max-width: 576px) {
  .random-item {
    width: 100%;
  }
}
</style>
