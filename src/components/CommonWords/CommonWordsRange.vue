<script>
import { mapState } from 'vuex'
import CommonWordsHide from '@/components/CommonWords/CommonWordsHide'

export default {
  name: 'CommonWordsRange',
  data() {
    return {
      words: [[], []],
      randomWordEnglish: '',
      randomWordTurkish: '',
      intervalStarting: 0,
      intervalFinish: 1000
    }
  },
  computed: {
    ...mapState(["dummyWords"]),
  },
  components: {
    CommonWordsHide
  },
  methods: {
    getRandomWord() {
      let getTurkishIndex
      if (
        (this.intervalStarting <= 0 && this.intervalStarting >= 1000) ||
        (this.intervalFinish <= 0 && this.intervalFinish >= 1000)
      ) {
        this.intervalStarting = 0
        this.intervalFinish = 1000
        alert('Please enter values between 0 and 1000')
      }
      this.randomWordEnglish =
        this.words[0][
        Math.floor(
          Math.random() *
          (this.intervalFinish - Number(this.intervalStarting)) +
          Number(this.intervalStarting)
        )
        ]
      this.words[0].filter((word, index) => {
        if (word === this.randomWordEnglish) {
          getTurkishIndex = index
        }
      })
      this.randomWordTurkish = this.words[1][getTurkishIndex]

      this.$emit('randomWord', {
        word: this.randomWordEnglish
      })
    }
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
  <div class="CommonWordsRange">
    <div class="inputRange">
      <span>Please enter a initial value</span>
      <output id="amount" name="amount" for="rangeInput">0</output>
      <input type="range" v-model="intervalStarting" placeholder="Please enter a initial value" min="0" max="1000"
        oninput="amount.value=rangeInput.value" id="rangeInput" name="rangeInput" />
      <span>Please enter a end value</span>
      <output id="amount2" name="amount2" for="rangeInput2">1000</output>
      <input type="range" v-model="intervalFinish" placeholder="Please enter a end value" max="1000" min="0"
        oninput="amount2.value=rangeInput2.value" id="rangeInput2" name="rangeInput2" />
      <button class="reminder_button" @click="getRandomWord">Reminder</button>
    </div>
    <CommonWordsHide :randomWordEnglish="randomWordEnglish" :randomWordTurkish="randomWordTurkish" />
  </div>
</template>

<style scoped lang="scss">
.CommonWordsRange {
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 50px;
  // min-width: 30vw;
  margin-bottom: 0.5rem;

  .area {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    span {
      font-size: 2rem;
      text-transform: lowercase;
    }

    i {
      font-size: 3rem;
      margin: auto 1rem;
    }
  }

  button.reminder_button {
    width: 8rem;
    font-size: 1rem;
    margin: 0.4rem auto;
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #000;
    font-weight: 600;
    transition: 1s color, 1s background-color;

    &:hover {
      background-color: #42b883;
      color: #fff;
    }
  }

  .inputRange {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
    width: 100%;

    input {
      width: 100%;
      min-width: 300px;
      max-width: 500px;
      height: 0.75rem;
      border-radius: 1.5rem;
      max-width: 10rem;
      padding: 0.5rem;
      font-weight: 500;
      outline-style: none;
      font-size: 1rem;
    }
  }
}


input[type=range] {
  height: 38px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000;
  background: #42b883;
  border-radius: 5px;
  border: 1px solid #000000;
}

input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #000000;
  border: 1px solid #000000;
  height: 30px;
  width: 15px;
  border-radius: 5px;
  background: #FFFFFF;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -11px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #42b883;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000;
  background: #42b883;
  border-radius: 5px;
  border: 1px solid #000000;
}

input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000;
  border: 1px solid #000000;
  height: 30px;
  width: 15px;
  border-radius: 5px;
  background: #FFFFFF;
  cursor: pointer;
}

input[type=range]::-ms-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type=range]::-ms-fill-lower {
  background: #42b883;
  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #000000;
}

input[type=range]::-ms-fill-upper {
  background: #42b883;
  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #000000;
}

input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 1px 1px 1px #000000;
  border: 1px solid #000000;
  height: 30px;
  width: 15px;
  border-radius: 5px;
  background: #FFFFFF;
  cursor: pointer;
}

input[type=range]:focus::-ms-fill-lower {
  background: #42b883;
}

input[type=range]:focus::-ms-fill-upper {
  background: #42b883;
}
</style>