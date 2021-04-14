<script>
import getWords from "../store/data/words.json";
export default {
  data() {
    return {
      words: [[], []],
      randomWordEnglish: "",
      randomWordTurkish: "",
      intervalStarting: 0,
      intervalFinish: 1000,
    };
  },
  props: {
    randomEnglishWord: String,
  },
  created() {
    for (let word in getWords) {
      this.words[0].push(word);
      this.words[1].push(getWords[word]);
    }
  },
  methods: {
    getRandomWord() {
      let getTurkishIndex;
      if (
        (this.intervalStarting <= 0 && this.intervalStarting >= 1000) ||
        (this.intervalFinish <= 0 && this.intervalFinish >= 1000)
      ) {
        this.intervalStarting = 0;
        this.intervalFinish = 1000;
        alert("Please enter values between 0 and 1000");
      }
      this.randomWordEnglish = this.words[0][
        Math.floor(
          Math.random() *
            (this.intervalFinish - Number(this.intervalStarting)) +
            Number(this.intervalStarting)
        )
      ];
      this.words[0].filter((word, index) => {
        if (word === this.randomWordEnglish) {
          getTurkishIndex = index;
        }
      });
      this.randomWordTurkish = this.words[1][getTurkishIndex];
    },
  },
};
</script>

<template>
  <div id="commonWords">
    <div class="left">
      <div class="left-container">
        <div class="left-side">
          <h1>Word List</h1>
          <ol class="words_ol">
            <li v-for="(word, index) in 1000" :key="index">
              <span>{{ words[0][index] }}</span> :
              <span>{{ words[1][index] }}</span>
            </li>
          </ol>
        </div>
        <div class="right-side">
          <h1>Word Box</h1>
          <div class="wordTranslate">
            <div class="area">
              <span>Word</span><i class="fas fa-long-arrow-alt-right"></i
              ><span>Kelime</span>
            </div>
            <button class="reminder_button" @click="getRandomWord">
              Remind
            </button>
            <div class="inputRange">
              <span>Please enter a initial value</span>
              <input
                type="range"
                v-model="intervalStarting"
                placeholder="Please enter a initial value"
                min="0"
                max="1000"
                oninput="amount.value=rangeInput.value"
                id="rangeInput"
                name="rangeInput"
              />
              <output id="amount" name="amount" for="rangeInput">0</output>
              <span>Please enter a end value</span>
              <input
                type="range"
                v-model="intervalFinish"
                placeholder="Please enter a end value"
                max="1000"
                min="0"
                oninput="amount2.value=rangeInput2.value"
                id="rangeInput2"
                name="rangeInput2"
              />
              <output id="amount2" name="amount2" for="rangeInput2"
                >1000</output
              >
            </div>
            <div class="hide_translate_word">
              <h3 class="translate_word">
                {{ randomWordEnglish }}
                <i class="fas fa-long-arrow-alt-right"></i>
                {{ randomWordTurkish }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#commonWords {
  border: 1px solid #42b883;
  height: 95vh;
  .left {
    .left-container {
      display: flex;
      .left-side {
        padding: 0.5rem;
        text-align: left;
        margin-right: 20px;
        margin: auto;
        flex: 1;
        h1 {
          margin-bottom: 1rem;
          color: #42b883;
          font: bold;
          text-align: center;
        }
        ol.words_ol {
          margin: auto;
          min-height: 500px;
          height: 80vh;
          overflow-y: scroll;

          li {
            border-bottom: 1px solid black;
            min-height: 1.6rem;
            &:first-child {
              margin-top: 1rem;
            }
            margin: auto auto auto 1rem;
          }
        }
      }
      .right-side {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        height: inherit;

        h1 {
          color: #42b883;
          margin: 0.5rem 0;
        }
        .wordTranslate {
          display: flex;
          flex-direction: column;
          text-align: center;
          height: 50vh;
          margin-top: 3rem;
          .area {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
            span {
              font-size: 2rem;
            }
            i {
              font-size: 3rem;
              margin: auto 1rem;
            }
          }
          button {
            width: 8rem;
            font-size: 1.5rem;
            margin: 1rem auto;
            padding: 1rem;
            border-radius: 1rem;
            cursor: pointer;

            color: #000;
            margin-bottom: 2rem;
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
            input {
              height: 0.75rem;
              border-radius: 1.5rem;
              max-width: 10rem;
              padding: 1rem;
              font-weight: 500;
              outline-style: none;
              font-size: 1rem;
            }
          }

          .translate_word {
            font-size: 1.5rem;
            margin: 2.5rem auto;
          }

          .hide_translate_word {
            cursor: pointer;
            display: inline;
            transition: 1ms display;
            // &:visited {
            //   display: none;
            // }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 968px) {
  .left-container {
    display: flex;
    flex-direction: column;
  }
}
</style>