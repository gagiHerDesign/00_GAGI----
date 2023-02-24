<template>
  <q-layout view="lHh Lpr lff" style="background: #F6F1EB">
    <q-header elevated class="bg-transparent">
      <q-toolbar>
        <q-toolbar-title class="text-center">
        </q-toolbar-title>
        <q-item style="color: #000;">{{ account }}，歡迎回來! </q-item>
        <q-btn flat round dense :icon="menu" class="q-mr-sm text-primary">
          <img :src="avatars" style="width: 50px;">
          <q-menu
          transition-show="jump-down"
          transition-hide="jump-up">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup v-if="isLogin" @click="logout" to="/">
                <q-item-section>登出</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup v-if="isLogin" to="/vip">
                <q-item-section>會員中心</q-item-section>
              </q-item>
              <q-item clickable v-close-popup v-if="isAdmin&&isAdmin" to="/admin">
                <q-item-section>管理者中心</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="250" :breakpoint="500">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">

          <q-btn flat to="/">
            <q-avatar size="150px">
              <img src="../assets/img/logo/logo.svg">
            </q-avatar>
          </q-btn>
          <q-item clickable v-ripple to="/admin">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section>
              首頁資訊
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/admin/product">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section>
              商品管理
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/admin/order">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>
              訂單管理
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/admin/member">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section>
              會員管理
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/admin/plant">
            <q-item-section avatar>
              <q-icon name="nature" />
            </q-item-section>

            <q-item-section>
              茶樹園區
            </q-item-section>

          </q-item>
          <q-item clickable v-ripple to="/admin/tree">
            <q-item-section avatar>
              <q-icon name="navigation" />
            </q-item-section>

            <q-item-section>
              茶樹資料
            </q-item-section>

          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user.js'
import { storeToRefs } from 'pinia'

const drawer = ref(false)
const user = useUserStore()
const { isLogin, isAdmin, avatars, account } = storeToRefs(user)
const { logout } = user

</script>

<style lang="scss">
@import '../css/register.scss';

.menu-list .q-item {
  border-radius: 0 32px 32px 0;
}

.q-header .q-layout__shadow:after {
  bottom: 0;
}
</style>
