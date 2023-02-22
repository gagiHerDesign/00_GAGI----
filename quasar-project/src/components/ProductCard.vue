<template>
  <div id="Pcard">
  <q-btn bordered :to="'/contents/' + _id" class="cardLook">
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat>
      <div style="width: 100%; height: 100%">
        <q-img :src="image" class="cardImg" />
      </div>

      <q-card-section>
        <div class="text-overline text-orange-9">{{ category }}</div>
        <div class="text-primary text-h5 q-mt-sm q-mb-xs">{{ name }}</div>
        <div class="text-primary" style="font-weight: 100;">
          {{ volume }}ml
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat class="q-px-lg" color="dark" label="More" :to="'/contents/' + _id"
          style="font-weight: 100;width: 70%; margin: auto;" />
      </q-card-actions>
    </q-card>
  </div>
  </q-btn>
  </div>
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
  category: {
    type: String,
    default: ''
  },
  volume: {
    type: String,
    default: ''
  }
})

// 商品加入購物車之後要储存在前台
// const user = useUserStore()
// const { editCart } = user
</script>

<style lang="scss">
#Pcard{
  .q-btn{
  color: #fff;
}

.q-card {
  width: 250px;
  background: rgba(205, 205, 28, 0);

  .q-img__image {
    filter: drop-shadow(5px 5px 1px #c7bfbc);
  }
}
.cardLook{
  height: 100%;
  .cardImg{
    transform: scale(1.2);
    transition: 1s;
  }
  &:hover{
    background:linear-gradient(0deg, rgb(255, 255, 255) 70%, rgba(255, 255, 255, 0.09) 30%);
    .cardImg{
      transform: scale(1.3);
      transition: 1s;
    }
  }
}
}

</style>
