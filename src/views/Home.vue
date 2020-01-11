<template>
  <div class="home">
    <template v-if="loading">
      <PulseLoader :color="`#575f66`" />
    </template>
    <template v-else>
      <h2 class="home-title">API's</h2>
      <ul class="items-container">
        <ApiItem
          class="api-item"
          v-for="(randomEntry, index) in randomEntries"
          :key="index"
          :entry="randomEntry"
          @click="$route.push({ path: `ItemDetails/${randomEntry.API}` })"
          :itemDetails="itemDetails"
        />
      </ul>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiItem from "@/components/ApiItem.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "Home",
  components: {
    ApiItem,
    PulseLoader
  },
  data() {
    return {
      loading: true,
      entries: [],
      randomEntries: [],
      itemDetails: false
    };
  },
  async created() {
    try {
      const res = await fetch("https://api.publicapis.org/entries");

      const json = await res.json();

      this.entries = await json.entries;
      this.randomEntries = json.entries.sort(() => 0.5 - Math.random()).slice(0, 10);

      this.loading = false;
    } catch (err) {
      throw err;
    }
  }
};
</script>

<style>
.home {
  padding-top: 150px;
  padding-bottom: 50px;
  min-height: 1200px;
}

.home-title {
  color: navy;
  padding: 2vw;
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

@media (max-width: 350px) {
  .home {
    padding-top: 200px;
  }
}

@media (min-width: 480px) and (max-width: 767.98px) {
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
