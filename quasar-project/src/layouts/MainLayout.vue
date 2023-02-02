<template>
  <q-layout view="hHh lpR fFf" style="background: #F6F1EB">

    <q-header reveal elevated class="bg bg-transparent text-primary">

      <!-- 第一行 -->
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <q-btn flat round dense icon="menu" class="q-mr-sm"></q-btn>
          sushi
        </q-toolbar-title>
        <q-btn flat round dense icon="shopping_cart" class="q-mr-sm"></q-btn>
        <q-btn flat round dense icon="account_circle" class="q-mr-sm" @click="confirm = true"></q-btn>
      </q-toolbar>
      <!-- 第二行 -->
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <q-tabs v-model="tab">
            <q-tab name="images" label="最新消息" />
            <q-tab name="videos" label="品牌理念" />
            <q-tab name="articles" label="產品系列" />
          </q-tabs>
        </q-toolbar-title>

      </q-toolbar>

    </q-header>

    <!-- container -->
    <q-page-container style="padding-top: 0;">
      <router-view />
      <!-- 彈出視窗 -->
      <q-dialog v-model="confirm" persistent>

        <div id="q-app" style="min-height: 50vh; background: #fff; margin: auto;">
          <div class="q-mx-auto q-py-lg" style="max-width: 500px">

            <q-form v-model="valid" @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <!-- 帳號 -->
              <q-input filled v-model="form.account" label="Your account *"
                :rules="[rules.required, rules.length]" counter="20" maxlength="20"></q-input>
              <!-- 密碼 -->
              <q-input filled v-model="form.password" label="Your password *" :rules="[rules.required, rules.length]" counter="20" maxlength="20"></q-input>
              <!-- 確認密碼 -->
              <q-input filled v-model="form.passwordConfirm" label="Your password *" :rules="[rules.required, rules.length]" counter="20" maxlength="20"></q-input>

              <div>
                <!-- 註冊 -->
                <!-- <q-btn label="Submit" type="submit" color="primary" :loading="loading"></q-btn> -->
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
                <q-btn
                    :loading="progress[2].loading"
                    :percentage="progress[2].percentage"
                    dark-percentage
                    unelevated
                    color="orange"
                    text-color="grey-9"
                    @click="startComputing(2)"
                    icon="cloud_upload"
                    style="width: 100px"
                  />
              </div>
            </q-form>

            <div class="btn_submit" align="right" style="">
              <q-btn flat label="關閉視窗" color="primary" v-close-popup></q-btn>
            </div>
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
// import { useQuasar } from 'quasar'
import validator from 'validator'
import { ref, reactive, onBeforeUnmount } from 'vue'
// import Swal from 'sweetalert2'
// import { useRouter } from 'vue-router'

// const $q = useQuasar()
// const router = useRouter()
const valid = ref(false)
// const loading = ref(false)
const progress = ref([{ loading: false, percentage: 0 }])
const intervals = [null, null, null]
const tab = ref('')
const confirm = ref(false)
// const account = ref(null)
// const password = ref(null)

const form = reactive({
  account: '',
  password: '',
  passwordConfirm: ''
  // email: ''
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

function startComputing (id) {
  progress.value[id].loading = true
  progress.value[id].percentage = 0

  intervals[id] = setInterval(() => {
    progress.value[id].percentage += Math.floor(Math.random() * 8 + 10)
    if (progress.value[id].percentage >= 100) {
      clearInterval(intervals[id])
      progress.value[id].loading = false
    }
  }, 700)
}

onBeforeUnmount(() => {
  intervals.forEach(val => {
    clearInterval(val)
  })
})

// const onSubmit = async () => {
//   // 如果驗證失敗
//   if (!valid.value) return
//   loading.value = true
//   try {
//     // await api.post('/users', form)
//     await Swal.fire({
//       icon: 'success',
//       title: '成功',
//       text: '註冊成功'
//     })
//     router.push('/')
//   } catch (error) {
//     Swal.fire({
//       icon: 'error',
//       title: '失敗',
//       text: error?.response?.data?.message || '發生錯誤'
//     })
//   }
//   loading.value = false
// }
</script>

<style>
.bg {
  backdrop-filter: blur(10px);
}

.q-header .q-layout__shadow:after {
  bottom: 0;
}
</style>
