<template>
  <footer class="footer">
    <h4>API GUIDE</h4>
    <ul class="site-map">
      <li
        class="site-map-item"
        v-for="(siteMapItem, index) in siteMapList"
        :key="index"
      >
        <a class="site-map-link" :href="siteMapItem.path">{{
          siteMapItem.name
        }}</a>
      </li>
    </ul>
    <p>Copyright &copy; Wadeea Kiwan 2020</p>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "Footer",
  methods: {
    ...mapActions(["fetchSitemapList"])
  },
  computed: {
    ...mapGetters(["siteMapList"])
  },
  async created() {
    await this.fetchSitemapList();
  }
});
</script>

<style>
.footer {
  background-color: #2c3e50;
  color: beige;
  padding: 0 15px;
}

.footer h4 {
  font-family: "Bradley Hand ITC", sans-serif;
  font-style: italic;
  font-size: 1.5em;
  text-shadow: 2px 2px 5px beige;
  padding: 30px 15px 0;
}

.site-map {
  display: flex;
  justify-content: center;
  padding: 3vh;
}

.site-map-item {
  padding: 0 2vh;
  letter-spacing: 0.5vw;
  text-transform: uppercase;
}

.site-map-link {
  color: beige;
  text-decoration: none;
}

.site-map-link:hover {
  color: rgb(177, 177, 162);
  text-decoration: underline;
}

.footer p {
  padding: 5px 0;
  border-top: solid 1px beige;
}

@media (max-width: 479.98px) {
  .site-map {
    flex-direction: column;
  }

  .site-map-item {
    padding: 1vh 0;
  }
}
</style>
