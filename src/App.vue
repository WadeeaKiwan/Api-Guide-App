<template>
  <div id="app">
    <MobileNavigation />
    <div class="content" :class="{ open: showNav }">
      <Header
        :mobileView="mobileView"
        :showNav="showNav"
        @nav-toggled="toggleNav"
      />
      <main>
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import MobileNavigation from "./components/layout/MobileNavigation.vue";

import { AppData } from "./types";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Footer,
    MobileNavigation
  },
  data(): AppData {
    return {
      mobileView: true,
      showNav: false
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 576;
    },
    toggleNav() {
      this.showNav = !this.showNav;
    }
  },
  watch: {
    $route() {
      this.showNav = false;
    }
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  }
});
</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Neucha", cursive;
  animation: appearance 5s;
}

#app {
  position: relative;
  min-width: 100%;
  min-height: 100vh;
  background-color: #5c7756;
  text-align: center;
}

.content {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  transition: 1s transform cubic-bezier(0, 0.18, 0.29, 1);
}

.container {
  padding: 10vh 5vw;
  width: 100%;
  min-height: 85vh;
  position: relative;
}

.open {
  transform: translateY(170px);
}

ul {
  list-style-type: none;
}

.spinner {
  position: absolute;
  top: 40%;
  left: 50%;
}

@keyframes appearance {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
