<template>
  <b-list-group-item :variant="vari" @click="onclick">
    <b-badge variant="info">{{rate}}</b-badge>
    <b-button-group>
      <b-button variant="success">顶</b-button>
      <b-button>踩</b-button>
    </b-button-group>
    {{dis}}
    <b-badge :href="originUrl">{{name}}</b-badge>
  </b-list-group-item>
</template>

<script>
  export default {
    props:[
      'name',
      'rate',
      'vari',
      'dis',
      'originUrl'
    ],
    methods:{
      onclick:function(){
        this.$emit('vli-click')
      }
    }
  }
</script>
