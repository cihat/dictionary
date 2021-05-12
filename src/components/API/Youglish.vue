<script>
export default {
  data() {
    return {
      views: 0,
      curTrack: 0,
      totalTracks: 0,
      widget: null,
    };
  },
  props: {
    word: String,
  },
  watch: {
    word() {
      this.onYouglishAPIReady(this.word);
    },
  },
  created() {
    let tag = document.createElement("script");
    tag.src = "https://youglish.com/public/emb/widget.js";
    let firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  },
  methods: {
    onYouglishAPIReady(word) {
      // var widget;
      this.widget = new YG.Widget("widget-1", {
        width: 500,
        height: 300,
        components: 9, //search box & caption
        events: {
          onFetchDone: this.onFetchDone,
          onVideoChange: this.onVideoChange,
          onCaptionConsumed: this.onCaptionConsumed,
        },
      });
      // 4. process the query
      this.widget.fetch(word, "english", "us");
    },
    // 5. The API will call this method when the search is done
    onFetchDone(event) {
      if (event.totalResult === 0) alert("No result found");
      else this.totalTracks = event.totalResult;
    },
    // 6. The API will call this method when switching to a new video.
    onVideoChange(event) {
      this.curTrack = event.trackNumber;
      this.views = 0;
    },
    // 7. The API will call this method when a caption is consumed.
    onCaptionConsumed(event) {
      if (++this.views < 1) this.widget.replay();
      else if (this.curTrack < this.totalTracks) this.widget.next();
    },
  },
};
</script>

<template>
  <div id="widget-1" @click="onYouglishAPIReady"></div>
  <div class="text" v-if="!word">
      <h1>Please Press the Reminder Button...</h1>
    <div class="null-message">
      <h1>NULL</h1>
    </div>
  </div>
</template>

<style lang="scss">
#widget-1 {
  width: 500px;
}
.null-message {
  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin: 4rem auto;
  }
}
@media only screen and (max-width: 968px) {
  #widget-1 {
  width: 400px;
}
}
</style>