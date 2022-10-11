<script>
export default {
  name: "landing-page",
}
</script>

<template>
  <div>
    <h1>Welcome to Dictionary</h1>
    <span>
      <p>
        This is a dictionary app that allows you to search for words and their
        definitions. You can also search for words in the Youglish API to see
        videos of how to pronounce the word.
      </p>
      <p>
        This app was created by <a href="https://github.com/cihat/dictionary" target="_blank">@cihat</a>
      </p>
    </span>
    <button>
      <router-link to="/app">Go to App</router-link>
    </button>
  </div>
</template>

<style lang="scss" scoped>

</style>