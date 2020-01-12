<template>
  <div class="item-details-page">
    <template v-if="loading">
      <PulseLoader :color="`#575f66`" />
    </template>
    <template v-else>
      <ul class="items-container">
        <ApiItem class="selected-item" :entry="selectedEntry[0]" :itemDetails="itemDetails" />
      </ul>
      <div class="related-items">
        <h2>See also related API's</h2>
        <ul class="items-container">
          <ApiItem
            class="api-item"
            v-for="(relatedEntry, index) in relatedEntries"
            :key="index"
            :entry="relatedEntry"
            :itemDetails="itemDetails"
          />
        </ul>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ is an alias to /src
import ApiItem from "@/components/ApiItem.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import { ItemDetailsData } from "../types";

export default Vue.extend({
  name: "ItemDetails",
  components: {
    ApiItem,
    PulseLoader
  },
  data(): ItemDetailsData {
    return {
      loading: true,
      entries: [],
      selectedEntry: [],
      relatedEntries: [],
      itemDetails: true
    };
  },
  watch: {},
  async created() {
    try {
      const res = await fetch("https://api.publicapis.org/entries");

      const json = await res.json();

      this.entries = await json.entries;

      this.selectedEntry = await this.entries.filter(
        entry => entry.API === this.$route.params.API
      );

      this.relatedEntries = await this.entries
        .filter(
          entry =>
            entry.Category === this.selectedEntry[0].Category &&
            entry.API !== this.selectedEntry[0].API
        )
        .slice(0, 3);

      this.loading = false;
    } catch (err) {
      throw err;
    }
  }
});
</script>

<style scoped>
.item-details-page {
  padding-top: 200px;
  min-height: 1200px;
}

.selected-item {
  width: 80%;
  margin: 3vw auto;
  background-color: rgba(206, 174, 180, 0.8);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
  padding: 2vw;
  color: black;
}

.related-items {
  margin-top: 10vh;
}

@media (max-width: 478.98px) {
  .item-details-page {
    padding-top: 220px;
  }

  .api-item {
    width: calc(100% - 30px);
  }

  .selected-item {
    width: calc(100% - 50px);
    margin: 3vh auto;
    padding: 15px;
  }
}

@media (min-width: 768px) {
  .api-item {
    width: calc(100% / 3 - 30px);
  }
}
</style>
