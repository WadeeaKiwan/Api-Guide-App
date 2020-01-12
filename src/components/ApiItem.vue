<template>
  <router-link tag="li" :to="{ path: `/item-details/${entry.API}` }">
    <h3>{{ entry.API }}</h3>
    <p>
      <b>Category:</b>
      {{ entry.Category }}
    </p>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ApiItem",
  props: {
    entry: {
      type: Object,
      required: true
    }
  }
});
</script>

<style scoped>
h3 {
  font-family: cursive, sans-serif;
  font-style: italic;
  font-weight: bold;
  color: darkmagenta;
  margin-bottom: 3vh;
  font-size: 1.5em;
  word-wrap: break-word;
}

li {
  display: block;
  margin: 15px 15px;
  padding: 1em 0;
}

b {
  color: brown;
}
</style>
