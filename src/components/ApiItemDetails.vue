<template>
  <li>
    <template v-if="itemDetails">
      <h3>{{ entry.API }}</h3>
      <p>
        <b>Category:</b>
        {{ entry.Category }}
      </p>
      <p>
        <b>Description:</b>
        {{ entry.Description }}
      </p>
      <p v-show="entry.Auth !== ''">
        <b>Authentication:</b>
        {{ entry.Auth }}
      </p>
      <p>
        <b>HTTPS Support:</b>
        {{ entry.HTTPS }}
      </p>
      <p>
        <b>Cors Support:</b>
        {{ entry.Cors }}
      </p>
      <p>
        <a class="btn-item" :href="entry.Link" target="_blank"
          >Go to this API</a
        >
      </p>
    </template>
    <template v-else>
      <h3>{{ entry.API }}</h3>
      <p>
        <b>Category:</b>
        {{ entry.Category }}
      </p>
    </template>
  </li>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ApiItemDetails",
  props: {
    entry: Object,
    itemDetails: Boolean
  }
});
</script>

<style scoped>
h3 {
  font-size: 1.5em;
  word-wrap: break-word;
  padding-bottom: 15px;
}

p {
  padding-top: 10px;
  padding-bottom: 10px;
}

p:last-child {
  margin-top: 10px;
}

.btn-item {
  margin: 20px 0;
  padding: 5px;
  color: beige;
  background-color: #5c7756;
  text-decoration: none;
  border-radius: 5px;
}

.btn-item:hover {
  cursor: pointer;
  background-color: #6bb868;
  color: #1f241e;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
