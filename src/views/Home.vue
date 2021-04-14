<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import getCommonWords from "@/components/getCommonWords";
import Search from "@/components/Search";

export default {
  name: "Home",
  components: {
    HelloWorld,
    getCommonWords,
    Search,
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <Search />
      <getCommonWords class="get-common-words" />
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  .container {
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    .get-common-words {
      flex: 2;
    }
  }
}

@media only screen and (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>