<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header,
    Footer
  }
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("https://backgrounddownload.com/wp-content/uploads/2018/09/brown-simple-background-6.jpg");
  background-size: cover;
  background-attachment: fixed;
}

.container {
  padding: 200px 50px 50px;
  min-height: 90vh;
}

ul {
  list-style-type: none;
}
</style>
