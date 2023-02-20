<template>
  <q-page id="ProductPage" class="bg text-center" style="padding-top: 100px; padding-bottom: 250vh;">
    <div class="proHero">
      <input type="radio" name="scene" id="scene-1" value="1" checked />
      <input type="radio" name="scene" id="scene-2" value="2" />
      <input type="radio" name="scene" id="scene-3" value="3" />
      <input type="radio" name="scene" id="scene-4" value="4" />

      <main id="site">
        <header class="top-nav">
          @keyframers
        </header>
        <div class="ocean">
          <div class="ocean-text">Stop</div>
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
              We can help<br />
              to save<br />
              the oceans
            </h1>
            <button class="button">
              How can I help?
            </button>
          </div>
          <div class="layer" data-scene="2">
            <h1 class="heading">
              Saving nature,<br />
              we save our<br />
              future
            </h1>
            <button class="button">
              How can I help?
            </button>
          </div>
          <div class="layer" data-scene="3">
            <h1 class="heading">
              Only you<br />
              can prevent<br />
              ocean fires
            </h1>
            <button class="button">
              How can I help?
            </button>
          </div>
          <div class="layer" data-scene="4">
            <h1 class="heading">
              Do not<br />
              litter on<br />
              the beach
            </h1>
            <button class="button">
              How can I help?
            </button>
          </div>
        </div>

        <div class="left-content">
          <div class="layer" data-scene="1">
            <div class="fact subtitle">More than</div>
            <div class="fact number">1 000 000</div>
            <div class="fact description">seabirds die yearly due to plastic debris</div>
          </div>
          <div class="layer" data-scene="2">
            <div class="fact subtitle">The largest garbage patch is</div>
            <div class="fact number">1 760 000 m<sup>2</sup></div>
            <div class="fact description">and is 10m deep</div>
          </div>
          <div class="layer" data-scene="3">
            <div class="fact subtitle">More than</div>
            <div class="fact number">700 000</div>
            <div class="fact description">species call the ocean their home</div>
          </div>
          <div class="layer" data-scene="4">
            <div class="fact subtitle">There is an estimated</div>
            <div class="fact number">12 000 000</div>
            <div class="fact description">metric tons of plastic in the ocean</div>
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
              Next &gt;

              <label class="nav-toggle" for="scene-1">1</label>
              <label class="nav-toggle" for="scene-2">2</label>
              <label class="nav-toggle" for="scene-3">3</label>
              <label class="nav-toggle" for="scene-4">4</label>
            </div>
          </nav>

          <div class="layer" data-scene="1">
            <h2 class="heading">
              It's not late. It's time to save the ocean.
            </h2>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium est autem amet minus, atque
              consequatur iure dolor id inventore sit magnam sint, voluptates deserunt beatae? Error eveniet quam dicta!
            </p>
          </div>

          <div class="layer" data-scene="2">
            <h2 class="heading">
              Facts and Stats on Ocean Pollution
            </h2>
            <p class="paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, amet hic provident ipsa placeat ad.
              Excepturi distinctio consectetur voluptatibus rem deleniti ducimus officia natus, magnam aut architecto
              sint reprehenderit provident?
            </p>
          </div>

          <div class="layer" data-scene="3">
            <h2 class="heading">
              Learn more about how you can help.
            </h2>
            <p class="paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, amet hic provident ipsa placeat ad.
              Excepturi distinctio consectetur voluptatibus rem deleniti ducimus officia natus, magnam aut architecto
              sint reprehenderit provident?
            </p>
          </div>

          <div class="layer" data-scene="4">
            <h2 class="heading">
              Join the fight to defend our oceans.
            </h2>
            <p class="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi temporibus explicabo aspernatur dignissimos
              veritatis. Voluptate quis quia sed totam quasi placeat, odio quam fuga consectetur voluptatibus
              praesentium tempore vel molestiae?
            </p>
          </div>

        </div>
      </main>
    </div>
    <h1>我是商品總覽</h1>
    <!-- tabs -->
    <!-- <q-tabs
          v-model="opentab"
          class="text-teal"
          v-for="tab in tabs"
          :key="tab._id"
        >
          <q-tab name="mails" icon="mail" label="Mails" />
          <q-tab name="alarms" icon="alarm" label="Alarms" />
          <q-tab name="movies" icon="movie" label="Movies" />
        </q-tabs> -->
    <!-- 卡片片 -->
    <div class="proCards q-pa-xs">
      <div class="row q-mx-auto" style="width:80%;">
        <div class="col-12 col-md-4" v-for="product in products" :key="product._id" style="margin-top: 5rem;">
          <ProductCard v-bind="product" />
        </div>
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '../../boot/axios.js'
import Swal from 'sweetalert2'
import ProductCard from '../../components/ProductCard.vue'
// import { filter } from 'compression';

const products = reactive([]);
// const tabs = { _id: 111, value: 555 };
// const opentab = computed(){
//   return tab.filter(tab => tab._id ===tab.value)
// }

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
</script>

<style lang="scss">
@import '../../css/product.scss';

.bg {
  background: #F6F1EB;
  padding-top: -10rem;
}
</style>
