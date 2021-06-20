<script>
export default {}
</script>

<template>
  <router-view />
</template>

<style lang="scss">
// Font Google
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700&display=swap');
// Font Awesome
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css');

body {
  font-size: 14px;
}

html {
  margin: auto;
}

body {
  font-family: 'Mulish', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

//! burassı çok karlısık oldu. Tekrar yap

@media only screen and (max-width: 1036px) {
  .words-container {
    display: flex;
    flex-direction: column;
    max-height: 80vh;
    max-width: 50vw;
  }

  .get-common-words {
    max-width: 400px;
  }

  ol.carts {
    height: 1000px !important;
    max-height: 1000px;
    overflow-y: visible !important;
  }

  .words-list {
    max-height: 20vh;
    max-width: 50vw;
  }

  .range-api {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    border-right: 1px solid #42b883;
    border-top: 1px solid #42b883;
  }
}

@media only screen and (max-width: 768px) {
  ol.carts {
    // max-height: 10vh !important;
    width: 100% !important;
  }
  .get-common-words {
    border: none !important;
  }
  .range-api {
    border: none !important;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (max-width: 968px) {
  #widget-1 {
    max-width: 400px;
    max-height: 300;
  }
}
</style>
