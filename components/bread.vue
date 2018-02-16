<template>
    <b-nav tabs>
      <div v-for="item in items">
        <b-nav-item v-if="item.id == days" active>{{item.text}}</b-nav-item>
        <b-nav-item v-else>{{item.text}}</b-nav-item>
      </div>
    </b-nav>
</template>

<script>
  export default {
    props: [
      'days'
    ],
    data () {
      return {
        items: [{
          text: '1',
          id: 1,
          active: true
        }, {
          text: '2',
          id: 2,
          active: false
        }, {
          text: '3',
          id: 3,
          active: false
        }, {
          text: '4',
          id: 4,
          active: false
        }, {
          text: '5',
          id: 5,
          active: false
        }, {
          text: '6',
          id: 6,
          active: false
        }, {
          text: '7',
          id: 7,
          active: false
        }]
      }
    }
  }
</script>
