<template>
  <q-page id="frontTree" class="bg" style="padding-top: 110px; padding-bottom: 30vh;">
<div class="container">
  <!-- 導引 -->
  <q-breadcrumbs class="text-brown">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" color="primary" />
        </template>

        <q-breadcrumbs-el label="首頁" icon="home" to="/" />
        <q-breadcrumbs-el label="品牌理念" icon="widgets" to="/story" />
        <q-breadcrumbs-el label="茶樹介紹" icon="widgets" to="/story" />
      </q-breadcrumbs>
      <!-- 卡片片 -->
      <div class="treeCards q-pa-xs">
      <div class="row q-mx-auto">
        <div class="col-12 col-md-4" v-for="i in filterTree()" :key="i" style="margin-top: 5rem;">
          <TreeCard v-bind="i" />
        </div>
      </div>
    </div>
</div>
  </q-page>

  </template>
<script setup>
import { reactive } from 'vue'
import { api } from '../../boot/axios.js'
import Swal from 'sweetalert2'
import TreeCard from '../../components/TreeCard.vue'

const trees = reactive([])

const filterTree = () => {
  return trees.filter(item => item.adopt === false)
}

;(async () => {
  try {
    const { data } = await api.get('/trees')
    trees.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>

<style lang="scss">
@import '../../css/product.scss';

.bg {
  background: #F6F1EB;
  padding-top: -10rem;
}
</style>
