<template>
  <div class="container">
    <template v-if="loading">
      <PulseLoader :color="`#575f66`" />
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
    ...mapActions(["fetchCategories"]),
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
    await this.fetchCategories();
    this.loading = false;
  }
});
</script>

<style scoped>
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
</style>
