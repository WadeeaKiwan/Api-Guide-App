<template>
  <div class="categories">
    <template v-if="loading"><PulseLoader :color="`#575f66`"/></template>
    <template v-else>
      <form>
        <select @change="onChange(selectedValue)" v-model="selectedValue">
          <option selected disabled>Select a Category</option>
          <option v-for="(value, index) in categories" :value="value" :key="index">{{
            value
          }}</option>
        </select>
      </form>
      <ul class="items-container">
        <ApiItem
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

<script>
import ApiItem from '../components/ApiItem.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
  name: 'categories',
  components: {
    ApiItem,
    PulseLoader,
  },
  data() {
    return {
      loading: true,
      categories: [],
      entries: [],
      selectedCategory: [],
      selectedValue: 'Select a Category',
      itemDetails: true,
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const res = await fetch('https://api.publicapis.org/categories');

        const categories = await res.json();

        this.categories = categories;
        console.log(categories);

        this.loading = false;
      } catch (err) {
        err => console.log(err.message);
      }
    },
    async fetchEntries() {
      try {
        const res = await fetch('https://api.publicapis.org/entries');

        const json = await res.json();
        console.log(json.entries);

        this.entries = await json.entries;

        this.loading = false;
      } catch (err) {
        err => console.log(err.message);
      }
    },
    onChange(value) {
      this.selectedCategory = this.entries.filter(entry => entry.Category === value);
      console.log(this.selectedCategory);
    },
  },
  created() {
    this.fetchCategories();
    this.fetchEntries();
  },
};
</script>

<style scoped>
.categories {
  padding-top: 150px;
  padding-bottom: 50px;
}

h2 {
  color: blue;
  padding-bottom: 2vw;
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

@media (max-width: 350px) {
  .categories {
    padding-top: 200px;
  }
}
</style>
