<template>
  <q-page class="bg q-mx-auto" style="padding-top: 100px; padding-bottom: 50vh;width: 80%;">
        <div class="q-mx-auto q-py-lg q-px-xl" style="min-width: 70%">
          <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          color="primary"
        />
      </template>

      <q-breadcrumbs-el label="首頁" icon="home" to="/"/>
      <q-breadcrumbs-el label="產品系列" icon="widgets" to="/products"/>
      <q-breadcrumbs-el label="產品介紹" icon="navigation" />
    </q-breadcrumbs>
          <div class="row q-gutter-lg" style="width: 100%; margin-top: 2rem;">
            <div class="col-12 col-md-5" align="left">
              <div class="text-orange-9">
              {{ product.category }}
              </div>
              <h2 style="font-weight:500 ;">
                {{ product.name }}
              </h2>
              <div style="font-weight: 200;">
              {{ product.description }}
              </div>
            </div>
            <div class="col-12 col-md-4">
              <img :src="product.image" style="width: 50vh">
            </div>
            <div class="col-12 col-md-2">
              <div>
              容量
              <h5 style="font-weight:500; text-align: right;">
              {{ product.volume }}ml
              </h5>
              </div>
              <br>
              <div>
              價錢
              <br>
              <h5 style="font-weight:500; text-align: right;">
              {{ product.price }} 元
              </h5>
              </div>
              <br>
              <q-form @submit="submitCart" class="q-gutter-md">
                <div style="font-weight: 200;">商品數量</div>
                <div class="count flex flex-center" style="width:100%;">
                  <br>
                <q-btn icon="remove" class="remove" @click="quantity--"/>
                <q-input v-model.number="quantity" class="num" :rules="[rules.required, rules.number]"/>
                <q-btn icon="add" class="add" @click="quantity++"/>
                </div>
              <q-btn color="dark" label="加入購物車" style="width:100%" type="submit"/>
            </q-form>
            </div>
          </div>
        </div>
  </q-page>
  <h4>推薦清單</h4>
  <swiper
    :spaceBetween="30"
    :slidesPerView="4"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
      <swiper-slide class="col-12 col-md-4" v-for="product in products" :key="product._id" style="margin-top: 5rem;">
          <ProductCard v-bind="product"/>
      </swiper-slide>
  </swiper>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { api } from '../../boot/axios.js'
import { useRoute, useRouter } from 'vue-router'
import { Swal } from 'sweetalert2'
import ProductCard from '../../components/ProductCard.vue'
import { useUserStore } from '../../stores/user.js'

const route = useRoute()
const router = useRouter()

const user = useUserStore()
const { editCart } = user

const valid = ref(false)
const quantity = ref(1)

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  number (value) {
    return value > 0 || '數量錯誤'
  }
}

// 推薦商品
const products = reactive([]);
(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: '',
  volume: ''
})

const submitCart = () => {
  if (!valid.value) return
  editCart({ _id: product._id, quantity: quantity.value })
};

(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.description = data.result.description
    product.image = data.result.image
    product.sell = data.result.sell
    product.category = data.result.category
    product.volume = data.result.volume

    document.title = '購物網 | ' + product.name
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品失敗'
    })
    router.go(-1)
  }
})()
</script>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Autoplay, Pagination, Navigation]
    }
  }
}
</script>
<style lang="scss">
.bb{
  border: 1px dodgerblue solid;
}
.count{
  height:10vh;
}
.remove{
  width: 5vh;
  height: 2vh;
  border: 1px solid #000;
  margin-right: 3rem;
}
.num{
  width: 20%;
  height: 2vh;
  font-size: 20px;
  margin-right: 3rem;
  margin-top: -3rem;
}
.add{
  width: 5vh;
  height: 2vh;
  border: 1px solid #000;
}
.mySwiper{
  width: 99vw;
}
</style>
