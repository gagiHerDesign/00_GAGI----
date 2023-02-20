<template>
  <q-page class="bg text-center" style="padding-top: 100px;padding-bottom: 50vh; width: 100vw;">
    <div id="productSwiper" class="container">
      <swiper :slidesPerView="1" :spaceBetween="30" :keyboard="{
        enabled: true,
      }" :pagination="{
  clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">
        <!-- 第一 -->
        <swiper-slide>
          <div class="main">
            <div class="row">
              <div class="left-side col-12 col-md-5">
                <div class="main-wrapper">
                  <h3 class="main-header">NATURAL GIFT</h3>
                  <h1 class="main-title">Camellia</h1>
                  <h2 class="main-subtitle">$ 1600</h2>
                </div>
                <div class="main-content">
                  <div class="main-content__title">熱銷10年！經典系列，在susi擁有自己的茶樹園，培育出肌膚保養專用的美肌成分。</div>
                  <div class="main-content__subtitle">為乾燥肌膚深層補水、鎖住水分，維持健康肌底，打造健康水嫩的完美肌膚，讓肌膚365天喝飽水！</div>
                  <q-btn class="more-menu" to="/products">
                    Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor"
                      fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="-5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </q-btn>
                </div>
              </div>
              <div class="center col-12 col-md-5">
                <div class="right-side__img">
                  <img class="bottle-bg" src="../../assets/img/front/index/bg0.jpg">
                  <img class="bottle-img" src="../../assets/img/product/去背咖啡瓶(500).png" />
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- 第二 -->
        <swiper-slide>
          <div class="main">
            <div class="row">
              <div class="left-side col-12 col-md-5">
                <div class="main-wrapper">
                  <h3 class="main-header">NATURAL GIFT</h3>
                  <h1 class="main-title">Plantae</h1>
                  <h2 class="main-subtitle">$ 1200</h2>
                </div>
                <div class="main-content">
                  <div class="main-content__title">具抗老化功效從清淨、健康的susi土壤中培育出的茶樹成分，能有效為肌膚鎖住水分，打造明亮、透明肌膚。</div>
                  <div class="main-content__subtitle">柔和的泡沫能更加深層洗淨肌膚。微生物分解-能在水中自動分解的微生物分解產品，且含98%以上純天然成分。</div>
                  <q-btn class="more-menu" to="/products">
                    Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor"
                      fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="-5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </q-btn>
                </div>
              </div>
              <div class="center col-12 col-md-5">
                <div class="right-side__img">
                  <img class="bottle-bg" src="../../assets/img/front/index/bg1.jpg">
                  <img class="bottle-img" src="../../assets/img/product/身體(500).png" />
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- 第三 -->
        <swiper-slide>
          <div class="main">
            <div class="row">
              <div class="left-side col-12 col-md-5">
                <div class="main-wrapper">
                  <h3 class="main-header">NATURAL GIFT</h3>
                  <h1 class="main-title">Sinensis</h1>
                  <h2 class="main-subtitle">$ 600</h2>
                </div>
                <div class="main-content">
                  <div class="main-content__title">SUSI護手霜：清爽且不黏膩的質地，蘊含豐富故事性的迷人香氣、輕巧好攜帶的保濕香氛護手霜。</div>
                  <div class="main-content__subtitle">為乾燥肌膚深層補水、鎖住水分，維持健康肌底，打造健康水嫩的完美肌膚，讓肌膚365天喝飽水！</div>
                  <q-btn class="more-menu" to="/products">
                    Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor"
                      fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="-5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </q-btn>
                </div>
              </div>
              <div class="center col-12 col-md-5">
                <div class="right-side__img">
                  <img class="bottle-bg" src="../../assets/img/front/index/bg2.jpg">
                  <img class="bottle-img" src="../../assets/img/product/護膚(500).png" />
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- 第四 -->
        <swiper-slide>
          <div class="main">
            <div class="row">
              <div class="left-side col-12 col-md-5">
                <div class="main-wrapper">
                  <h3 class="main-header">NATURAL GIFT</h3>
                  <h1 class="main-title">Theaceae</h1>
                  <h2 class="main-subtitle">$ 1100</h2>
                </div>
                <div class="main-content">
                  <div class="main-content__title">給予城市人一股自然療癒力量 : 鍾愛遊沐山林、獨自沈醉清涼靜謐；一款由薰衣草、胡荽籽、廣藿香、杜松莓精油調和的洗手露。</div>
                  <div class="main-content__subtitle">柔和的泡沫能更加深層洗淨肌膚。微生物分解-能在水中自動分解的微生物分解產品，且含98%以上純天然成分。</div>
                  <q-btn class="more-menu" to="/products">
                    Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor"
                      fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="-5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </q-btn>
                </div>
              </div>
              <div class="center col-12 col-md-5">
                <div class="right-side__img">
                  <img class="bottle-bg" src="../../assets/img/front/index/bg3.jpg">
                  <img class="bottle-img" src="../../assets/img/product/洗手瓶1(500).png" />
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </q-page>
</template>
<script>
/// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Keyboard, Pagination, Navigation]
    }
  }
}
</script>
<style lang="scss">
@import '../../css/test.scss'
</style>
