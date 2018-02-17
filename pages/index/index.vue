<template>
  <section>
    <div id="cardlist">
      <b-container fluid>
        <b-row class="justify-content-md-center">
          <div v-for="item in items">
            <b-col v-if="item.weekday == days">
              <!--<p>{{item._id.$oid}}</p>-->
              <nuxt-link :to="'/anime/' + item._id.$oid" class="nuxt-link">
                <card :cardTitle="item.name"
                      :imageSrc="item.image"
                      :cardMessage="item.dis"
                />
              </nuxt-link>
            </b-col>
          </div>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script>
  import Card from '~/components/card.vue'
  import axios from 'axios'

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
    props: [
      'days'
    ],
    components: {
      Card
    },
    asyncData(context) {
      var apikey = '?apiKey=MlL4htTfzxCvICCTvq4eUmsHv0f7EtUp';
      var mlabBase = 'https://api.mlab.com/api/1/';
      var database = 'anime';
      var collection = 'animelist';
      var date = new Date();
      var queryStr = '&q={"year":' + date.getFullYear() + ',"session":' + parseInt(date.getMonth() / 3 + 1) + '}';
      // todo: test sort
      var sortStr = '&s={"lastupdate":1}';
      var filedStr = '&f={"_id":1,"dis":1,"image":1,"name":1,"weekday":1}';

      // no cache
      // return axios.get(mlabBase + 'databases/' + database + '/collections/' + collection + apikey + queryStr + sortStr)
      //   .then((res) => {
      //     // console.log(res.data);
      //     return {items: res.data}
      //   })

      //with lru cache
      return cacheAxiosGet(context, mlabBase + 'databases/' + database + '/collections/' + collection + apikey + queryStr + sortStr + filedStr);
    },
    data() {
      return {
        dayname: ['Monday', 'Tuesday', 'Wendsday', 'Thusday', 'Friday', 'Satraday', 'Sunnday', 'Other'],
        items: [
          {
            name: 'Loading ...',
            dis: 'Loading ...',
            image: '/wait.png'
          }
        ]
      }
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
