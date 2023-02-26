<template>
  <q-page id="indexPage" class="bg text-center" style="padding-bottom: 10vh; width: 99vw;">
    <div id="hero">
      <!-- 大圖區 -->
      <video class="kv" ref="video" src="../../assets/img/front/hero.mp4" muted></video>
      <div class="slogan">
        <p id="role1">✦歡迎蒞臨綠善觀光農場✦</p>
        <p id="role2">✦回歸自然，感受田園風光✦</p>
        <p id="role3">✦讓心靈去旅行，體驗大自然的美好✦</p>
        <p id="role4">✦放慢腳步，享受農場生活的悠閒✦</p>
        <p id="role5">✦和家人共遊農場，共創美好回憶✦</p>
        <p id="role6">✦種下快樂，收穫幸福✦</p>
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
          </q-parallax>
        </div>
        <!-- 三張說明圖 -->
        <div class="services_popup row">
          <div ref="popup" class="popup col-12 col-md-3">
            <img class="popimg" src="../../assets/img/front/小圖1.svg">
            <div class="pop_info">

              <div class="title_s">
                <span>探索休閒農場</span>
              </div>

              <div class="info">
                在這個快速發展的城市中，大家時常感到生活緊張，而天然休閒農場品牌是一個能帶給你放鬆和安寧的好去處。在這裡，你能看到清新的空氣，美麗的景色和和平的環境。你能夠與家人和朋友共同探索美麗的自然風光</div>
            </div>
          </div>
          <div class="popup col-12 col-md-3">
            <img class="popimg" src="../../assets/img/front/小圖2.svg" alt="">
            <div class="pop_info">
              <div class="title_s">
                <span>與自然共舞</span>
              </div>
              <div class="info">天然休閒農場品牌是一個能夠帶給您極大樂趣的地方。在這裡，您可以與自然共舞，探索這個美麗的世界。您可以潛入叢林，騎馬遠足，欣賞風景等等。</div>
            </div>
          </div>
          <div class="popup col-12 col-md-3">
            <img class="popimg" src="../../assets/img/front/小圖3.svg" alt="">
            <div class="pop_info">
              <div class="title_s">
                <span>
                  感受自然之美
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
        <img src="../../assets/img/logo/logo-front.svg" style="height: 40%;">
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
              <h5 class="text-orange">認養茶樹</h5>
              <h6>綠善生活農場，為了實踐保護自然生態、淨化身心靈、完成大同村的理念，而創建的一個多功能食農教育與香草療育示範基地。</h6>
              <h6>它同時肩負著推廣綠善農法，並致力於引導人們回歸自然、健康喜樂的綠善心生活，以實際行動支持友善耕種小農及地方創生。</h6>
              <q-div class="realize">
                <q-btn class="plantBtn" round label="了解更多" to="/story">
                  <svg class="plantBtn2" preserveAspectRatio="xMidYMid meet" width="20vh" height="20vh"
                    viewBox="0 0 302 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M163.115 13.7797L154.055 3.06381C152.457 1.17398 149.543 1.17397 147.945 3.06381L138.885 13.7797C138.187 14.6058 136.958 14.7268 136.112 14.0529L125.135 5.31045C123.199 3.76866 120.342 4.33701 119.143 6.50226L112.347 18.7799C111.824 19.7263 110.642 20.0847 109.681 19.5888L97.2093 13.1559C95.0098 12.0214 92.3183 13.1362 91.5653 15.4937L87.2953 28.8612C86.9662 29.8916 85.8774 30.4736 84.8377 30.1748L71.3508 26.2986C68.9723 25.6149 66.55 27.2335 66.2713 29.6925L64.6913 43.6362C64.5695 44.7111 63.6151 45.4943 62.5372 45.4041L48.5532 44.2334C46.087 44.027 44.027 46.087 44.2334 48.5532L45.4041 62.5372C45.4943 63.6151 44.7111 64.5695 43.6362 64.6913L29.6925 66.2713C27.2335 66.55 25.6149 68.9723 26.2986 71.3508L30.1748 84.8377C30.4736 85.8774 29.8916 86.9662 28.8612 87.2953L15.4937 91.5653C13.1362 92.3183 12.0214 95.0098 13.1559 97.2093L19.5888 109.681C20.0847 110.642 19.7263 111.824 18.7799 112.347L6.50226 119.143C4.33701 120.342 3.76866 123.199 5.31045 125.135L14.0529 136.112C14.7268 136.958 14.6058 138.187 13.7797 138.885L3.06381 147.945C1.17398 149.543 1.17397 152.457 3.06381 154.055L13.7797 163.115C14.6058 163.813 14.7268 165.042 14.0529 165.888L5.31045 176.865C3.76866 178.801 4.33701 181.658 6.50226 182.857L18.7799 189.653C19.7263 190.176 20.0847 191.358 19.5888 192.319L13.1559 204.791C12.0214 206.99 13.1362 209.682 15.4937 210.435L28.8612 214.705C29.8916 215.034 30.4736 216.123 30.1748 217.162L26.2986 230.649C25.6149 233.028 27.2335 235.45 29.6925 235.729L43.6362 237.309C44.7111 237.431 45.4943 238.385 45.4041 239.463L44.2334 253.447C44.027 255.913 46.087 257.973 48.5532 257.767L62.5372 256.596C63.6151 256.506 64.5695 257.289 64.6913 258.364L66.2713 272.307C66.55 274.767 68.9723 276.385 71.3508 275.701L84.8377 271.825C85.8774 271.526 86.9662 272.108 87.2953 273.139L91.5653 286.506C92.3183 288.864 95.0098 289.979 97.2093 288.844L109.681 282.411C110.642 281.915 111.824 282.274 112.347 283.22L119.143 295.498C120.342 297.663 123.199 298.231 125.135 296.69L136.112 287.947C136.958 287.273 138.187 287.394 138.885 288.22L147.945 298.936C149.543 300.826 152.457 300.826 154.055 298.936L163.115 288.22C163.813 287.394 165.042 287.273 165.888 287.947L176.865 296.69C178.801 298.231 181.658 297.663 182.857 295.498L189.653 283.22C190.176 282.274 191.358 281.915 192.319 282.411L204.791 288.844C206.99 289.979 209.682 288.864 210.435 286.506L214.705 273.139C215.034 272.108 216.123 271.526 217.162 271.825L230.649 275.701C233.028 276.385 235.45 274.767 235.729 272.307L237.309 258.364C237.431 257.289 238.385 256.506 239.463 256.596L253.447 257.767C255.913 257.973 257.973 255.913 257.767 253.447L256.596 239.463C256.506 238.385 257.289 237.431 258.364 237.309L272.307 235.729C274.767 235.45 276.385 233.028 275.701 230.649L271.825 217.162C271.526 216.123 272.108 215.034 273.139 214.705L286.506 210.435C288.864 209.682 289.979 206.99 288.844 204.791L282.411 192.319C281.915 191.358 282.274 190.176 283.22 189.653L295.498 182.857C297.663 181.658 298.231 178.801 296.69 176.865L287.947 165.888C287.273 165.042 287.394 163.813 288.22 163.115L298.936 154.055C300.826 152.457 300.826 149.543 298.936 147.945L288.22 138.885C287.394 138.187 287.273 136.958 287.947 136.112L296.69 125.135C298.231 123.199 297.663 120.342 295.498 119.143L283.22 112.347C282.274 111.824 281.915 110.642 282.411 109.681L288.844 97.2093C289.979 95.0098 288.864 92.3183 286.506 91.5653L273.139 87.2953C272.108 86.9662 271.526 85.8774 271.825 84.8377L275.701 71.3508C276.385 68.9723 274.767 66.55 272.307 66.2713L258.364 64.6913C257.289 64.5695 256.506 63.6151 256.596 62.5372L257.767 48.5532C257.973 46.087 255.913 44.027 253.447 44.2334L239.463 45.4041C238.385 45.4943 237.431 44.7111 237.309 43.6362L235.729 29.6925C235.45 27.2335 233.028 25.6149 230.649 26.2986L217.162 30.1748C216.123 30.4736 215.034 29.8916 214.705 28.8612L210.435 15.4937C209.682 13.1362 206.99 12.0214 204.791 13.1559L192.319 19.5888C191.358 20.0847 190.176 19.7263 189.653 18.7799L182.857 6.50226C181.658 4.33701 178.801 3.76866 176.865 5.31045L165.888 14.0529C165.042 14.7268 163.813 14.6058 163.115 13.7797Z"
                      stroke="currentColor" stroke-width="2" />
                  </svg></q-btn>
              </q-div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </q-page>
<!-- <div ref="box" class="box"></div> --></template>

<script>
import { onMounted } from 'vue'
// import $ from 'jquery'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

gsap.registerPlugin(ScrollTrigger)
const triggers = ScrollTrigger.getAll()

export default {
  setup () {
    onMounted(() => {
      const tl1 = gsap.timeline({
        repeat: -1
      })
      tl1.from('.popimg', {
        duration: 2,
        rotation: 15
        // scale: 0.5
      })
      tl1.to('.popimg', {
        duration: 2,
        rotation: 15
        // scale: 0.5
      })
      // gsap.from('.popup', {
      //   scrollTrigger: {
      //     trigger: '.services_popup',
      //     start: 'top 50%',
      //     end: '100% 50%'
      //   },
      //   yPercent: 50,
      //   scale: 0.1
      // })
      const tlText = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })

      tlText.from('#role1', { opacity: 0, duration: 2 })
      tlText.to('#role1', { opacity: 0, duration: 2, delay: 2, stagger: 1 })

      tlText.from('#role2', { opacity: 0, duration: 2 }, '+=1')
      tlText.to('#role2', { opacity: 0, duration: 2, delay: 2, stagger: 1 })

      tlText.from('#role3', { opacity: 0, duration: 2 }, '+=1')
      tlText.to('#role3', { opacity: 0, duration: 2, delay: 2, stagger: 1 })

      tlText.from('#role4', { opacity: 0, duration: 2 }, '+=1')
      tlText.to('#role4', { opacity: 0, duration: 2, delay: 2, stagger: 1 })

      tlText.from('#role5', { opacity: 0, duration: 2 }, '+=1')
      tlText.to('#role5', { opacity: 0, duration: 2, delay: 2, stagger: 1 })

      tlText.from('#role6', { opacity: 0, duration: 2 }, '+=1')
      tlText.to('#role6', { opacity: 0, duration: 2, delay: 2, stagger: 1 })
    })
    return { triggers, modules: [Autoplay, Pagination, Navigation] }
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
</style>
