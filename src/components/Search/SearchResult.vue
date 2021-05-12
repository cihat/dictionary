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
  <h1 v-if="inputWord.input">{{ inputWord.input }}</h1>
  <div class="result">
    <NullMessage :inputWord="inputWord" />
    <SearchResultCarts :inputWord="inputWord" />
  </div>
</template>

<style scoped lang="scss">
.result {
  h1.inputValue {
    color: #42b883;
    text-transform: uppercase;
    font-size: 1.5rem;
    border-radius: 1rem;
  }
}
</style>