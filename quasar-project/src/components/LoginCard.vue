<template>
<div id="q-app" style="min-height: 50vh; background: #fff; margin: auto;">
          <div class="q-mx-auto q-py-lg" style="max-width: 500px">
            <div class="btn_submit" align="right">
              <q-btn flat round color="primary" icon="close" v-close-popup></q-btn>
            </div>
            <h2>Login</h2>
            <q-form @submit="onSubmit" class="q-gutter-md">
              <!-- 帳號 -->
              <q-input filled v-model="form.account" label="Your account *"
                :rules="[rules.required, rules.length]" counter maxlength="20"></q-input>
              <!-- 密碼 -->
              <q-input filled v-model="form.password" label="Your password *" :rules="[rules.required, rules.length]" counter maxlength="20"></q-input>
            <div>
                <!-- 註冊 -->
                <q-btn label="LOGIN" type="submit" :loading="loading" color="secondary" />
              </div>
            </q-form>

          </div>
        </div>
</template>

<script setup>
import validator from 'validator'
import { ref, reactive } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { api } from '../boot/axios'

// const $q = useQuasar()
const router = useRouter()
const loading = ref(false)

const form = reactive({
  account: '',
  password: ''
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

const onSubmit = async () => {
  // 如果驗證失敗
  loading.value = true
  try {
    console.log('成功')
    await api.post('/users', form)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/vip')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
  loading.value = false
}
</script>
<style >
.swal2-container{
  z-index: 8500
}
</style>
