<script>
import axios from 'axios'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'SearchInput',
  props: {
    randomData: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isLoading: false,
      inputWord: {
        type: Number,
        default: ''
      }
    }
  },

  watch: {
    randomData() {
      this.inputWord.input = this.randomData
      this.search(this.inputWord.input)
    }
  },
  created() {
    this.inputWord.input = this.randomData
  },

  methods: {
    ...mapActions(['fetchWord']),
    ...mapMutations(['setInputWord']),
    async search() {
      if (!this.inputWord.input) {
        return
      }

      this.setInputWord(this.inputWord.input)

      this.isLoading = true
      try {
        this.fetchWord(this.inputWord.input)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<template>
  <input
    v-on:keyup.enter="search"
    type="text"
    name="inputWord"
    id="inputWord"
    v-model="inputWord.input"
    placeholder="word..."
  />
</template>

<style scoped lang="scss">
input {
  border: 1px solid #42b883;
  margin-left: auto;
  margin-right: auto;
  width: 256px;
  max-width: 300px;
  padding: 0.5rem;
  border-radius: 1rem;
  font-size: 1rem;
  padding-left: 1rem;
  outline-style: none;
  &::placeholder {
    color: gray;
    text-align: center;
  }
}
</style>
