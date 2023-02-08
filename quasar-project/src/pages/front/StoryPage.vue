<template>
  <q-page class="bg text-center" style="padding-top: 100px">
    <img
      src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
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
