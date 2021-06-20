<script>
import getWords from '@/data/words.json'
import Youglish from '@/components/Youglish'
import CommonWordsList from '@/components/CommonWords/CommonWordsList'
import CommonWordsRange from '@/components/CommonWords/CommonWordsRange'

export default {
  name: 'CommonWords',
  components: {
    Youglish,
    CommonWordsList,
    CommonWordsRange
  },

  data() {
    return {
      words: [[], []],
      randomWordEnglish: ''
    }
  },
  props: {
    randomEnglishWord: String
  },
  created() {
    for (let word in getWords) {
      this.words[0].push(word)
      this.words[1].push(getWords[word])
    }
  },
  methods: {
    randomWord(random) {
      this.randomWordEnglish = random.word
      this.$emit('randomWord', {
        word: this.randomWordEnglish
      })
    }
  }
}
</script>

<template>
  <div id="commonWords">
    <div class="words-container">
      <CommonWordsList :words="words" />
      <div class="range-api">
        <CommonWordsRange @randomWord="randomWord" />
        <Youglish class="youglish" :word="randomWordEnglish" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#commonWords {
  border: 1px solid #42b883;
  border-radius: 5px;
  width: inherit;
  .words-container {
    display: flex;
    height: 95vh;

    .range-api {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      max-height: 100%;
      border-left: 1px solid #42b883;
      border-bottom: 1px solid #42b883;
      margin-bottom: 0;
    }
  }
}
</style>