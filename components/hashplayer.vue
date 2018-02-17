<template>
  <section>
    <!-- player -->
    <b-container fluid>
      <b-row>
        <b-col>
          <div id="hashPlayerCont"
               :hash="hash"
               :magnet="magnet"
               calss="hashplayer"
          >
            <div id="waitTorrent">
              <b-alert variant="warning" show>
                Wait for Torrent ...
                <br>If your <strong>LUCKY</strong>,you can watch video here.
              </b-alert>
              <image src="/wait.png"></image>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <!-- player script -->
    <script src="/js/hashplayer.js"/>
  </section>
</template>

<script>
  export default {
    props: [
      'hash',
      'magnet'
    ]
  }
</script>

<style>
  video {
    width: 100%;
  }
</style>
