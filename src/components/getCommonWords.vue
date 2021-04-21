<script>
import getWords from "../store/data/words.json";
import Youglish from "@/components/Youglish";

export default {
  components: {
    Youglish,
  },

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

      this.$emit("randomWord", {
        word: this.randomWordEnglish,
      });
    },
  },
};
</script>

<template>
  <div id="commonWords">
    <div class="left">
      <div class="left-container">
        <div class="left-side">
          <ol class="words_ol">
            <li v-for="(word, index) in 1000" :key="index">
              <span>{{ words[0][index] }}</span> :
              <span>{{ words[1][index] }}</span>
            </li>
          </ol>
        </div>
        <div class="right-side">
          <div class="wordTranslate">
            <button class="reminder_button" @click="getRandomWord">
              Reminder
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
          <Youglish :word="randomWordEnglish" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#commonWords {
  border: 1px solid #42b883;
  border-radius: 5px;
  height: 95vh;
  .left {
    .left-container {
      display: flex;
      margin-top: 1rem;
      .left-side {
        padding: 0.3rem;
        text-align: left;
        margin: 0;
        flex: 0.5;

        ol.words_ol {
          margin: auto;
          min-height: 500px;
          height: 85vh;
          overflow-y: auto;
          max-width: 300px;

          li {
            letter-spacing: 0.75px;
            border-bottom: 1px solid black;
            span {
              font-weight: 700;
              font-size: 1rem;
            }
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
          border: 1px solid #42b883;
          border-radius: 50px;
          min-width: 30vw;
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
            margin: 0.5rem auto;
            padding: 0.5rem;
            border-radius: 1rem;
            cursor: pointer;
            color: #000;
            margin-bottom: 1rem;
            font-weight: 700;
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
            input {
              min-width: 300px;
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
            margin: 0.5rem auto;
            display: flex;
            justify-content: space-around;
            height: 2rem;
            align-items: center;
          }

          .hide_translate_word {
            cursor: pointer;
            display: inline;
            transition: 1s display;
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
  .wordTranslate {
    margin: 4rem auto;
    padding: 2rem;
  }
}
</style>