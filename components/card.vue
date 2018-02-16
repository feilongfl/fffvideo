<template>
  <section>
    <div>
      <b-card tag="article"
              class="mb-2 anime-card"
              style="width:auto;max-width: 20rem;min-width: 15rem"
      >
        <div v-b-popover.hover="(cardMessage == null)? noDisTip : cardMessage"
             :title="cardTitle"
             delay="{ show: 100, hide: 5000 }"
        >
          <h5 style="text-align: center">{{cardTitle}}</h5>
          <img class="card-img-top" :src="imageSrc" />
          <p class="card-text" :to="cardUrl">
            {{(cardMessage == null)? noDisTip : ((cardMessage.length < disMaxLength)? cardMessage : cardMessage.substring(0,disMaxLength) + '...')}}
            <!--{{(cardMessage.length < disMaxLength)? cardMessage : cardMessage.substring(0,disMaxLength) + '...'}}-->
          </p>
        </div>
      </b-card>
    </div>
  </section>
</template>

<script>
  export default {
    props: [
      'cardTitle',
      'cardMessage',
      'imageSrc',
      'cardUrl'
    ],
    data(){
      return {
        disMaxLength: 30,
        noDisTip: '暂无简介'
      }
    }
  }
</script>

