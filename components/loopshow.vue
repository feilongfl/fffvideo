<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
    >

      <div v-for="item in items">
        <b-carousel-slide :caption="item.title"
                        :text="item.message"
                        :img-src="item.imgSrc"
        ></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            imgSrc: 'https://lorempixel.com/1024/480/technics/2/',
            title: 'title1',
            message: 'message',
            url: ''
          },
          {
            imgSrc: 'https://lorempixel.com/1024/480/technics/4/',
            title: 'title2',
            message: 'message',
            url: ''
          },
          {
            imgSrc: 'https://lorempixel.com/1024/480/technics/5/',
            title: 'title3',
            message: 'message',
            url: ''
          },
          {
            imgSrc: 'https://lorempixel.com/1024/480/technics/8/',
            title: 'title4',
            message: 'message',
            url: ''
          }
        ]
      }
    }
  }
</script>

