<template>
  <section>
    <h4>Video Source:</h4>
    <b-list-group v-for="item in items">
      <!--271-->
      <b-list-group-item v-if="/https?:\/\/(?:[^.]+\.)?iqiyi\.com/.test(item.url)" variant="success">
        <b-badge variant="info">{{item.rate}}</b-badge>
        <b-button-group>
          <b-button variant="success">顶</b-button>
          <b-button>踩</b-button>
        </b-button-group>
        {{item.dis}}
        <b-badge>爱奇异</b-badge>
      </b-list-group-item>
      <!--bili-->
      <b-list-group-item v-else-if="/https?:\/\/(?:[^.]+\.)?bilibili\.com/.test(item.url)" variant="danger">
        <b-badge variant="info">{{item.rate}}</b-badge>
        <b-button-group>
          <b-button variant="success">顶</b-button>
          <b-button>踩</b-button>
        </b-button-group>
        {{item.dis}}
        <b-badge>BiliBili</b-badge>
      </b-list-group-item>
      <!--magnet-->
      <b-list-group-item v-else-if="/^magnet:/.test(item.url)" variant="secondary">
        <b-badge variant="info">{{item.rate}}</b-badge>
        <b-button-group>
          <b-button variant="success">顶</b-button>
          <b-button>踩</b-button>
        </b-button-group>
        {{item.dis}}
        <b-badge>Magnet</b-badge>
      </b-list-group-item>
      <!--unknow-->
      <b-list-group-item v-else>
        <b-button-group>
          <b-button variant="success">顶</b-button>
          <b-button>踩</b-button>
        </b-button-group>
        <b-badge variant="info">{{item.rate}}</b-badge>
        {{item.dis}}
        <b-badge>Unknow</b-badge>
      </b-list-group-item>
    </b-list-group>
  </section>
</template>

<script>
  export default {
    props: [
      'items'
    ]
  }
</script>
