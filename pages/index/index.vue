<template>
  <section>
    <div id="cardlist" class="container">
      <b-container class="bv-example-row">
        <b-row>
          <div v-for="item in items">
            <b-col v-if="item.weekday == days">
              <card :cardTitle="item.name" :imageSrc="item.image" :cardMessage="item.dis"/>
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

  export default {
    props: [
      'days'
    ],
    components: {
      Card
    },
    asyncData() {
      var apikey = '?apiKey=MlL4htTfzxCvICCTvq4eUmsHv0f7EtUp';
      var mlabBase = 'https://api.mlab.com/api/1/';
      var database = 'anime';
      var collection = 'animelist';
      var date = new Date();
      var queryStr = '&q={"year":' + date.getFullYear() + ',"session":' + parseInt(date.getMonth() / 3 + 1) + '}';
      // todo: test sort
      var sortStr = '&s={"lastupdate":1}';
      return axios.get(mlabBase + 'databases/' + database + '/collections/' + collection + apikey + queryStr + sortStr)
        .then((res) => {
          // console.log(res.data);
          return {items: res.data}
        })
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
  .container {
    justify-content: center;
    align-items: center;
  }

</style>
