<template>
  <q-page class="bg">
    <div class="container">
    <h6 style="font-weight: 600;">消費者會員資料</h6>
    <div class="q-pa-md" style="max-width: 100%">
    <div class="q-pa-md q-gutter-md">
      <q-item clickable v-ripple style="background: #fff;" v-for="n in 55" :key="n">
        <q-item-section>Single line item</q-item-section>
        <q-item-section>Single line item</q-item-section>
        <q-item-section>Single line item</q-item-section>
        <q-item-section>Single line item</q-item-section>
      </q-item>

      <q-item clickable v-ripple style="background: #fff;">
        <q-item-section>
          <q-item-label>Item with caption</q-item-label>
          <q-item-label caption>Caption 有註解的文字</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>Item with caption</q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </div>

    </div>
  </q-page>
</template>

<script setup>

</script>

<style lang="scss">
.bg {
  background: #F6F1EB;
  padding-top: -10rem;
  border: 1px solid rgba(255, 255, 255, 0);
}
.container{
  width: 80%;
  margin: auto;
}
</style>
