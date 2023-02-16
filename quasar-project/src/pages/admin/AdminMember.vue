<template>
    <q-page class="bg">
    <div class="container">
    <h6 style="font-weight: 600;">管理者會員</h6>
      <!-- list -->
      <div style="max-width: 100%">
        <div class="q-pa-md q-gutter-md">
          <q-item clickable v-ripple class="text-center">
            <q-item-section>使用者</q-item-section>
            <q-item-section>電話</q-item-section>
            <q-item-section>信箱</q-item-section>
            <q-item-section>性別</q-item-section>
          </q-item>
          <q-separator />
          <!-- 下面的訂單們 -->
          <q-item clickable v-ripple class="text-center" style="background: #fff;" v-for="vip in vips" :key="vip._id">
            <q-item-section>
              {{ vip.account }}
            </q-item-section>
            <q-item-section>
              {{ vip.phone }}
            </q-item-section>
            <q-item-section>
              {{ vip.email }}
            </q-item-section>
            <q-item-section>
              {{ vip.gender?'女':'男' }}
            </q-item-section>
          </q-item>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '../../boot/axios.js'
import Swal from 'sweetalert2'

const vips = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    vips.push(...data.result)
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
.bg {
  background: #F6F1EB;
  padding-top: -10rem;
}
.container{
  width: 80%;
  margin: auto;
}
</style>
