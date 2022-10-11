<script>
import { mapState } from 'vuex'

export default {
  name: 'CommonWordsList',
  data() {
    return {
      words: [[], []],
    }
  },
  props: {
    randomWord: ''
  },
  computed: {
    ...mapState(["dummyWords"]),
  },
  created() {
    for (let word in this.dummyWords) {
      this.words[0].push(word)
      this.words[1].push(this.dummyWords[word])
    }
  }
}
</script>

<template>
  <ol class="words-list">
    <li v-for="(word, index) in 1000" :key="index" :class="[{ active: index === words[0].indexOf(randomWord) }]">
      <span>{{ words[0][index] }}</span> :
      <span>{{ words[1][index] }}</span>
    </li>
  </ol>
</template>

<style scoped lang="scss">
@import '../../styles/mixins/_mixins.scss';

.container {
  padding: 0;
  text-align: left;
  margin: 0;
  flex: 0.6;
  height: 100%;
  width: 100%;
  min-width: 300px;

  @include respond-above(md) {
    min-width: 300px;
  }

  ol.words-list {
    max-height: 95vh;
    margin: auto;
    min-height: 500px;
    overflow-y: auto;
    padding-left: 28px;

    li {
      line-height: 1.25rem;
      letter-spacing: 0.75px;
      border-bottom: 0.5px solid rgb(32, 216, 136);

      span {
        font-weight: 600;
        font-size: 1rem;
      }

      &:first-child {
        margin-top: 1rem;
      }

      margin: auto auto auto 1rem;
    }
  }
}

.active {
  font-weight: 700;
  color: red;
  transition: all 0.5s;
}

.errorClass {
  background-color: pink;
}
</style>