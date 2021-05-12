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
.form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  input {
    border: 1px solid #000;
    width: 16rem;
    height: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    font-size: 1rem;
    outline-style: none;
  }
  button {
    width: 6rem;
    font-size: 1rem;
    padding: 0.75rem;
    border-radius: 1rem;
    cursor: pointer;
    margin: 0.4rem;
    color: #000;
    &:hover {
      background-color: #42b883;
      color: #fff;
    }
  }
  h1 {
    text-transform: uppercase;
    margin: 0px;
    margin-top: 0.5rem;
    font-size: 1rem;
  }
  .result {
    h1.inputValue {
      color: #42b883;
      text-transform: uppercase;
      font-size: 1.5rem;
      border-radius: 1rem;
    }
  }
}
</style>