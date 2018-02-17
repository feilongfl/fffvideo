<template>
  <section>
    <div v-video-player:myVideoPlayer="playerSetting"/>
  </section>
</template>

<script>
  export default {
    props: [
      'playerSetting'
    ]
  }
</script>

