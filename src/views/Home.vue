<script>
// @ is an alias to /src
import CommonWords from '@/components/CommonWords'
import Search from '@/components/Search'

export default {
  name: 'Home',
  data() {
    return {
      searchWord: null
    }
  },
  components: {
    CommonWords,
    Search
  },
  methods: {
    searchRandomWord(word) {
      this.searchWord = word.word
    }
  }
}
</script>

<template>
  <div id="app container">
    <div class="container grid">
      <Search :randomData="searchWord" class="col col-12" />
      <CommonWords class="get-common-words col col-12" @randomWord="searchRandomWord" />
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  .container {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .get-common-words {
      flex: 2;
    }
  }
}
</style>