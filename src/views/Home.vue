<template>
  <div class="container">
    <template v-if="loading">
      <PulseLoader :color="`#575f66`" />
    </template>
    <template v-else>
      <h2 class="home-title">Sample API's</h2>
      <ul class="items-container">
        <ApiItem
          class="api-item"
          v-for="(entry, index) in allEntries"
          :key="index"
          :entry="entry"
          :itemDetails="itemDetails"
        />
      </ul>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ is an alias to /src
import ApiItem from "@/components/ApiItem.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import { mapGetters, mapActions } from "vuex";

import { HomeData } from "../types";

export default Vue.extend({
  name: "Home",
  components: {
    ApiItem,
    PulseLoader
  },
  data(): HomeData {
    return {
      loading: true,
      itemDetails: true
    };
  },
  methods: {
    ...mapActions(["fetchEntries"])
  },
  computed: {
    ...mapGetters(["allEntries", "randomEntries"])
  },
  async created() {
    try {
      // Call the action `fetchEntries` that retrieve data from the Api
      await this.fetchEntries();

      this.loading = false;
    } catch (err) {
      throw err;
    }
  }
});
</script>

<style>
.home-title {
  padding: 2vw;
  font-size: 1.6em;
}

.items-container {
  display: flex;
  flex-wrap: wrap;
}

.api-item {
  width: 100%;
  background-color: rgb(250, 240, 242, 0.5);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
  padding: 2vw;
}

.api-item:hover {
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: rgb(250, 240, 242, 1);
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .api-item {
    width: calc(100% / 2 - 30px);
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .api-item {
    width: calc(100% / 3 - 30px);
  }
}

@media (min-width: 992px) {
  .items-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .api-item {
    width: calc(100% / 4 - 30px);
  }
}
</style>
