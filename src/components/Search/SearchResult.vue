<script>
import NullMessage from "@/components/NullMessage";
import SearchResultCarts from "@/components/Search/SearchResultCarts";

export default {
  name: "SearchResult",
  components: {
    NullMessage,
    SearchResultCarts,
  },
  data() {
    return {
      key: "value",
    };
  },
  props: {
    inputWord: {
      type: String,
      default: "",
    },
    inputWord: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <h2 v-if="inputWord.input">{{ inputWord.input }}</h2>
  <div class="result">
    <NullMessage :inputWord="inputWord" />
    <SearchResultCarts :inputWord="inputWord" />
  </div>
</template>

<style scoped lang="scss">
h2 {
  color: #42b883;
  text-transform: uppercase;
  font-size: 1.5rem;
  border-radius: 1rem;
  margin-top: 8px;
  margin-bottom: 4px;
}
</style>