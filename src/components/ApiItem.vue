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
  padding-bottom: 15px;
  word-wrap: break-word;
  font-size: 1.5em;
}
</style>
