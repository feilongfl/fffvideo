<template>
  <section>
    <h4>Video Source:</h4>
    <b-list-group>
      <div v-for="item in items">
        <videolist-item name="爱奇异"
                        :rate="item.rate"
                        vari="success"
                        :dis="item.dis"
                        :originUrl="item.url"
                        v-if="/https?:\/\/(?:[^.]+\.)?iqiyi\.com/.test(item.url)"
                        @vli-click="function(){toChangeUrl(item.url)}"/>
        <videolist-item name="BiliBili"
                        :rate="item.rate"
                        vari="danger"
                        :dis="item.dis"
                        :originUrl="item.url"
                        v-else-if="/https?:\/\/(?:[^.]+\.)?bilibili\.com/.test(item.url)"
                        @vli-click="function(){toChangeUrl(item.url)}"/>
        <videolist-item name="Magnet"
                        :rate="item.rate"
                        vari="secondary"
                        :dis="item.dis"
                        :originUrl="item.url"
                        v-else-if="/^magnet:/.test(item.url)"
                        @vli-click="function(){toChangeUrl(item.url)}"/>
        <videolist-item name="Unknow"
                        :rate="item.rate"
                        vari="secondary"
                        :dis="item.dis"
                        :originUrl="item.url"
                        v-else
                        @vli-click="function(){toChangeUrl(item.url)}"/>
      </div>
    </b-list-group>
  </section>
</template>

<script>
  import videolistitem from '~/components/videolist-item.vue'

  export default {
    props: [
      'items'
    ],
    components:{
      "videolist-item": videolistitem
    },
    methods: {
      toChangeUrl(url) {
        // console.log(url);
        this.$emit('change', url);
      }
    }
  }
</script>
