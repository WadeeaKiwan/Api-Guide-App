<template>
  <div class="categories">
    <template v-if="loading">
      <PulseLoader :color="`#575f66`" />
    </template>
    <template v-else>
      <form>
        <select @change="onChange(selectedValue)" v-model="selectedValue">
          <option selected disabled>Select a Category</option>
          <option
            v-for="(value, index) in categories"
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

import { CategoriesData } from "../types";

export default Vue.extend({
  name: "Categories",
  components: {
    ApiItemDetails,
    PulseLoader
  },
  data(): CategoriesData {
    return {
      loading: true,
      categories: [],
      entries: [],
      selectedCategory: [],
      selectedValue: "Select a Category",
      itemDetails: true
    };
  },
  methods: {
    // Create function to fetch the `Categories` array and assign it to the `categories` variable
    async fetchCategories() {
      try {
        const res = await fetch("https://api.publicapis.org/categories");

        const categories = await res.json();

        this.categories = categories;

        this.loading = false;
      } catch (err) {
        throw err;
      }
    },
    // Create function to fetch `the whole data` array and assign it to the `entries` variable
    async fetchEntries() {
      try {
        const res = await fetch("https://api.publicapis.org/entries");

        const json = await res.json();

        this.entries = await json.entries;

        this.loading = false;
      } catch (err) {
        throw err;
      }
    },
    // A method to change the value of the select menu according to the selected option
    onChange(value: string) {
      this.selectedCategory = this.entries.filter(
        entry => (entry.Category as string) === value
      );
    }
  },
  async created() {
    // Call the fetch functions
    await this.fetchCategories();
    await this.fetchEntries();
  }
});
</script>

<style scoped>
.categories {
  padding-top: 150px;
  padding-bottom: 50px;
  min-height: 1200px;
}

select {
  background-color: #575f66;
  color: white;
  cursor: pointer;
  padding: 1vw;
  margin: 1vw;
  font-size: 1em;
}

ul {
  list-style-type: none;
}

@media (max-width: 479.98px) {
  .categories {
    padding-top: 220px;
  }
}
</style>
