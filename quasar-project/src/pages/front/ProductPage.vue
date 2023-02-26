<template>
  <q-page id="ProductPage" class="bg text-center" style="padding-top: 100px; padding-bottom: 30vh;">
    <div class="proHero">
      <input type="radio" name="scene" id="scene-1" value="1" checked />
      <input type="radio" name="scene" id="scene-2" value="2" />
      <input type="radio" name="scene" id="scene-3" value="3" />
      <input type="radio" name="scene" id="scene-4" value="4" />

      <main id="site">
        <header class="top-nav">
        </header>
        <div class="ocean">
          <div class="ocean-text">
            <img src="../../assets/img/product/product_hero(wide).png" style="height: 400px; margin-left: -30vw;">
          </div>
        </div>
        <div class="left-side">
          <div class="page-numbers" data-total="04">
            <div class="page-number -tens">0</div>
            <div class="page-number -ones">
              1<br />2<br />3<br />4
            </div>
          </div>
        </div>
        <div class="hero">
          <div class="layer" data-scene="1">
            <h1 class="heading">
              <img src="../../assets/img/title/purify-(白色字體透明背景).png">
            </h1>
          </div>
          <div class="layer" data-scene="2">
            <h1 class="heading">
              <img src="../../assets/img/title/tone-(白色字體透明背景).png">
            </h1>
          </div>
          <div class="layer" data-scene="3">
            <h1 class="heading">
              <img src="../../assets/img/title/renew-(白色字體透明背景).png">
            </h1>
          </div>
          <div class="layer" data-scene="4">
            <div class="heading">
              <img src="../../assets/img/title/hydrate-(白色字體透明背景).png">
            </div>
          </div>
        </div>

        <div class="left-content">
          <div class="layer" data-scene="1">
            <div class="fact subtitle text-orange-10">#保濕 #修護</div>
            <div class="fact number">熱銷推薦</div>
            <div class="fact description">[會員限定] 早安淨膚煥白組</div>
          </div>
          <div class="layer" data-scene="2">
            <div class="fact subtitle text-orange-10">#敏感肌膚 #亮白</div>
            <div class="fact number">小編精選</div>
            <div class="fact description">[好評熱賣] 茶樹家族保濕水乳組</div>
          </div>
          <div class="layer" data-scene="3">
            <div class="fact subtitle text-orange-10">#保濕 #修護</div>
            <div class="fact number">現正優惠</div>
            <div class="fact description">[會員限定] 早安淨膚煥白組</div>
          </div>
          <div class="layer" data-scene="4">
            <div class="fact subtitle text-orange-10">#敏感肌膚 #亮白</div>
            <div class="fact number">熱銷產品</div>
            <div class="fact description">[好評熱賣] 茶樹家族保濕水乳組</div>
          </div>
        </div>
        <div class="right-content">

          <nav class="slide-nav">
            <div class="nav-button -prev">
              &lt;

              <label class="nav-toggle" for="scene-1">1</label>
              <label class="nav-toggle" for="scene-2">2</label>
              <label class="nav-toggle" for="scene-3">3</label>
              <label class="nav-toggle" for="scene-4">4</label>

            </div>
            <div class="nav-button -next">
               &gt;

              <label class="nav-toggle" for="scene-1">1</label>
              <label class="nav-toggle" for="scene-2">2</label>
              <label class="nav-toggle" for="scene-3">3</label>
              <label class="nav-toggle" for="scene-4">4</label>
            </div>
          </nav>

          <div class="layer" data-scene="1">
            <h2 class="heading">
              SUSI茶樹極效修護安瓶 30ml
            </h2>
            <p class="paragraph">
              專為疲勞肌、熬夜肌打造的高效能精華
現代人因為工作加班、熬夜追劇，各種生活壓力導致肌膚自我修護力下降，
紅茶精華強大的修護與抗氧化效果，緩解肌膚的疲勞、煥回原有的彈潤活力。
            </p>
          </div>

          <div class="layer" data-scene="2">
            <h2 class="heading">
              SUSI茶樹亮顏控油底妝組 400ml
            </h2>
            <p class="paragraph">
打造粉紅水亮肌添加茶樹萃取、甜菜鹼以及菸鹼胺，能夠幫助肌膚同時提升保濕度及亮白肌膚。亮顏霜同時具有素顏霜&防曬二合一功效。輕乳霜質地輕薄水潤，SPF50+高防曬係數，打造粉嫩的裸妝素顏感，粉潤水光貼膚科技，校正膚色不均及增加持妝度，保濕&細滑質地的亮顏霜，使用在肌膚上，能夠打造出如同櫻花般粉嫩光澤的肌膚。
            </p>
          </div>

          <div class="layer" data-scene="3">
            <h2 class="heading">
              SUSI茶樹極效修護安瓶 30ml
            </h2>
            <p class="paragraph">
              專為疲勞肌、熬夜肌打造的高效能精華
現代人因為工作加班、熬夜追劇，各種生活壓力導致肌膚自我修護力下降，
紅茶精華強大的修護與抗氧化效果，緩解肌膚的疲勞、煥回原有的彈潤活力。
            </p>
          </div>

          <div class="layer" data-scene="4">
            <h2 class="heading">
              SUSI茶樹亮顏控油底妝組 400ml
            </h2>
            <p class="paragraph">
打造粉紅水亮肌添加茶樹萃取、甜菜鹼以及菸鹼胺，能夠幫助肌膚同時提升保濕度及亮白肌膚。亮顏霜同時具有素顏霜&防曬二合一功效。輕乳霜質地輕薄水潤，SPF50+高防曬係數，打造粉嫩的裸妝素顏感，粉潤水光貼膚科技，校正膚色不均及增加持妝度，保濕&細滑質地的亮顏霜，使用在肌膚上，能夠打造出如同櫻花般粉嫩光澤的肌膚。
            </p>
          </div>

        </div>
      </main>
    </div>
    <div class="container">
    <q-breadcrumbs class="text-brown">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" color="primary" />
        </template>

        <q-breadcrumbs-el label="首頁" icon="home" to="/" />
        <q-breadcrumbs-el label="產品系列" icon="widgets" to="/products" />
      </q-breadcrumbs></div>
    <!-- 標籤 -->
    <div class="menu">

    <q-tabs
          v-model="tab"
          class="text-grey"
          active-color="primary"
          vertical
          style="width: 10vw;"
        >
          <q-tab name="所有商品" label="所有商品" style="font-weight: 900;"/>
          <q-tab name="淨膚保養" label="淨膚保養" />
          <q-tab name="沐浴清潔" label="沐浴清潔" />
          <q-tab name="空間香氛" label="空間香氛" />
        </q-tabs>

        <q-tab-panels
        v-model="tab"
        animated
        transition-prev="jump-up"
        transition-next="jump-up"
        style="background: #F6F1EB;width: 99vw;overflow: hidden"
        >
          <q-tab-panel name="所有商品">
            <!-- 卡片片 -->
    <div class="proCards q-pa-xs">
      <div class="row q-mx-auto">
        <div class="col-12 col-md-4" v-for="product in products" :key="product._id" style="margin-top: 5rem;">
          <ProductCard v-bind="product" />
        </div>
      </div>
    </div>
          </q-tab-panel>
          <q-tab-panel name="淨膚保養">
            <div class="proCards q-pa-xs">
      <div class="row q-mx-auto">
        <div class="col-12 col-md-4" v-for="i in filterPro()" :key="i" style="margin-top: 5rem;">
          <ProductCard v-bind="i" />
        </div>
      </div>
    </div>
          </q-tab-panel>

          <q-tab-panel name="沐浴清潔">
            <div class="proCards q-pa-xs">
      <div class="row q-mx-auto">
        <div class="col-12 col-md-4" v-for="i in filterClean()" :key="i" style="margin-top: 5rem;">
          <ProductCard v-bind="i" />
        </div>
      </div>
    </div>
          </q-tab-panel>

          <q-tab-panel name="空間香氛">
            <div class="proCards q-pa-xs">
      <div class="row q-mx-auto">
        <div class="col-12 col-md-4" v-for="i in filterSmell()" :key="i" style="margin-top: 5rem;">
          <ProductCard v-bind="i" />
        </div>
      </div>
    </div>
          </q-tab-panel>
        </q-tab-panels>
</div>
    <!-- 卡片片 -->
    <!-- <div class="proCards q-pa-xs">
      <div class="row q-mx-auto" style="width:80%;">
        <div class="col-12 col-md-4" v-for="product in products" :key="product._id" style="margin-top: 5rem;">
          <ProductCard v-bind="product" />
        </div>
      </div>
    </div> -->

  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { api } from '../../boot/axios.js'
import Swal from 'sweetalert2'
import ProductCard from '../../components/ProductCard.vue'

const products = reactive([])

const filterPro = () => {
  return products.filter(item => item.category === '淨膚保養')
}
const filterClean = () => {
  return products.filter(item => item.category === '沐浴清潔')
}
const filterSmell = () => {
  return products.filter(item => item.category === '空間香氛')
}
const tab = ref('所有商品')

;(async () => {
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
</script>

<style lang="scss">
@import '../../css/product.scss';

.bg {
  background: #F6F1EB;
  padding-top: -10rem;
}
</style>
