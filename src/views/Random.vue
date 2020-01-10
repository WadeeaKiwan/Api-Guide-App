<template>
  <div class="random">
    <template v-if="loading">
      <PulseLoader :color="`#575f66`" />
    </template>
    <template v-else>
      <h2>This is a random API</h2>
      <ul>
        <ApiItem class="api-item" :entry="randomItem" :itemDetails="itemDetails" />
      </ul>
      <div>
        <button class="btn" @click="randomClick">Random API</button>
      </div>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiItem from "@/components/ApiItem.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "Random",
  components: {
    ApiItem,
    PulseLoader
  },
  data() {
    return {
      loading: true,
      randomItem: {},
      itemDetails: true
    };
  },
  created() {
    this.fetchRandomItem();
  },
  methods: {
    async fetchRandomItem() {
      try {
        const res = await fetch("https://api.publicapis.org/random");

        const json = await res.json();

        this.randomItem = json.entries[0];

        this.loading = false;
      } catch (err) {
        // console.error(err.message);
        throw err;
      }
    },
    randomClick() {
      this.fetchRandomItem();
    }
  }
};
</script>

<style scoped>
.random {
  padding-top: 200px;
  padding-bottom: 50px;
}

h2 {
  color: blue;
  padding-bottom: 2vw;
}

.api-item {
  min-width: 60%;
  margin: 0 auto;
}

.api-item:hover {
  cursor: default;
}

.btn {
  margin: 20px 0;
  padding: 10px;
  color: white;
  background-color: #575f66;
  border: #575f66;
}

.btn:hover {
  cursor: pointer;
  background-color: #3a3f44;
}

@media (max-width: 480px) {
  ul {
    margin: 0 5vw;
  }
}
</style>
