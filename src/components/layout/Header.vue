<template>
  <header class="header">
    <div class="container-header">
      <div class="header-title">
        <h1>API GUIDE</h1>
      </div>
      <div class="main-nav">
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
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header"
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
  color: beige;
  background-color: #2c3e50;
}

.header-title {
  font-family: "Bradley Hand ITC", sans-serif;
  font-style: italic;
  text-shadow: 2px 2px 5px beige;
  flex-grow: 1;
  align-self: center;
  display: flex;
  justify-content: flex-start;
  padding: 5px 15px;
}

.navbar {
  display: flex;
  color: #333;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 14px;
  letter-spacing: 0.5vw;
}

.navbar-item {
  color: beige;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding: 19px 10px;
}

.navbar-item:hover {
  color: #2c3e50;
  background-color: beige;
}

li.router-link-exact-active {
  color: beige;
  background-color: #687077;
}

@media (max-width: 576px) {
  .container-header {
    flex-direction: column;
  }

  .main-nav {
    width: 100%;
  }

  .navbar-item {
    width: calc(100% / 3);
  }
}
/* .header {
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

@media (max-width: 479.98px) {
  .navbar {
    flex-direction: column;
  }

  .navbar-item {
    width: 100%;
  }
} */
</style>
