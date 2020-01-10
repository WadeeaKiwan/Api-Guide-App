<template>
  <!-- <li @click="onClick"> -->
  <li>
    <template v-if="itemDetails">
      <h1>{{ entry.API }}</h1>
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
        <a class="btn" :href="entry.Link" target="_blank">Go to this API</a>
      </p>
    </template>
    <template v-else>
      <h1>{{ entry.API }}</h1>
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
  name: "ApiItem",
  props: {
    entry: Object,
    itemDetails: Boolean
  }
  // methods: {
  //   onClick() {
  //     eventBus.$emit("item-selected");
  //   }
  // }
});
</script>

<style scoped>
h1 {
  font-family: cursive !important;
  font-style: italic;
  font-weight: bold;
  color: darkmagenta;
  margin-bottom: 5vh;
  font-size: 1.5em;
  word-wrap: break-word;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 15px 15px;
  padding: 1em 0;
}

b {
  color: brown;
}

a {
  color: #42b983;
}

p {
  padding-bottom: 15px;
}

.btn {
  margin: 20px 0;
  padding: 10px;
  color: white;
  background-color: #575f66;
  border: #575f66;
  text-decoration: none;
}

.btn:hover {
  cursor: pointer;
  background-color: #3a3f44;
}
</style>
