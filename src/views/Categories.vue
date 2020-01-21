<template>
  <div class="container">
    <template v-if="loading">
      <PulseLoader class="spinner" :color="`#7ca971`" />
    </template>
    <template v-else>
      <form>
        <select @change="onChange(selectedValue)" v-model="selectedValue">
          <option selected disabled>Select a Category</option>
          <option
            v-for="(value, index) in allCategories"
            :value="value"
            :key="index"
            >{{ value }}</option
          >
        </select>
      </form>
      <ul class="items-container">
        <ApiItemDetails
          class="api-item"
          v-for="(entry, index) in selectedCategory"
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
import ApiItemDetails from "../components/ApiItemDetails.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import { mapGetters, mapActions } from "vuex";

import { CategoriesData } from "../types";
import { Entry } from "../types";

export default Vue.extend({
  name: "Categories",
  components: {
    ApiItemDetails,
    PulseLoader
  },
  data(): CategoriesData {
    return {
      loading: true,
      itemDetails: true,
      selectedCategory: [],
      selectedValue: "Select a Category"
    };
  },
  methods: {
    // Map action to the component
    ...mapActions(["getCategories", "getEntries"]),
    // A method to change the value of the select menu according to the selected option
    onChange(value: string) {
      this.selectedCategory = this.allEntries.filter(
        (entry: Entry) => (entry.Category as string) === value
      );
    }
  },
  computed: {
    // Map state to the component
    ...mapGetters(["allEntries", "allCategories"])
  },
  async created() {
    // Call the fetch action
    await this.getCategories();
    await this.getEntries();
    this.loading = false;
  }
});
</script>

<style scoped>
select {
  color: beige;
  background-color: #5c7756;
  cursor: pointer;
  padding: 1vw;
  margin: 1vw;
  font-size: 1em;
}

.api-item:hover {
  cursor: default;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
  background-color: beige;
  color: #5c7756;
}

ul {
  list-style-type: none;
}

@media (max-width: 576px) {
  select {
    max-width: 90%;
  }
}

@media (min-width: 768px) {
  .api-item {
    width: calc(100% / 3 - 30px);
  }
}
</style>
