<script>
export default {
  props: {
    randomWordEnglish: {
      type: String,
      default: "",
    },
    randomWordTurkish: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div class="hide-word">
    <h2 class="word">
      <span v-if="randomWordEnglish"> {{ randomWordEnglish }} </span>
      <span v-else>?</span>
      <i class="fas fa-long-arrow-alt-right"></i>
      <span v-if="randomWordTurkish"> {{ randomWordTurkish }} </span>
      <span v-else>?</span>
    </h2>
  </div>
</template>

<style scoped lang="scss">
.hide-word {
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 30px;
}

.word {
    font-size: 1.5rem;
    margin: 0.25rem auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>