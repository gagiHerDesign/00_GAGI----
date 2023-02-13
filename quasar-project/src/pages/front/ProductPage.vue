<template>
  <q-page class="bg text-center" style="padding-top: 100px; padding-bottom: 250vh;">
    <img
      src="https://img.freepik.com/free-psd/blank-perfume-glass-bottle-design_53876-113664.jpg?w=1380&t=st=1675820489~exp=1675821089~hmac=398ef2e87e500d4b0166da28a3f1f9f48ed2bbc266a74605634c71361b519ae8"
      >
    <h1>我是商品總覽</h1>
    <!-- tabs -->
    <!-- <q-tabs
        v-model="opentab"
        class="text-teal"
        v-for="tab in tabs"
        :key="tab._id"
      >
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs> -->
    <!-- 卡片片 -->
    <div class="q-pa-xs">
      <div class="row q-mx-auto" style="width:80%;">
        <div class="col-12 col-md-4" v-for="product in products" :key="product._id" style="margin-top: 5rem;">
          <ProductCard v-bind="product"/>
        </div>
    </div>
  </div>
  <q-dialog v-model="openRegisterModal" persistent>
        <div style="min-width: 600px;position: relative;overflow-x: hidden;">
        <div class="cancel">
          <img src="../assets/img/logo/XX.svg" v-close-popup>
        </div>
        <div id="q-app" style="min-height: 50vh; max-width: 500px;background: #FFFEF2; margin: auto;font-weight: 100;">
    <div class="q-mx-auto q-py-lg q-px-xl" style="min-width: 400px;">
      <h4 style="font-weight: 600;">註冊會員</h4>
      <q-form @submit="subRegister" class="q-gutter-md">
        <!-- 帳號 -->
        <q-input filled v-model="form.account" label="Your account *" :rules="[rules.required, rules.length]" counter
          maxlength="20"></q-input>
        <!-- 密碼 -->
        <q-input filled v-model="form.password" label="Your password *" :rules="[rules.required, rules.length]" counter
          maxlength="20"></q-input>
        <!-- 確認密碼 -->
        <q-input filled v-model="form.passwordConfirm" label="Confirm Your password *" :rules="[rules.required, rules.length]"
          counter maxlength="20"></q-input>

        <div class="text-center" style="margin-top: 3rem;">
          <!-- 註冊 -->
          <q-btn label="註冊" type="submit" :loading="loading" color="secondary" style="width: 100%; padding: 1rem; font-weight: 300;"/>

          <q-btn flat style="color: lightslategrey; font-weight: 300; margin-top: 1rem;" @click="openRegisterModal = false;openLoginModal = true" label="已經有 susi 會員?" />
        </div>
      </q-form>

    </div>
  </div>
</div>
      </q-dialog>
  </q-page>

</template>

<script setup>
import { reactive } from 'vue'
import { api } from '../../boot/axios.js'
import Swal from 'sweetalert2'
import ProductCard from '../../components/ProductCard.vue'
// import { filter } from 'compression';

const products = reactive([]);
// const tabs = { _id: 111, value: 555 };
// const opentab = computed(){
//   return tab.filter(tab => tab._id ===tab.value)
// }

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
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
</style>
