<template>
  <q-page class="bg text-center" style="padding-top: 100px; width: 99vw;">
    <!-- 大圖區 -->
    <div id="hero">
      <div class="Big_title d-flex">
        <div class="Big_h1">
          <p style="font-size: 20px;">
            一起守護您的未來</p>
          綠善休閒農場
        </div>
      </div>
      <video class="kv" ref="video" src="../../assets/img/front/hero.mp4" muted></video>
    </div>
    <div id="indexContainer">

      <!-- 跑馬燈區 -->
      <marquee class="marquee" align="middle">Protect the environment, love our planet.</marquee>
      <!-- 品牌理念 -->
      <div class="row text-center">
        <q-parallax class="col-12" src="../../assets/img/front/大圖.jpg">
          <h1 class="text-white">Basic</h1>
        </q-parallax>
        <!-- 三張說明圖 -->
        <div class="services_popup">
          <div class="popup">
            <img src="../../assets/img/front/小圖1.svg">
            <div class="pop_info">

              <div class="title_s">
                <span>Brand
                  Promotion</span>
              </div>

              <a>We can facilitate promoting your brand to a curious audience via YouTube videos or livestreams on
                Twitch
                and YouTube. We aim to release creative and thought-provoking segmentsthat continuously push the
                creative
                boundaries of influencer marketing.</a>
            </div>
          </div>
          <div class="popup">
            <img src="../../assets/img/front/小圖2.svg" alt="">
            <div class="pop_info">
              <div class="title_s">
                <span>Appearances </span>
              </div>
              <a>Our creators have long-running experience leading in-house panels, hosting televised events, and even
                voice acting. We aim to release creative.</a>
            </div>
          </div>
          <div class="popup">
            <img src="../../assets/img/front/小圖3.svg" alt="">
            <div class="pop_info">
              <div class="title_s">
                <span>Japan as a </span>
                <span>
                  Global Hub
                </span>
              </div>
              <a>We support international talent in making Japan their new home-base for content creation and help
                creators streamline their process to maximize their growth and reach out to new audiences.
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </q-page>
<div ref="box" class="box"></div>
</template>

<script>
export default {
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
<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const box = ref(null)

onMounted(() => {
  gsap.to(box.value, { duration: 1, x: 100 })
})
</script>

<style lang="scss">
@import '../../css/index.scss';

.bg {
  background: #F6F1EB;
  padding-top: -10rem;
}

.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
