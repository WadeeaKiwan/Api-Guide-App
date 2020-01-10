<template>
  <div class="categories">
    <template v-if="loading"><PulseLoader :color="`#575f66`"/></template>
    <template v-else>
      <h2>This is categories page</h2>
      <ul>
        <li v-for="(category, index) in categories" :key="index">{{ category }}</li>
      </ul>
    </template>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
  name: 'categories',
  components: {
    PulseLoader,
  },
  data() {
    return {
      loading: true,
      categories: [],
    };
  },
  async created() {
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

ul {
  list-style-type: none;
}

@media (max-width: 350px) {
  .categories {
    padding-top: 200px;
  }
}
</style>
