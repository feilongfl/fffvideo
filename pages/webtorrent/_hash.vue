<template>
  <section>
    <b-alert show>
      <b-container>
        <b-row>
          <b-col>
            Hash: {{hash}}
          </b-col>
          <b-col>
            <b-button-group>
              <b-button variant="success">Download Torrent</b-button>
              <b-button variant="warning">Copy Magnet</b-button>
              <b-button variant="danger">Open Magnet</b-button>
            </b-button-group>
          </b-col>
        </b-row>
      </b-container>
    </b-alert>
    <!--<b-alert variant="warning" show style="text-align: center">-->
      <!--If your <strong>LUCKY</strong>,you can watch video here.-->
    <!--</b-alert>-->
    <hashplayer :hash="hash" :magnet="magnet"/>
  </section>
</template>

<script>
  import hashplayer from '~/components/hashplayer.vue'

  export default {
    validate({params}) {
      console.log(/^\w{40}$/.test(params.hash));
      return (/^\w{40}$/.test(params.hash));
    },
    components: {
      hashplayer
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
