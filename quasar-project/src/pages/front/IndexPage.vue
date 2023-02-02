<template>
  <q-page class="bg text-center" style="padding-top: 100px">
    <img
      src="https://m.media-amazon.com/images/S/aplus-media/sota/cad9efa1-99bb-40cb-a4b5-f488632f5be2.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
      alt="">
    <p>我是首頁</p>
    <p v-for="n in 55" :key="n">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore
      vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis
      voluptate?
    </p>
  </q-page>
</template>

<script>
</script>

<style>
.bg {
  background: #F6F1EB;
  padding-top: -10rem;
}
</style>
