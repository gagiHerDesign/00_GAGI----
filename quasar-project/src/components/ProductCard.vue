<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <div style="width: 100%; height: 100%">
        <q-img :src="image" style="object-fit: cover;" />
      </div>

      <q-card-section>
        <div class="text-overline text-orange-9">{{ category }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ name }}</div>
        <div>
          {{ volume }}ml
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn class="q-px-lg" color="dark" label="More" @click="opendis = true"
          style="font-weight: 100;width: 70%; margin: auto;" />

      </q-card-actions>

    </q-card>
  </div>
  <!-- 彈出視窗資訊 -->
  <q-dialog v-model="opendis">
    <div style="min-width: 90vw;position: relative;overflow-x: hidden;">
      <div class="cancel">
        <img src="../assets/img/logo/XX.svg" v-close-popup>
      </div>
      <div id="q-app" style="min-height: 80vh; max-width: 70vw;background: #FFFEF2; margin: auto;font-weight: 100;">
        <div class="q-mx-auto q-py-lg q-px-xl" style="min-width: 400px;">
          <h4 style="font-weight: 600;">商品介紹</h4>
          <div class="row q-gutter-lg">
            <div class="col-12 col-md-3 bb">
              {{ category }}
              <br>
              <h2>{{ name }}</h2>
            </div>
            <div class="col-12 col-md-3 bb">
              <img :src="image">
            </div>
            <div class="col-12 col-md-3 bb">
              數量
              <br>
              {{ price }} 元
              <br>
              <q-btn color="dark" label="加入購物車" style="width:80%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-dialog>
</template>

<script setup>
// import { useUserStore } from '../stores/user.js'
import { ref } from 'vue'

const opendis = ref(false)

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
.q-card {
  width: 350px;
  background: rgba(255, 255, 17, 0);

  .q-img__image {
    filter: drop-shadow(10px 10px 2px #dadada);
  }
}

.bb {
  border: 1px solid saddlebrown;
}
</style>
