<template><!-- 上方購物頁面 -->
  <q-page class="bg q-mx-auto" style="padding-top: 100px; padding-bottom: 25vh;width: 80%;">
    <div class="q-mx-auto q-py-lg q-px-xl" style="min-width: 70%">
      <q-breadcrumbs class="text-brown">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" color="primary" />
        </template>

        <q-breadcrumbs-el label="首頁" icon="home" to="/" />
        <q-breadcrumbs-el label="茶樹系列" icon="widgets" to="/tree" />
        <q-breadcrumbs-el label="茶樹介紹" icon="navigation" />
      </q-breadcrumbs>
      <p style="margin-top: 5vh;font-weight: 600;font-size: calc(20px + 0.5vw);">我要認養茶樹<q-avatar icon="arrow_forward"/></p>
      <div class="row q-gutter-xl" style="width: 100%; margin-top: 2rem;">
        <div class="col-12 col-md-3">
          <img :src="tree.image" style="width: 100%">
        </div>
        <div class="col-12 col-md-5" align="left">
          <div class="text-orange-9">
            {{ tree.area }}
          </div>
          <h2 style="font-weight:500 ;">
            {{ tree.name }}
          </h2>
          <div style="font-weight: 200;">
            {{ tree.description }}
          </div>
        </div>

        <div class="col-12 col-md-2">
          <br>
          <div>
            價錢
            <br>
            <h5 style="font-weight:500; text-align: right;">
              {{ tree.price }} 元
            </h5>
          </div>
          <br>
          <q-form @submit="submitPlantCart" class="q-gutter-md">
            <div style="font-weight: 200;">商品數量</div>
            <div class="count flex flex-center" style="width:100%;">
              <br>
              <q-input v-model.number="quantity" type="number" class="num" :rules="[rules.required, rules.number]" readonly/>
            </div>
            <q-btn color="dark" label="確認認養" style="width:100%" type="submit"/>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
  <q-page style="padding-top: 100px; padding-bottom: 50vh;">
    <div class="row">
      <div class="col-12 col-md-6">
        <img class="bigInfo"
          src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
      </div>
      <div class="col-12 col-md-6 q-pa-xl">
        <h3>專屬您的茶樹</h3>
        <h5 class="text-orange-9">澳洲茶樹認養計畫，享受來自大自然的贈禮</h5>
        <p>
          您曾經想過擁有一棵屬於自己的茶樹，從茶樹生長到收成，一步步見證成長的過程嗎？現在您有機會參與我們的澳洲茶樹認養計畫，擁有一棵專屬於您的茶樹，並獲得每年的收成禮品。</p>
        <p>
          我們的茶樹生長在自然環境下，不使用任何化學肥料和農藥，品質純正、鮮美。您可以在享受體驗的同時，感受大自然的美好，從中品味來自大地的香氣和滋味。
        </p>
      </div>
    </div>
    <div class="rowReverse">
      <div class="col-12 col-md-6 q-pa-xl">
        <h3>打造環保永續的產業</h3>
        <h5 class="text-orange-9">負責任的消費，從認養澳洲茶樹開始</h5>
        <p>
          認養澳洲茶樹不僅僅是擁有一份尊貴的禮物，更是一種負責任的消費方式。我們的茶樹生長在自然環境下，不使用任何化學肥料和農藥，品質純正、鮮美，同時也符合環保永續的概念。</p>
        <p>
          透過認養計畫，您可以參與到我們的環保永續茶葉產業，貢獻您的一份力量。讓我們一起打造更加環保、健康的茶葉產業。
        </p>
        <p>
          從認養澳洲茶樹開始，讓您的消費更加負責任、更具意義。
        </p>
      </div>
      <div class="col-12 col-md-6">
        <img class="bigInfo"
          src="https://kurashigoto.hokkaido.jp/image/atsuma_narita.JPG">
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { api } from '../../boot/axios.js'
import { useRoute, useRouter } from 'vue-router'
import { Swal } from 'sweetalert2'
import { useUserStore } from '../../stores/user.js'

const route = useRoute()
const router = useRouter()

const user = useUserStore()
const { editPlantCart } = user

// const valid = ref(false)
const quantity = ref(1)

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  number (value) {
    return value > 0 || '數量錯誤'
  }
}

const tree = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  area: ''
})

const submitPlantCart = () => {
  editPlantCart({ _id: tree._id, quantity: quantity.value })
  router.push('/myPlantCheck')
};

(async () => {
  try {
    const { data } = await api.get('/trees/' + route.params.id)
    tree._id = data.result._id
    tree.name = data.result.name
    tree.price = data.result.price
    tree.description = data.result.description
    tree.image = data.result.image
    tree.sell = data.result.sell
    tree.area = data.result.area

    document.title = '購物網 | ' + tree.name
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得資料失敗'
    })
    router.go(-1)
  }
})()
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
