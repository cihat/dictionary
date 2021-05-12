<script>
import axios from "axios";

export default {
  name: "SearchInput",
  props: {
    inputWord: {
      type: Number,
      default: "",
    },
    randomData: {
      type: String,
      default: "",
    },
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
      await axios
        .request(options)
        .then((res) => {
          // console.log(res.data);
          this.inputWord.wordData = res.data.definitions;
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
  width: 12rem;
  height: 1rem;
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