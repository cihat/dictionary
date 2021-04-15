<script>
import axios from "axios";

export default {
  data() {
    return {
      inputWord: {
        input: "",
        wordData: {},
      },
    };
  },
  props: {
    randomData: String,
  },
  watch: {
    randomData() {
      this.inputWord.input = this.randomData;
      // search(this.inputWord.input);
      this.search(this.inputWord.input);
    },
  },
  created() {
    this.inputWord.input = this.randomData;
  },
  methods: {
    async search(input) {
      if (!this.inputWord.input) {
        return;
      }
      input = this.inputWord.input;
      const options = {
        url: `https://owlbot.info/api/v4/dictionary/${input}`,
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Token ${process.env.VUE_APP_API_KEY}`,
        },
      };
      // console.log(this.inputWord.input);

      await axios
        .request(options)
        .then((res) => {
          // console.log(res.data);
          this.inputWord.wordData = res.data.definitions;
          // console.log(this.inputWord.wordData);
        })
        .catch((error) => {
          console.log(error);
          this.inputWord.input = "";
          alert("Not Found");
        });
    },
  },
};
</script>

<template >
  <div id="search">
    <div class="right">
      <h1 class="title">Dictionary</h1>
      <div class="wordTranslate">
        <div class="form">
          <input
            v-on:keyup.enter="search"
            type="text"
            name="inputWord"
            id="inputWord"
            v-model="inputWord.input"
          /><button class="reminder" type="button" @click="search">
            Search
          </button>
          <h1 v-if="inputWord.input">{{ inputWord.input }}</h1>
          <div class="result">
            <h1 class="inputValue"></h1>
            <ol class="carts">
              <li
                class="cart"
                v-for="(item, index) in inputWord.wordData"
                :key="index"
              >
                <h2 class="type" v-if="item.type">Type</h2>
                <p v-if="item.type">{{ item.type }}</p>
                <h2 v-if="item.definition" class="defination">Definition</h2>
                <p v-if="item.definition">{{ item.definition }}</p>
                <h2 v-if="item.example" class="example">Example</h2>
                <p v-if="item.example">{{ item.example }}</p>
                <h2 v-if="item.image_url" class="image">Image</h2>
                <img :src="item.image_url" alt="" v-if="item.image_url" />
                <h2 v-if="item.emoji" class="emoji">Emoji</h2>
                <p v-if="item.emoji">{{ item.emoji }}</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
#search {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border: 1px solid #42b883;

  .right {
    flex: 1;
    margin-right: 1rem;
    overflow-y: scroll;

    height: 95vh;
    h1.title {
      margin: auto;
      margin-bottom: 0.1rem;
      font-size: 3rem;
      color: #42b883;
    }

    .wordTranslate {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 3rem;
      .form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        input {
          border: 1px solid #000;
          width: 16rem;
          height: 1rem;
          padding: 1rem;
          border-radius: 1rem;
          font-size: 1rem;
          outline-style: none;
        }
        button {
          width: 6rem;
          font-size: 1rem;
          padding: 0.75rem;
          border-radius: 1rem;
          cursor: pointer;
          margin: 0.4rem;
          color: #000;
          &:hover {
            background-color: #42b883;
            color: #fff;
          }
        }
        h1 {
          text-transform: uppercase;
          margin: 0px;
        }
        .result {
          h1.inputValue {
            color: #42b883;
            text-transform: uppercase;
            font-size: 2rem;
            border-radius: 1rem;
          }
          ol.carts {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-content: flex-start;
            padding: 0px;
            list-style-type: decimal;
            margin: 0px;
            li.cart {
              align-items: flex-start;
              display: flex;
              margin: 1rem;
              flex-direction: column;
              border-bottom: 1px solid #000;
              & {
                text-align: left;
              }
              h2 {
                margin: 0px;
                margin-top: 1rem;
              }
              p {
                margin: 0.1rem;
              }
              img {
                max-width: 224px;
                height: auto;
              }
            }
          }
        }
      }

      .translate_word {
        font-size: 3rem;
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
</style>