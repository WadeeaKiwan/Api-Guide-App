<template>
  <footer class="footer">
    <ul class="site-map">
      <li class="site-map-item" v-for="(siteMapItem, index) in siteMapList" :key="index">
        <a class="site-map-link" :href="siteMapItem.path">{{ siteMapItem.name }}</a>
      </li>
    </ul>
    <p>Copyright &copy; Wadeea Kiwan 2020</p>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

import { FooterData } from "../../types";

export default Vue.extend({
  name: "Footer",
  data(): FooterData {
    return {
      siteMapList: []
    };
  },
  methods: {
    getRoutesList(
      routes: { path: string; name: string }[],
      pre: string
    ): { path: string; name: string }[] {
      return routes.reduce(
        (
          array: { path: string; name: string }[],
          route: { path: string; name: string }
        ) => {
          const path = `${pre}${route.path}`;

          if (route.path !== "*" && route.name !== "ItemDetails") {
            array.push({ name: route.name, path });
          }

          if (route.children) {
            array.push(...this.getRoutesList(route.children, `${path}/`));
          }

          return array;
        },
        []
      );
    }
  },
  async created() {
    this.siteMapList = await this.getRoutesList(
      this.$router.options.routes,
      "http://localhost:8080"
    );
    console.log(this.$router);
  }
});
</script>

<style>
.footer {
  background-color: #575f66;
  color: white;
  padding: 10px;
  font-size: 1.2em;
}

.site-map {
  display: flex;
  justify-content: center;
  padding: 5vh;
}

.site-map-item {
  padding: 1vh;
}

.site-map-link {
  color: beige;
}

.site-map-link:hover {
  color: rgb(202, 202, 187);
}

@media (max-width: 479.98px) {
  .site-map {
    flex-direction: column;
  }
}
</style>
