<script>
import '../src/styles/index.scss'
export default {}
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("./assets/styles/reset.css");

html,
body {
  background-color: transparent !important;
  max-height: 100vh;
  overscroll-behavior-y: none;
}

body {
  font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
