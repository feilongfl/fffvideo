<template>
  <section>
    <!--loop show-->
    <!--<loop-show/>-->
    <!--<p>{{this.$store.state.showDay}}</p>-->
    <week-tabs :days="today" @changeDay="onChangeDay"/>
    <!-- main page -->
    <nuxt-child :days="day"/>
  </section>
</template>

<script>
  import LoopShow from '~/components/loopshow.vue'
  import WeekTabs from '~/components/weektabs.vue'

  export default {
    components: {
      LoopShow,
      WeekTabs
    },
    data() {
      var date = new Date();
      this.$store.state.showDay = date.getDay();
      return {
        today: date.getDay(),
        day: date.getDay()
      }
    },
    methods: {
      onChangeDay(d) {
        this.day = d;
        this.$store.state.showDay = d;
        // console.log('receive change day => ' + this.day);
      }
    }
  }
</script>
