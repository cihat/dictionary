<script>
import Youglish from '@/components/Youglish'
import CommonWordsList from '@/components/CommonWords/CommonWordsList'
import CommonWordsRange from '@/components/CommonWords/CommonWordsRange'
import '../../styles/index.scss'

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
    <div class="container">
      <div class="words-container grid">
        <div class="wrapper col col-12 col-sm-6 col-md-5">
          <CommonWordsList :randomWord="randomWordEnglish" />
        </div>
        <div class="range-api col col-12 col-sm-6 col-md-7">
          <CommonWordsRange @randomWord="randomWord" />
          <Youglish class="youglish" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#commonWords {
  padding: 0px;
  border: 1px solid #42b883;
  background: rgba(#42b883, 0.2);
  border-radius: 5px;
  width: inherit;
  margin-bottom: 1rem;

  .words-container {
    display: flex;
    max-height: 95vh;

    .range-api {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px;
      height: 100%;
      max-height: 100%;
      margin-bottom: 0;
    }
  }
}
</style>
