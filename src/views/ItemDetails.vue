<template>
  <div class="container">
    <template v-if="loading">
      <PulseLoader :color="`#575f66`" />
    </template>
    <template v-else>
      <button @click="$router.push('/')">Back to Homepage</button>
      <ul class="items-container">
        <ApiItemDetails class="selected-item" :entry="selectedEntry[0]" :itemDetails="itemDetails" />
      </ul>
      <div class="related-items">
        <h2>See also related API's</h2>
        <ul class="items-container">
          <ApiItemDetails
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
import ApiItemDetails from "@/components/ApiItemDetails.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import { mapGetters } from "vuex";

import { ItemDetailsData } from "../types";
import { Entry } from "../types";

export default Vue.extend({
  name: "ItemDetails",
  components: {
    ApiItemDetails,
    PulseLoader
  },
  data(): ItemDetailsData {
    return {
      loading: false,
      itemDetails: true
    };
  },
  props: {
    API: {
      type: String,
      required: true
    }
  },
  computed: {
    // Map the `entries` state to the component
    ...mapGetters(["allEntries"]),
    // Filter the `Entry item` according to the `API` prop
    selectedEntry() {
      return this.allEntries.filter((entry: Entry) => entry.API === this.API);
    },
    // Filter 3 related entries according to the `Category`
    relatedEntries() {
      return this.allEntries
        .filter(
          (entry: Entry) =>
            entry.Category === (this as any).selectedEntry[0].Category &&
            entry.API !== (this as any).selectedEntry[0].API
        )
        .slice(0, 3);
    }
  }
});
</script>

<style scoped>
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

@media (max-width: 576px) {
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
