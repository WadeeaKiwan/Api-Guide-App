<template>
  <div class="not-found">
    <h1>
      404 Page Not Found
      <span>!!!</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
.not-found {
  padding-top: 150px;
}

h1 {
  text-align: center;
  font-weight: bold;
}

span {
  color: red;
}
</style>
