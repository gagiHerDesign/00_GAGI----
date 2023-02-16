<template>
  <q-page class="bg text-center" style="padding-top: 100px">
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
    <img src="../../assets/img/front/photo-1588979355313-6711a095465f.jpeg">
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
