<template>
  <q-page class="bg text-center" style="padding-top: 100px">
    <img
      src="../../assets/img/story/story.png"
      style="width:99vw;"
      >
    <p>我是品牌理念</p>
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
