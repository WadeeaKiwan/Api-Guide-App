<template>
  <header class="header">
    <h1 class="header-title">API GUIDE</h1>
    <ul class="navbar">
      <router-link tag="li" to="/" class="navbar-item">Home</router-link>
      <router-link tag="li" to="/categories" class="navbar-item">Categories</router-link>
      <router-link tag="li" to="/random" class="navbar-item">Random</router-link>
    </ul>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  name: "Header"
};
</script>

<style>
.header {
  position: fixed;
  min-width: 100%;
  z-index: 1;
}

h1 {
  min-width: 100%;
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
}

.header-title {
  cursor: none;
  font-size: 2em;
  color: yellow;
  font-family: cursive, sans-serif;
  text-shadow: 2px 2px 5px white;
  background-color: #575f66;
  padding: 1.5vw;
}

.navbar {
  display: flex;
  justify-content: center;
  padding: 0;
  background-color: rgb(8, 7, 7);
}

.navbar-item {
  padding: 10px;
  font-weight: bold;
  font-size: 1.2em;
  color: white;
  cursor: pointer;
  border: #575f66 solid 1px;
  opacity: 0.7;
}

.navbar-item:hover {
  opacity: 1;
  background-color: #575f66;
}

li.router-link-exact-active {
  color: #42b983;
  background-color: #575f66;
}

@media (max-width: 425px) {
  .navbar {
    flex-direction: column;
  }

  .navbar-item {
    width: 100%;
  }
}
</style>
