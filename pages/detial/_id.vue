<template>
  <section>
    <!--info-->
    <!--<p>{{items[0]._id.$oid + '-' + items[0].index}}</p>-->
    <!--list-->
    <videolist :items="items"/>
    <!--disqus-->
    <disqus shortname="fffvideo" :identifier="items[0]._id.$oid + '-' + items[0].index"/>
  </section>
</template>

<script>
  import axios from 'axios'
  import videolist from '~/components/videolist.vue'
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

  export default {
    components:{
      disqus,
      videolist
    },
    asyncData(context) {
      // console.log(params.id);
      var apikey = '?apiKey=MlL4htTfzxCvICCTvq4eUmsHv0f7EtUp';
      var mlabBase = 'https://api.mlab.com/api/1/';
      var database = 'anime';
      var collection = 'video';
      // var date = new Date();

      var queryStr = '&q={"animeID":{"$oid":"' + context.params.id.split('-')[0] + '"},"index":' + context.params.id.split('-')[1] + '}';
      var sortStr = '&s={"rate":-1}';

      // return cacheAxiosGet(context, mlabBase + 'databases/' + database + '/collections/' + collection + apikey + queryStr + sortStr + filedStr);
      return cacheAxiosGet(context, mlabBase + 'databases/' + database + '/collections/' + collection + apikey + queryStr + sortStr);
    }
  }
</script>
