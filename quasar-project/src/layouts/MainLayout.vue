<template>
  <q-layout view="hHh lpR fFf" style="background: #F6F1EB">

    <q-header reveal elevated class="bg bg-transparent text-primary">

      <!-- 第一行 -->
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <q-btn flat class="q-mr-sm" to="/">

              <img style="height: 40px;" src="../assets/img/logo/logo-front.svg">

          </q-btn>
        </q-toolbar-title>
        <q-btn flat round dense v-if="isLogin"  icon="shopping_cart" class="q-mr-sm" to="/cart">
          <q-badge :content="cart" rounded floating color="accent" label="0"/>購物車
        </q-btn>
        <q-btn flat round dense icon="account_circle" class="q-mr-sm">
          <q-menu>
          <q-list style="min-width: 100px">
              <q-item clickable v-close-popup v-if="!isLogin" @click="openLoginModal= true">
              <q-item-section>登入/註冊</q-item-section>
            </q-item>
            <q-item clickable v-close-popup v-if="isLogin" @click="logout">
              <q-item-section>登出</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup v-if="isLogin" to="/vip">
              <q-item-section>會員中心</q-item-section>
            </q-item>
            <q-item clickable v-close-popup v-if="isAdmin&&isLogin" to="/admin">
              <q-item-section>管理者中心</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        </q-btn>
      </q-toolbar>
      <!-- 第二行 -->
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <q-btn label="最新消息" to="/"></q-btn>
          <q-btn label="品牌理念" to="/story"></q-btn>
          <q-btn label="產品系列" to="/products"></q-btn>
        </q-toolbar-title>

      </q-toolbar>

    </q-header>

    <!-- container -->
    <q-page-container style="padding-top: 0;">
      <router-view />
      <!-- 彈出視窗 -->
      <!-- 註冊視窗 -->
      <q-dialog v-model="openRegisterModal" persistent>
        <div id="q-app" style="min-height: 50vh; background: #FFFEF2; margin: auto;">
    <div class="q-mx-auto q-py-lg" style="max-width: 500px">
      <div class="btn_submit" align="right">
        <q-btn flat round color="primary" icon="close" v-close-popup></q-btn>
      </div>
      <h2>Create Account</h2>
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
      </q-dialog>
      <!-- 登入視窗 -->
      <q-dialog v-model="openLoginModal" persistent>
        <div id="q-app" style="min-height: 50vh; background: #FFFEF2; margin: auto;">
          <div class=" q-py-lg" style="max-width: 500px; margin-left: 2rem;margin-right: 2rem;">
            <div class="btn_submit" align="right">
              <q-btn flat round color="primary" icon="close" v-close-popup></q-btn>
            </div>
            <h4 style="font-weight: 600;">會員登入</h4>
            <q-form @submit="subLogin" class="q-gutter-md">
              <!-- 帳號 -->
              <q-input filled v-model="formLog.account" label="Your account *"
                :rules="[rules.required, rules.length]" counter maxlength="20"></q-input>
              <!-- 密碼 -->
              <q-input filled v-model="formLog.password" label="Your password *" :rules="[rules.required, rules.length]" counter maxlength="20"></q-input>
            <div>
                <!-- 登入 -->
                <q-btn style="width: 100%; padding: 1rem; font-weight: 300;" label="登入" type="submit" :loading="loading" color="secondary" icon="arrow_forward"/>
                <p style="font-weight: 600; font-size: 20px; margin-top: 2rem;" > 第一次來sushi?</p>
                <p style="font-weight: 300; font-size: 15px;" > 立即註冊享有更多優惠</p>
                <q-btn outline style="color: lightslategrey; font-weight: 300; margin-top: 1rem; width: 100%;padding: 1rem;" @click="openRegisterModal = true;openLoginModal = false" label="註冊新會員" type="submit" :loading="loading" color="secondary" />
              </div>
            </q-form>

          </div>
        </div>
      </q-dialog>

      <!-- footer -->
      <q-toolbar class="bg-secondary">
        <q-toolbar-title>你好/我是前台Footer</q-toolbar-title>
      </q-toolbar>
      <!-- place QPageScroller at end of page -->
      <q-page-scroller style="z-index: 100;" position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref, reactive } from 'vue'
import validator from 'validator'
import Swal from 'sweetalert2'
// import { useRouter } from 'vue-router'
import { api } from '../boot/axios'
import { useUserStore } from '../stores/user.js'
import { storeToRefs } from 'pinia'

// const router = useRouter()
const loading = ref(false)
const openRegisterModal = ref(false)
const openLoginModal = ref(false)
const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)
const { logout } = user

const form = reactive({
  account: '',
  password: '',
  passwordConfirm: ''
  // email: ''
})
const formLog = reactive({
  account: '',
  password: ''
})
const rules = {
  email (value) {
    return validator.isEmail(value) || '格式錯誤'
  },
  required (value) {
    // 第一個驚嘆號轉成布林值，第二個驚嘆號是反過來
    return !!value || '欄位必填'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 20) || '長度必須為 4 ~ 20 個字'
  },
  passwordConfirm (value) {
    return (value === form.password) || '密碼不一致'
  }
}

const subRegister = async () => {
  // 如果驗證失敗
  loading.value = true
  try {
    await api.post('/users', form)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    openRegisterModal.value = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
  loading.value = false
}

const subLogin = async () => {
  loading.value = true
  await user.login(formLog)
  loading.value = false
  openLoginModal.value = false
}

</script>

<style lang="scss">
  @import '../css/register.scss';

.bg {
  backdrop-filter: blur(10px);
}

.q-header .q-layout__shadow:after {
  bottom: 0;
}

</style>
