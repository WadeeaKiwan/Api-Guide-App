<template>
  <div class="not-found container">
    <h1>
      404 Page Not Found
      <span>!!!</span>
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NotFound"
});
</script>

<style scoped>
.not-found {
  padding-top: 300px;
}

h1 {
  text-align: center;
  font-weight: bold;
}

span {
  color: red;
}
</style>
