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
      <!-- 產品介紹 -->
<div id="indexPro">
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
        1<br/>2<br/>3<br/>4
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium est autem amet minus, atque consequatur iure dolor id inventore sit magnam sint, voluptates deserunt beatae? Error eveniet quam dicta!
      </p>
    </div>

    <div class="layer" data-scene="2">
      <h2 class="heading">
        Facts and Stats on Ocean Pollution
      </h2>
      <p class="paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, amet hic provident ipsa placeat ad. Excepturi distinctio consectetur voluptatibus rem deleniti ducimus officia natus, magnam aut architecto sint reprehenderit provident?
      </p>
    </div>

    <div class="layer" data-scene="3">
      <h2 class="heading">
        Learn more about how you can help.
      </h2>
      <p class="paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, amet hic provident ipsa placeat ad. Excepturi distinctio consectetur voluptatibus rem deleniti ducimus officia natus, magnam aut architecto sint reprehenderit provident?
      </p>
    </div>

    <div class="layer" data-scene="4">
      <h2 class="heading">
        Join the fight to defend our oceans.
      </h2>
      <p class="paragraph">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi temporibus explicabo aspernatur dignissimos veritatis. Voluptate quis quia sed totam quasi placeat, odio quam fuga consectetur voluptatibus praesentium tempore vel molestiae?
      </p>
    </div>

  </div>
</main>
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
  background-color: rgb(255, 255, 255);
}
</style>
