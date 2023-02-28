<template>
  <div id="Tcard">
    <div class="container">

  <q-btn bordered :to="'/TreeContents/' + _id" class="cardLook">
  <div class="row items-start q-gutter-md">
    <q-card class="my-card" flat>

      <q-card-section horizontal>
        <q-img :src="image" class="cardImg col-6" />

      <q-card-section>
        <div class="text-overline text-orange-9">{{ area }}</div>
        <div class="text-primary text-h5 q-mt-sm q-mb-xs">{{ name }}</div>

      <q-card-actions>
        <q-btn flat class="q-px-lg" color="dark" label="More" :to="'/TreeContents/' + _id"
          style="font-weight: 100;" />
      </q-card-actions>
       </q-card-section>
      </q-card-section>
    </q-card>
  </div>
  </q-btn>
  </div></div>
</template>

<script setup>
// import { useUserStore } from '../stores/user.js'

defineProps({
  /* eslint-disable */
  _id: {
    type: String,
    default: ''
  },
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  },
  area: {
    type: String,
    default: ''
  }
})

// 商品加入購物車之後要储存在前台
// const user = useUserStore()
// const { editCart } = user
</script>

<style lang="scss">
#Tcard{
  .container{
    width: 70%;
    margin: auto;
  }
  .q-btn{
  color: #fff;
  padding: 0;
}

.q-card {
  width: 300px;
  background: rgba(205, 205, 28, 0);

}
.cardLook{
  height: 100%;
  background:#fff;
  .cardImg{
    transform: scale(1);
    transition: 1s;
  }
  &:hover{

    .cardImg{
      transform: scale(1.2);
      transition: 1s;
    }
  }
}
}

</style>
