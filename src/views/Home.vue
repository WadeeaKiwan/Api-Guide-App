<template>
  <div class="container">
    <template v-if="loading">
      <PulseLoader class="spinner" :color="`#7ca971`" />
    </template>
    <template v-else>
      <h2 class="home-title">API's</h2>
      <div class="btn-container">
        <span>Sort by: </span>
        <button class="btn" type="button" @click="orderDefault">
          Default
        </button>
        <button class="btn" type="button" @click="sortAZ">
          A to Z
        </button>
        <button class="btn" type="button" @click="sortZA">
          Z to A
        </button>
      </div>
      <ApiItemsPagination
        :entries="allEntries"
        :totalPages="Math.ceil(allEntries.length / 10)"
        :total="allEntries.length"
        :perPage="10"
        :currentPage="currentPage"
        @page-changed="onPageChange"
        :itemDetails="itemDetails"
      />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ is an alias to /src
import ApiItemsPagination from "@/components/ApiItemsPagination.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import { mapGetters, mapActions } from "vuex";

import { HomeData } from "../types";
import { Entry } from "../types";

export default Vue.extend({
  name: "Home",
  components: {
    ApiItemsPagination,
    PulseLoader
  },
  data(): HomeData {
    return {
      loading: true,
      itemDetails: true,
      currentPage: 1
    };
  },
  methods: {
    ...mapActions(["getEntries"]),
    onPageChange(page: number): void {
      this.currentPage = page;
    },
    orderDefault(): void {
      this.getEntries();
    },
    sortAZ(): void {
      this.allEntries.sort((a: any, b: any) => a.API.localeCompare(b.API));
    },
    sortZA(): void {
      this.allEntries
        .sort((a: any, b: any) => a.API.localeCompare(b.API))
        .reverse();
    }
  },
  computed: {
    ...mapGetters(["allEntries"])
  },
  async created() {
    try {
      // Call the action `getEntries` that retrieve data from the Api
      await this.getEntries();

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

.btn-container {
  text-align: left;
}

.btn {
  margin: 5px 5px;
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
  transition: ease-in-out 0.4s;
}

.items-container {
  display: flex;
  flex-wrap: wrap;
}

.api-item {
  width: 100%;
  background-color: beige;
  color: #5c7756;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
  padding: 2vw;
  margin-top: 30px;
}

.api-item:hover {
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: rgb(245, 245, 220);
  background-color: #5c7756;
  transition: ease-in 0.3s;
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
