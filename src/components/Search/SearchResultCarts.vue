<script>
export default {
  name: "SearchResultCarts",
  props: {
    inputWord: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <ol class="carts">
    <li class="cart" v-for="(item, index) in inputWord.wordData" :key="index">
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
</template>


<style scoped lang="scss">
ol.carts {
  height: 65vh;
  max-height: 65vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 0px;
  list-style-type: decimal;
  margin: 0px;
  border-radius: 5px;
  li.cart {
    padding: 0.5rem;
    margin: 0.5rem;
    background-color: antiquewhite;
    border-right: 5px solid #42b883;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    & {
      text-align: left;
    }
    h2 {
      margin: 0px;
      margin-top: 1rem;
      font-size: 1rem;
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
</style>