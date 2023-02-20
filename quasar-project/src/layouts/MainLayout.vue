<template>
  <q-layout view="hHh lpR fFf" style="background: #F6F1EB">

    <q-header style="padding-top: 5px;" reveal elevated class="bg text-primary">

      <!-- 第一行 -->
      <q-toolbar>
        <q-toolbar-title style="position: absolute;left: 45vw;">
          <q-btn flat class="q-mr-sm" to="/">

              <img style="height: 40px;" src="../assets/img/logo/logo-front.svg">

          </q-btn>
        </q-toolbar-title>
        <div style="position: absolute;left: 85vw;">
        <q-btn flat dense v-if="isLogin"  icon="shopping_cart" class="q-mr-sm" to="/cart" >
          <q-badge :label="cart" rounded floating color="accent"/>購物車
        </q-btn>
        <q-btn flat round dense icon="account_circle" class="q-mr-sm">
          <q-menu
          transition-show="jump-down"
          transition-hide="jump-up"
          >
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
        </q-btn></div>
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
        <q-input filled type="password" v-model="form.password" label="Your password *" :rules="[rules.required, rules.length]" counter
          maxlength="20"></q-input>
        <!-- 確認密碼 -->
        <q-input filled type="password" v-model="form.passwordConfirm" label="Confirm Your password *" :rules="[rules.required, rules.length]"
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
      <!-- 登入視窗 -->
      <q-dialog v-model="openLoginModal" persistent>
        <div style="min-width: 600px;position: relative;overflow-x: hidden;">
        <div class="cancel">
          <img src="../assets/img/logo/XX.svg" v-close-popup>
        </div>
        <div id="q-app" style="min-height: 50vh; max-width: 500px;background: #FFFEF2; margin: auto;font-weight: 100;">
          <div class=" q-py-lg" style="max-width: 500px; margin-left: 2rem;margin-right: 2rem;">
            <h4 style="font-weight: 600;">會員登入</h4>
            <q-form @submit="subLogin" class="q-gutter-md">
              <!-- 帳號 -->
              <q-input filled v-model="formLog.account" label="Your account *"
                :rules="[rules.required, rules.length]" counter maxlength="20"></q-input>
              <!-- 密碼 -->
              <q-input filled type="password" v-model="formLog.password" label="Your password *" :rules="[rules.required, rules.length]" counter maxlength="20"></q-input>
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
      </div>
      </q-dialog>

      <!-- footer -->
      <q-toolbar class="bg-primary q-py-xl" style="color: #F6F1EB;">
        <div class="row q-gutter-md q-mx-auto" style="width:80%">
        <div class="col-12 col-sm-5">
          <h6>交通資訊</h6>
    <a href="https://www.google.com/maps/place/%E7%B6%A0%E5%96%84%E7%94%9F%E6%B4%BB%E8%BE%B2%E5%A0%B4+(%E8%AB%8B%E5%85%88%E4%BE%86%E9%9B%BB%E9%A0%90%E7%B4%84)/@24.8278207,121.297251,17z/data=!3m1!4b1!4m6!3m5!1s0x346816518056441b:0x8f65bf18fca9e8c9!8m2!3d24.8278158!4d121.2994397!16s%2Fg%2F11f5dp63m0?hl=zh-TW">
      <img class="map" src="../assets/img/front/地圖.png">
    </a>
      </div>
      <div class="col-12 col-sm-3 q-px-lg">
        <h6>聯絡資訊</h6>
        <q-separator style="background: #fff;"/>
        <br>
        <q-avatar icon="call"/>02-2232-5886
        <br>
        <q-avatar icon="home"/>335桃園市大溪區承恩路385號
        <br>
        <q-avatar icon="flare"/>
        <a href="https://www.facebook.com/GreenPeaceLivingFarm/" style="color: #F6F1EB;">Facebook</a>
        <br>
        <q-avatar icon="send"/>
        <a href="https://www.youtube.com/@user-ki3uv7tt6t" style="color: #F6F1EB;">Youtube</a>

      </div>
      <div class="col-12 col-sm-3 q-px-lg">
        <h6>友善連結</h6>
        <q-separator style="background: #fff;"/>
        <br>
        <q-btn flat label="最新消息" to="/"></q-btn>
        <br>
        <q-btn flat label="品牌理念" to="/story"></q-btn>
        <br>
        <q-btn flat label="產品系列" to="/products"></q-btn>
        <br>
        <q-btn flat label="登入會員" @click="openLoginModal=true"></q-btn>
        <br>
      </div>
</div>
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
  background: rgba(255,255,255,0.5);
}

.q-header .q-layout__shadow:after {
  bottom: 0;
}
.map:hover{
transform: scale(1.1);
transition: 1s;
}

</style>
