<script>
import NullMessage from '@/components/NullMessage'
import SearchResultCarts from '@/components/Search/SearchResultCarts'
import { mapState } from 'vuex'

export default {
  name: 'SearchResult',
  components: {
    NullMessage,
    SearchResultCarts
  },
  data() {
    return {
      isLoading: false
    }
  },
  props: {
    inputWord: {
      type: String,
      default: ''
    },
    loading: false
  },
  computed: {
    ...mapState(['wordData'])
  }
}
</script>

<template>
  <h2 v-if="this.wordData.word">{{ this.wordData.word }}</h2>
  <div class="result">
    <NullMessage
      :inputWord="this.wordData.word"
      v-if="!this.wordData.definitions"
    />
    <SearchResultCarts v-else :inputWord="this.wordData.definitions" />
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
.result {
  width: 100%;
}
</style>
