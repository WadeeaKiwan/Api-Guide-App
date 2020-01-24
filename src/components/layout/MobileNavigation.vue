<template>
  <div id="mobile-navigation">
    <ul class="mob-navbar">
      <router-link tag="li" to="/" class="navbar-item mob-navbar-item"
        >Home</router-link
      >
      <router-link tag="li" to="/categories" class="navbar-item mob-navbar-item"
        >Categories</router-link
      >
      <router-link tag="li" to="/random" class="navbar-item mob-navbar-item"
        >Random</router-link
      >
    </ul>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "MobileNavigation"
});
</script>

<style scoped>
#mobile-navigation {
  padding-top: 10px;
}

.mob-navbar {
  display: flex;
  flex-direction: column;
  font-family: "Segoe UI", Tahoma;
  font-weight: bold;
  color: beige;
}

.mob-navbar-item {
  margin-top: 5px;
  margin-left: 5vw;
  border-radius: 15px;
}

.mob-navbar-item:hover {
  color: #5c7756;
  background-color: rgb(211, 211, 197);
}

.mob-navbar-item.router-link-exact-active {
  color: #5c7756;
  background-color: beige;
}
</style>
