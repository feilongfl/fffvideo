<template>
  <section>
    <b-alert show>
      <b-button-group>
        <b-button variant="success">Torrent</b-button>
        <b-button variant="warning">Copy Magnet</b-button>
        <b-button variant="danger">Open Magnet</b-button>
      </b-button-group>
    </b-alert>
    <!-- player -->
    <hashplayer :hash="hash" :magnet="magnet"/>
    <!-- disqus-->
    <disqus shortname="fffvideo" identifier="testtest"/>
  </section>
</template>

<script>
  import hashplayer from '~/components/hashplayer.vue'
  import disqus from 'vue-disqus/VueDisqus.vue'

  export default {
    validate({params}) {
      console.log(/^\w{40}$/.test(params.hash));
      return (/^\w{40}$/.test(params.hash));
    },
    components: {
      hashplayer,
      disqus
    },
    asyncData({params}) {
      var magnetHead = 'magnet:?xt=urn:btih:';
      return {
        hash: params.hash,
        magnet: magnetHead + params.hash
      }
    }
  }
</script>
