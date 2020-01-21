<template>
  <div class="pagination-container">
    <ul class="items-container">
      <ApiItem
        class="api-item"
        v-for="(entry, index) in paginatedEntries"
        :key="index"
        :entry="entry"
        :itemDetails="itemDetails"
      />
    </ul>

    <ul class="pagination" v-if="entries.length > 10 || currentPage > 1">
      <li class="pagination-item" title="First Page">
        <button
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
        >
          <i class="fas fa-chevron-left"></i><i class="fas fa-chevron-left"></i>
        </button>
      </li>

      <li class="pagination-item" title="Previous Page">
        <button
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
      </li>

      <li class="pagination-item" v-for="(page, index) in pages" :key="index">
        <button
          type="button"
          @click="onClickPage(page.number)"
          :class="{ active: isPageActive(page.number) }"
        >
          {{ page.number }}
        </button>
      </li>

      <li class="pagination-item" title="Next Page">
        <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
          <i class="fas fa-chevron-right"></i>
        </button>
      </li>

      <li class="pagination-item" title="Last Page">
        <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
          <i class="fas fa-chevron-right"></i>
          <i class="fas fa-chevron-right"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ApiItem from "./ApiItem.vue";

export default Vue.extend({
  name: "ApiItemsPagination",
  components: {
    ApiItem
  },
  props: {
    entries: {
      type: Array,
      required: true
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5
    },
    totalPages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    itemDetails: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    // Show data by pieces
    paginatedEntries() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = start + this.perPage;
      return this.entries.slice(start, end);
    },
    startPage(): number {
      if (this.currentPage === 1) return 1;
      if (this.currentPage === this.totalPages)
        return (
          this.totalPages -
          this.maxVisibleButtons +
          (this.maxVisibleButtons - 1)
        );
      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        (this as any).startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      let range = [];
      for (let i = (this as any).startPage; i <= (this as any).endPage; i++) {
        range.push({
          number: i,
          isDisabled: i === this.currentPage
        });
      }
      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    }
  },
  methods: {
    // Navigation by clicking control buttons
    onClickFirstPage() {
      this.$emit("page-changed", 1);
    },
    onClickPreviousPage() {
      this.$emit("page-changed", this.currentPage - 1);
    },
    onClickPage(page: number) {
      this.$emit("page-changed", page);
    },
    onClickNextPage() {
      this.$emit("page-changed", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("page-changed", this.totalPages);
    },
    isPageActive(page: number) {
      return this.currentPage === page;
    },
    onChangePage(page: number) {
      (this as any).currentPage = page;
    }
  }
});
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-top: 3rem;
  border-radius: 1rem;
  width: 95%;
}

.pagination-item {
  align-self: center;
}

.pagination-item button {
  padding: 0.2rem 0.3rem;
  font-size: 1.1em;
  border: none;
  border-radius: 0.25rem;
  background: none;
}

.pagination-item button:hover {
  cursor: pointer;
  background-color: silver;
  font-size: 1.5em;
  transition: ease-in 0.3s;
}

.pagination-item button[disabled="disabled"] {
  color: silver;
  cursor: default;
}

.pagination-item button[disabled="disabled"]:hover {
  cursor: default;
  background-color: transparent;
  font-size: 1.1em;
  transition: none;
}

.pagination-item button.active {
  color: #7ca971;
  font-weight: bold;
  font-size: 1.5em;
  text-shadow: 1px 1px black;
}

@media (min-width: 390px) and (max-width: 575.98px) {
  .pagination {
    max-width: 80%;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .pagination {
    max-width: 65%;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .pagination {
    max-width: 45%;
  }
}

@media (min-width: 992px) {
  .pagination {
    max-width: 35%;
  }
}
</style>
