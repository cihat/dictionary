<script>
import SearchResult from "@/components/Search/SearchResult";
import SearchInput from "@/components/Search/SearchInput";

export default {
  components: {
    SearchResult,
    SearchInput,
  },
  data() {
    return {
      inputWord: {
        input: "",
        wordData: {},
      },
    };
  },
  props: {
    randomData: String,
  },
};
</script>

<template >
  <div id="search">
    <div class="container">
      <h1 class="title">Dictionary</h1>
      <div class="form">
        <SearchInput :inputWord="inputWord" :randomData="randomData" />
        <SearchResult :inputWord="inputWord" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
#search {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  min-width: 170px;
  margin-right: .5rem;
  height: 95vh;
  max-height: 95vh;
  overflow: auto;
  margin-bottom: 1rem;

  .container {
    flex: 1;
    overflow-y: auto;
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: .2rem;
    padding-right: .2rem;
    

    .title {
      margin-top: .5rem;
      margin-bottom: .5rem;
      font-size: 2.25rem;
      color: #42b883;
    }

    .form {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      margin-top: .5rem;
    }

    .translate_word {
      font-size: 3rem;
      margin: 2.5rem auto;
    }

    .hide_translate_word {
      cursor: pointer;
      display: inline;
      transition: 1ms display;
    }
  }
}
</style>