<template>
  <footer class="footer">
    <div class="footer-container">
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
    </div>
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
  position: relative;
  color: beige;
  background-color: #5c7756;
  padding: 0 15px;
  text-align: center;
  font-family: "Segoe UI", Tahoma;
  height: 175px;
}

.footer-container {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
}

.footer h4 {
  font-family: "Gloria Hallelujah", cursive;
  font-size: 1.5em;
  padding: 30px 15px 0;
}

.site-map {
  display: flex;
  justify-content: center;
  padding: 3vh;
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
  transition: ease-in 0.2s;
}

.footer p {
  padding: 5px 0;
  border-top: solid 1px beige;
}

@media (max-width: 576px) {
  .footer {
    height: 275px;
  }

  .site-map {
    flex-direction: column;
  }

  .site-map-item {
    padding: 1vh 0;
  }
}
</style>
