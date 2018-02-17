<template>
  <section>
    <!--player-->
    <f-video :playerSetting="$store.state.playerSetting"/>
    <!--list-->
    <videolist :items="items" @change="changeUrl"/>
    <!--disqus-->
    <disqus shortname="fffvideo" :identifier="items[0]._id.$oid + '-' + items[0].index"/>
  </section>
</template>

<script>
  import axios from 'axios'
  import videolist from '~/components/videolist.vue'
  import player from '~/components/player.vue'
  import disqus from 'vue-disqus/VueDisqus.vue'

  export const cacheAxiosGet = async (context, url) => {
    let data = context.store.state.cache.get(url);
    if (data) {
      console.log('read from cache');
      return {items: JSON.parse(data)};
    }
    console.log('no cache')
    const res = await axios.get(url);
    data = res.data;
    context.store.state.cache.set(url, JSON.stringify(data));
    return {items: data};
  };

  export const showError = (msg) => {
    console.error(msg);
  }

  export const changeSrcFromBilibili = async (url) => {
    var r;
    const corsCrack = 'https://cors-anywhere.herokuapp.com/';
    // get av number
    const res = await axios.get(corsCrack + url);
    let data = res.data
    if (data.match(/AV\d+/).length == 0) {
      showError('av get err')
      return;
    }
    let av = data.match(/AV\d+/)[0].match(/\d+/)[0]
    // console.log(av);
    // get url
    const queryUrl = 'https://www.biliplus.com/api/geturl?bangumi=1&page=1&av=' + av;
    const resQuery = await axios.get(corsCrack + queryUrl);
    let queryData = resQuery.data;
    if (queryData == null) {
      showError('season id get err')
      return;
    }
    // console.log(queryData.data);

    queryData.data.forEach(function (v) {
      if (v.type == 'single') {
        // console.log(v.url);
        // console.log(this);
        // source[0].src=v.url;
        console.log('return -> ' + v.url);
        r = v.url;
      }
    })

    return r;
  };

  export const changeSrcFromOriginUrl = async (url, type) => {
    console.log(type + ': => ' + url);
    switch (type) {
      case 'bilibili':
        var v = await changeSrcFromBilibili(url)
        console.log('get -> ' + v)
        return v;
        break;

      case 'ai71':
        console.log("ai71");
        break;

      case 'magnet':
        console.log("magnet");
        break;

      default:
        console.log("unknow");
        break;
    }
  };

  export default {
    components: {
      disqus,
      'f-video': player,
      videolist
    },
    data() {
      return {
        playerSetting: {
          autoplay: false,
          sources: [{
            type: 'video/mp4',
            src: 'http://vjs.zencdn.net/v/oceans.mp4'
          }],
          poster: '/logo.png',
          preload: 'auto',
          fluid: true
        }
      }
    },
    asyncData(context) {
      console.log(context);
      var apikey = '?apiKey=MlL4htTfzxCvICCTvq4eUmsHv0f7EtUp';
      var mlabBase = 'https://api.mlab.com/api/1/';
      var database = 'anime';
      var collection = 'video';
      // var date = new Date();

      var queryStr = '&q={"animeID":{"$oid":"' + context.params.id.split('-')[0] + '"},"index":' + context.params.id.split('-')[1] + '}';
      var sortStr = '&s={"rate":-1}';

      // return cacheAxiosGet(context, mlabBase + 'databases/' + database + '/collections/' + collection + apikey + queryStr + sortStr + filedStr);
      return cacheAxiosGet(context, mlabBase + 'databases/' + database + '/collections/' + collection + apikey + queryStr + sortStr);
    },
    mutations: {},
    methods: {
      changeUrl: async function (url) {
        var netRegex = [
          ['bilibili', /https?:\/\/(?:[^.]+\.)?bilibili\.com/],
          ['ai71', /https?:\/\/(?:[^.]+\.)?iqiyi\.com/],
          ['magnet', /^magnet:/]
        ];

        for (var i in netRegex) {
          // console.log(netRegex[i]);
          if (netRegex[i][1].test(url)) {
            var setUrl = await changeSrcFromOriginUrl(url, netRegex[i][0]);
            console.log(setUrl)
            // this.$data.playerSetting.sources[0].src = setUrl;
            var _pS = {
              autoplay: true,
              sources: [{
                type: 'video/mp4',
                src: setUrl
              }],
              poster: '/logo.png',
              preload: 'auto',
              fluid: true
            };

            this.$store.commit('setPlayerSetting',_pS);
            console.log(this.$store);
          }
        }
      }
    }
  }
</script>
