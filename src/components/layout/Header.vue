<template>
  <header class="header">
    <div class="container-header">
      <div class="header-title">
        <router-link to="/" class="title">API GUIDE</router-link>
      </div>
      <div class="main-nav" v-if="!mobileView">
        <ul class="navbar">
          <router-link tag="li" to="/" class="navbar-item">Home</router-link>
          <router-link tag="li" to="/categories" class="navbar-item"
            >Categories</router-link
          >
          <router-link tag="li" to="/random" class="navbar-item"
            >Random</router-link
          >
        </ul>
      </div>
      <div id="navigation-icon" v-if="mobileView" @click="toggleNav">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  props: {
    mobileView: {
      type: Boolean,
      required: true
    },
    showNav: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleNav() {
      this.$emit("nav-toggled", this.showNav);
    }
  }
});
</script>

<style>
.container-header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  line-height: 1.4;
  position: fixed;
  min-width: 100%;
  z-index: 1;
  font-family: "Segoe UI", Tahoma;
  top: 0;
  left: 0;
  background-color: beige;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.header-title {
  flex-grow: 1;
  align-self: center;
  display: flex;
  justify-content: flex-start;
  padding: 0 15px;
  font-family: "Gloria Hallelujah", cursive;
}

.header-title a {
  text-decoration: none;
  margin: 0;
  font-weight: bold;
  font-size: 1.5em;
  color: #5c7756;
}

.header-title a:hover {
  color: black;
}

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.4vw;
}

.navbar-item {
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding: 10px 10px;
}

.navbar-item:hover {
  color: black;
  background-color: #6bb868;
  transition: ease-in 0.5s;
}

li.router-link-exact-active {
  color: beige;
  background-color: #5c7756;
}

li.router-link-exact-active:hover {
  color: beige;
  background-color: #5c7756;
}

#navigation-icon {
  margin-right: 5vw;
  cursor: pointer;
}

#navigation-icon i {
  font-size: 1.6em;
  color: #5c7756;
  padding: 7px 10px;
}

#navigation-icon i:hover {
  color: black;
}
</style>
