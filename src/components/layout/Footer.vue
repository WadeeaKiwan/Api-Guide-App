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
  color: beige;
  background-color: #5c7756;
}

.footer h4 {
  font-family: "Gloria Hallelujah", cursive;
  font-size: 1.5em;
  padding: 30px 15px 0;
}

.site-map {
  display: flex;
  justify-content: center;
  padding: 3vh 20vw;
}

.site-map-item {
  padding: 0 2vh;
  letter-spacing: 0.4vw;
  text-transform: uppercase;
}

.site-map-link {
  color: beige;
  text-decoration: none;
}

.site-map-link:hover {
  color: black;
  text-decoration: underline;
}

.footer p {
  padding: 5px 0;
  border-top: solid 1px beige;
}

@media (max-width: 576px) {
  .site-map {
    flex-direction: column;
  }

  .site-map-item {
    padding: 1vh 0;
  }
}
</style>
