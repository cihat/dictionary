<script>
// @ is an alias to /src
import CommonWords from "@/components/CommonWords/CommonWords";
import Search from "@/components/Search/Search";

export default {
  name: "Home",
  data() {
    return {
      searchWord: null,
    };
  },
  components: {
    CommonWords,
    Search,
  },
  methods: {
    searchRandomWord(word) {
      this.searchWord = word.word;
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <Search :randomData="searchWord" />
      <CommonWords class="get-common-words" @randomWord="searchRandomWord" />
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  .container {
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .get-common-words {
      flex: 2;
    }
  }
}

@media only screen and (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>