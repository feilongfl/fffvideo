<template>
  <section>
    <!--show anime Id-->
    <div v-for="item in items">
      <b-carousel controls :interval="4000" indicators>
        <b-carousel-slide :caption="item.name"
                          :text="item.year + ['冬','春','夏','秋'][item.session - 1]+'\n每周'+['一','二','三','四','五','六','日'][item.weekday - 1]+'更新。'"
                          :img-src="item.image"
        />
      </b-carousel>
      <b-alert show>{{(item.dis == null)? '暂无简介' : item.dis}}</b-alert>
      <!--list-->
      <b-container fluid class="justify-content-md-center">
        <b-row>
          <b-col v-for="i in item.episode">
            <nuxt-link :to="'/detial/' + item._id.$oid + '-' + i.index" class="nuxt-link">
              <card
                :cardTitle="(i.name == null) ? i.index : i.index + ': ' + i.name"
                :imageSrc="(i.image == null)? '/img/noimg.png' : i.image"
              />
            </nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!--disqus-->
    <disqus shortname="fffvideo" :identifier="items[0]._id.$oid"/>
  </section>
</template>

<script>
  import disqus from 'vue-disqus/VueDisqus.vue'
  import axios from 'axios'
  import card from '~/components/detialcard.vue'

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
    components: {
      disqus,
      card
    },
    asyncData(context) {
      var apikey = '?apiKey=MlL4htTfzxCvICCTvq4eUmsHv0f7EtUp';
      var mlabBase = 'https://api.mlab.com/api/1/';
      var database = 'anime';
      var collection = 'animelist';
      var date = new Date();
      var queryStr = '&q={"_id":{"$oid":"' + context.params.id + '"}}';

      // return cacheAxiosGet(context, mlabBase + 'databases/' + database + '/collections/' + collection + apikey + queryStr + sortStr + filedStr);
      return cacheAxiosGet(context, mlabBase + 'databases/' + database + '/collections/' + collection + apikey + queryStr);
    }
  }
</script>

<style>
  .nuxt-link {
    color: black;
  }

  .nuxt-link:hover {
    color: black;
    text-decoration: none;
  }
</style>

