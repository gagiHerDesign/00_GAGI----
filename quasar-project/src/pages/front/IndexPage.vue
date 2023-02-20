<template>
  <q-page id="indexPage" class="bg text-center" style="padding-bottom: 50vh; width: 100vw;">
    <!-- 大圖區 -->
    <div id="hero"><video class="kv" ref="video" src="../../assets/img/front/hero.mp4" muted></video>
      <!-- <div class="Big_title d-flex">
            <div class="Big_h1">
              <p style="font-size: 20px;">
                一起守護您的未來</p>
              綠善休閒農場

            </div>
          </div> -->
      <div class="sm_title">
        <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" :navigation="false" :modules="modules" class="mySwiper">
          <swiper-slide>
            <h6>✦歡迎蒞臨綠善觀光農場</h6>
          </swiper-slide>
          <swiper-slide>
            <h6>✦回歸自然，感受田園風光</h6>
          </swiper-slide>
          <swiper-slide>
            <h6>✦讓心靈去旅行，體驗大自然的美好</h6>
          </swiper-slide>
          <swiper-slide>
            <h6>✦放慢腳步，享受農場生活的悠閒</h6>
          </swiper-slide>
          <swiper-slide>
            <h6>✦和家人一起來農場，共創美好回憶</h6>
          </swiper-slide>
          <swiper-slide>
            <h6>✦種下快樂，收穫幸福，農場生活，讓生命更精彩</h6>
          </swiper-slide>
          <swiper-slide>
            <h6>✦農場裡，自然之美盡收眼底，心靈之旅留下美好印記</h6>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- 跑馬燈區 -->
    <marquee class="marquee" align="middle">Protect the environment, love our planet.</marquee>
    <div id="indexContainer">

      <!-- 品牌理念 -->
      <div id="brandStory" class="row text-center">
        <!-- 橫大圖 -->
        <div class="story">
          <img class="storyImg" src="../../assets/img/title/story.png" style="height: 200px;" />
          <q-parallax class="col-12 parallax" src="../../assets/img/front/大圖.jpg">
            <!-- <h1 class="text-white">Basic</h1> -->
          </q-parallax>
        </div>
        <!-- 三張說明圖 -->
        <div class="services_popup row">
          <div class="popup col-12 col-md-3">
            <img src="../../assets/img/front/小圖1.svg">
            <div class="pop_info">

              <div class="title_s">
                <span>Explore It</span>
              </div>

              <div class="info">
                在這個快速發展的城市中，大家時常感到生活緊張，而天然休閒農場品牌是一個能帶給你放鬆和安寧的好去處。在這裡，你能看到清新的空氣，美麗的景色和和平的環境。你能夠與家人和朋友共同探索美麗的自然風光</div>
            </div>
          </div>
          <div class="popup col-12 col-md-3">
            <img src="../../assets/img/front/小圖2.svg" alt="">
            <div class="pop_info">
              <div class="title_s">
                <span>Natural Leisure </span>
              </div>
              <div class="info">天然休閒農場品牌是一個能夠帶給您極大樂趣的地方。在這裡，您可以與自然共舞，探索這個美麗的世界。您可以潛入叢林，騎馬遠足，欣賞風景等等。</div>
            </div>
          </div>
          <div class="popup col-12 col-md-3">
            <img src="../../assets/img/front/小圖3.svg" alt="">
            <div class="pop_info">
              <div class="title_s">
                <span>
                  Enjoy Nature
                </span>
              </div>
              <div class="info">品嚐美味的農產品，甚至還能體驗一些有趣的農場活動，例如摘水果，挖蔬菜等等。在這裡，你可以完全放鬆，遠離城市的塵囂，並且深深感受到大自然的力量和美麗。
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- 產品介紹 -->
      <div id="productSwiper" class="container">
        <img src="../../assets/img/title/product.png" align="right">
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
      <!-- 一個視差的地方 -->
      <q-parallax src="../../assets/img/front/大圖2.jpg" style="height: 30vh;">
        <img src="../../assets/img/logo/logo-front.svg" >
      </q-parallax>
      <!-- 種樹去 -->
      <div id="plant" class=" row text-center">
        <div class="col-12 col-md-6">
          <img class="imgF" src="../../assets/img/front/拿著花.png" alt="拿著花">
        </div>
        <div class="col-12 col-md-6">
          <div class="plant2">
            <img src="../../assets/img/title/green.png">
            <div class="plantInfo">
              <h3 class="text-orange">認養茶樹</h3>
              <q-separator />
              <h6>綠善休閒農場是一種農商整合模式，關鍵在透過同一即集水區的整合，由在地農家一起將生態成為品牌。</h6>
              <h6>這是我們提出的「茶樹認養」模式，將夢想訴諸眾多的行動，一步一步往前邁進。</h6>
              <q-btn class="plantBtn" round color="primary" label="了解更多" to="/story" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </q-page>
  <div ref="box" class="box"></div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

export default {
  setup () {
    const box = ref(null)

    onMounted(() => {
      gsap.to(box.value, { duration: 1, x: 100 })
    })

    return { box, modules: [Autoplay, Pagination, Navigation] }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  mounted () {
    const video = this.$refs.video
    video.play()
    // 如果影片結束
    video.addEventListener('ended', () => {
      video.currentTime = 0
      video.play()
    })
  }
}
</script>

<style lang="scss">
@import '../../css/index.scss';

.box {
  width: 100px;
  height: 100px;
  background-color: rgb(255, 255, 255);
}
</style>
