<template>
  <q-page class="bg text-center" style="padding-top: 100px">
    <img
      src="https://img.freepik.com/free-psd/blank-perfume-glass-bottle-design_53876-113664.jpg?w=1380&t=st=1675820489~exp=1675821089~hmac=398ef2e87e500d4b0166da28a3f1f9f48ed2bbc266a74605634c71361b519ae8"
      >
    <p>我是商品總覽</p>
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
