<template>
  <q-page class="bg text-center" style="padding-top: 100px; padding-bottom: 50vh; width: 99vw;">
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
          <q-btn class="plantBtn" round color="primary" label="了解更多" to="/story"/>
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
