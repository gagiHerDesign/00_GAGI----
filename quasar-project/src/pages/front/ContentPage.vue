<template><!-- 上方購物頁面 -->
  <q-page class="bg q-mx-auto" style="padding-top: 100px; padding-bottom: 25vh;width: 80%;">
    <div class="q-mx-auto q-py-lg q-px-xl" style="min-width: 70%">
      <q-breadcrumbs class="text-brown">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" color="primary" />
        </template>

        <q-breadcrumbs-el label="首頁" icon="home" to="/" />
        <q-breadcrumbs-el label="產品系列" icon="widgets" to="/products" />
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
              <q-btn icon="remove" class="remove" @click="quantity--" />
              <q-input v-model.number="quantity" type="number" class="num" :rules="[rules.required, rules.number]" />
              <q-btn icon="add" class="add" @click="quantity++" />
            </div>
            <q-btn color="dark" label="加入購物車" style="width:100%" type="submit" />
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
  <q-page>
    <div class="row">
      <div class="col-12 col-md-6">
        <img class="bigInfo"
          src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80">
      </div>
      <div class="col-12 col-md-6 q-pa-xl">
        <h3>純天然有機茶樹精華</h3>
        <h5 class="text-orange-9">舒緩修復、保濕滋潤</h5>
        <p>
          我們的純天然有機茶樹精華是一種溫和、有效的護膚品，以純淨天然的有機茶樹為基礎，能夠舒緩修復肌膚，並提供深層保濕和滋潤功效。</p>
        <p>
          由於茶樹本身富含多種天然營養成分，包括維生素、礦物質和抗氧化劑等，因此它是一種理想的天然護膚品，能夠幫助改善肌膚質地，減少皺紋和細紋的出現，同時增強皮膚的免疫力，防止日常污染和環境壓力對肌膚的損害。
        </p>
        <p>
          我們的純天然有機茶樹精華不含有害的化學物質，如硫酸鹽、對羥基苯甲酸酯、人造香料和染料等。因此，它是一種非常安全的護膚品，適合所有皮膚類型使用，包括敏感肌膚。使用我們的蘆薈凝膠，您可以享受到純天然的護膚體驗，令肌膚更加柔軟、明亮和健康。
        </p>
      </div>
    </div>
    <div class="rowReverse">
      <div class="col-12 col-md-6 q-pa-xl">
        <h3>有機植物身體乳</h3>
        <h5 class="text-orange-9">滋養肌膚，呵護身體</h5>
        <p>
          這款有機植物身體乳由多種純天然成分製成，能滋養和保護您的肌膚。我們使用最優質的有機植物油，如椰子油、甜杏仁油和薰衣草精油等，能深層滋潤肌膚，同時提供豐富的營養。不含有害的人工香料和色素</p>
        <p>
          我們精心挑選了最優質的植物成分，如蘆薈、綠茶和迷迭香，能有效清潔肌膚，同時舒緩和保濕。無添加人工香料和色素，使用時不刺激，能讓您的肌膚感受到自然的呵護。
        </p>
        <p>
          我們的純天然有機植物身體乳不含有害的化學物質，如硫酸鹽、對羥基苯甲酸酯、人造香料和染料等。因此，它是一種非常安全的護膚品，適合所有皮膚類型使用，包括敏感肌膚。使用我們的有機植物身體乳，您可以享受到純天然的護膚體驗，令肌膚更加柔軟、明亮和健康。
        </p>
      </div>
      <div class="col-12 col-md-6">
        <img class="bigInfo"
          src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
      </div>
    </div>
  </q-page>
  <!-- 推薦熱銷 -->
  <q-page class="bg q-mx-auto" style="padding-top: 100px; padding-bottom: 30vh;width: 80%;">
    <h4>您可能會喜歡</h4>
    <swiper :spaceBetween="50" :slidesPerView="4" :centeredSlides="true" class="mySwiper">
      <swiper-slide class="myCard" v-for="product in products" :key="product._id" style="margin-top: 5rem;">
        <ProductCard v-bind="product" />
      </swiper-slide>
    </swiper>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { api } from '../../boot/axios.js'
import { useRoute, useRouter } from 'vue-router'
import { Swal } from 'sweetalert2'
import { useUserStore } from '../../stores/user.js'
import ProductCard from '../../components/ProductCard.vue'

const route = useRoute()
const router = useRouter()

const user = useUserStore()
const { editCart } = user

// const valid = ref(false)
const quantity = ref(0)

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
$breakpoint-sm: 540px;
$breakpoint-md: 750px;
$breakpoint-xl: 1024px;

@mixin sm {
  @media (max-width: $breakpoint-sm) {
    @content;
  }
}

@mixin md {
  @media (max-width: $breakpoint-md) {
    @content;
  }
}

@mixin xl {
  @media (max-width: $breakpoint-xl) {
    @content;
  }
}

.bg {
  background: #F6F1EB;
  // padding-top: -10rem;
}

.count {
  height: 10vh;
}

.remove {
  width: 5vh;
  height: 2vh;
  border: 1px solid #000;
  margin-right: 2vw;
}

.num {
  width: 20%;
  height: 2vh;
  font-size: 20px;
  margin-right: 2vw;
  margin-top: -3rem;
}

.add {
  width: 5vh;
  height: 2vh;
  border: 1px solid #000;
}

.mySwiper {
  width: 80vw;
}

.bigInfo {
  width: 100%;
  object-fit: cover;
}

.rowReverse {
  width: 99vw;
  display: flex;
  margin-top: -1vh;
  flex-wrap: nowrap;
  flex-direction: row;
}

.rowReverse>.col-md-6 {
  height: auto;
  width: 50%;
}

@include xl {
  .rowReverse {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2vh;
    flex-direction: column-reverse;
  }

  .rowReverse>.col-md-6 {
    height: auto;
    width: 100%;
  }
}

@include xl {
  .myCard {
    margin-right: 10rem;
  }
}
</style>
