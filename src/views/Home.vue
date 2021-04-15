<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import getCommonWords from "@/components/getCommonWords";
import Search from "@/components/Search";

export default {
  name: "Home",
  data() {
    return {
      searchWord: null,
    };
  },
  components: {
    HelloWorld,
    getCommonWords,
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
      <getCommonWords class="get-common-words" @randomWord="searchRandomWord" />
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
    align-items: center;

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