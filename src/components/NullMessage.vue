<script>
export default {
  name: "NullMessage",
  props: {
    inputWord: {
      type: String,
      default: ""
    },
  },
};
</script>

<template>
  <div v-if="!inputWord.input">
    <h2 class="message-text">Please Press the Reminder Button...</h2>
    <div class="null-message">
      <h1>Null</h1>
    </div>
  </div>
</template>


<style scoped lang="scss">
.message-text {
  font-size: 1.25rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
}
.null-message {
  h1 {
    font-size: 2rem;
    text-align: center;
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
}
</style>