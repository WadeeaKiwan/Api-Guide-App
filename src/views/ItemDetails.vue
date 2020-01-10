<template>
  <div class="item-details-page">
    <div>{{ $route.params.API }}</div>
    <ul class="items-container">
      <ApiItem
        class="card"
        :key="index"
        :entry="randomEntry"
        @click="this.selectItem(entry)"
        :itemDetails="!itemDetails"
      />
    </ul>
    <ul>
      <ApiItem
        class="card"
        v-for="(entry, index) in entries
          .filter(relatedEntry => relatedEntry.Category === entry.Category)
          .slice(0, 3)"
        :key="index"
        :entry="relatedEntry"
        @click="this.selectItem(entry)"
        :itemDetails="itemDetails"
      />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiItem from "@/components/ApiItem.vue";

export default {
  name: "ItemDetails",
  components: {
    ApiItem
  },
  props: {
    randomEntry: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      entries: [],
      itemDetails: false,
      selectedItem: {}
    };
  }
  // async created() {
  //   try {
  //     const res = await fetch('');
  //   } catch (err) {
  //     err => console.log(err);
  //   }
  // },
};
</script>

<style>
.item-details-page {
  padding-top: 150px;
}
</style>
