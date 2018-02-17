<template>
  <section>
    <b-alert variant="danger" show>Server Error!</b-alert>
    <div class="container" fluid>
      <logo/>
      <!--<h1 class="title">-->
        <!--{{title}}-->
      <!--</h1>-->
      <div class="wrench">
        <div :class="['network',online ? 'online' : 'offline']">
          {{ online ? 'online' : 'offline' }}
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <b-container fluid class="bv-example-row bounce">
      <b-row class="text-center">
        <b-col></b-col>
        <b-col>
          <b-button size="lg" variant="success" to="/">
            Back
          </b-button>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {Logo},
    data () {
      return {
        online: true,
        title: 'F^3'
      }
    },
    mounted () {
      if (!window.navigator) {
        this.online = false;
        return
      }
      this.online = Boolean(window.navigator.onLine);
      window.addEventListener('offline', this._toggleNetworkStatus);
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus);
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

<style>
  .container {
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  .network {
    font-weight: 400;
    font-size: 1rem;
  }

  .network .circle {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: green;
    padding: .1rem .5rem;
    border-radius: 1rem;
  }

  .network.offline .circle {
    background: red;
  }

  /*anime*/
  .wrench { animation: wrench_9506 3.875s ease infinite; transform-origin: 90% 35%; } @keyframes wrench_9506 { 0% { transform:rotate(-12deg) } 5.16129% { transform:rotate(12deg) } 6.45161% { transform:rotate(24deg) } 11.6129% { transform:rotate(-24deg) } 12.90323% { transform:rotate(-24deg) } 18.06451% { transform:rotate(24deg) } 19.35484% { transform:rotate(24deg) } 24.51613% { transform:rotate(-24deg) } 25.80645% { transform:rotate(-24deg) } 30.96774% { transform:rotate(24deg) } 32.25807% { transform:rotate(24deg) } 37.41935% { transform:rotate(-24deg) } 38.70968% { transform:rotate(-24deg) } 43.87097% { transform:rotate(24deg) } 48.3871% { transform:rotate(0deg) } 100% { transform:rotate(0deg) } }
  .bounce { animation: bounce_6214 3.6s ease infinite; transform-origin: 50% 50%; } @keyframes bounce_6214 { 0% { transform:translateY(0) } 5.55556% { transform:translateY(0) } 11.11111% { transform:translateY(0) } 22.22222% { transform:translateY(-15px) } 27.77778% { transform:translateY(0) } 33.33333% { transform:translateY(-15px) } 44.44444% { transform:translateY(0) } 100% { transform:translateY(0) } }
</style>
