<template>
    <!--<b-nav tabs>-->
      <!--<div v-for="item in items">-->
        <!--<b-nav-item v-if="item.id == days" active>{{item.text}}</b-nav-item>-->
        <!--<b-nav-item v-else>{{item.text}}</b-nav-item>-->
      <!--</div>-->
    <!--</b-nav>-->

  <b-tabs>
    <div v-for="item in items">
      <b-tab :title="item.text" v-if="item.id==days" active @click="function(){toChangeDay(item.id)}">
        <!--<p>{{item.text}}</p>-->
      </b-tab>
      <b-tab :title="item.text" v-else @click="function(){toChangeDay(item.id)}">
        <!--<p>{{item.text}}</p>-->
      </b-tab>
    </div>
  </b-tabs>
</template>

<script>
  export default {
    props: [
      'days'
    ],
    methods:{
      toChangeDay (_day) {
        // this.showDay = _day;
        // this.Days = _day;
        this.$emit('changeDay',_day);
        // console.log('change day => ' + _day);
      }
    },
    data () {
      return {
        // showDay: this.days,
        items: [{
          text: 'Monday',
          id: 1,
          active: true
        }, {
          text: 'Thusday',
          id: 2,
          active: false
        }, {
          text: 'Wensday',
          id: 3,
          active: false
        }, {
          text: 'Thusday',
          id: 4,
          active: false
        }, {
          text: 'Friday',
          id: 5,
          active: false
        }, {
          text: 'Satraday',
          id: 6,
          active: false
        }, {
          text: 'Sunday',
          id: 7,
          active: false
        }, {
          text: 'Other',
          id: 8,
          active: false
        }]
      }
    }
  }
</script>
