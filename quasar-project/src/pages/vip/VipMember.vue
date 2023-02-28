<template>
  <q-page id="vipMember" class="bg">
    <div class="container">
    <h6 style="font-weight: 600;">會員中心</h6>
    <q-form @submit="onSubmit">
        <div class="row">
          <div class="col-6 flex flex-center">
            <q-avatar size="150px">
              <q-img :src="avatars" />
            </q-avatar>
            <p class="q-ma-xl" style="font-weight: 600;font-size: 25px;" >
           歡迎來到SUSI會員中心 !
         </p>
          </div>

        <div class="col-6">
          <!-- 信箱 -->
          <div class="input col-12">
            <q-input  bottom-slots :label="email">
              <template v-slot:prepend>
                <q-avatar icon="mail" />
              </template>
            </q-input>
          </div>
          <!-- 手機號碼 -->
          <div class="input col-12">
            <q-input
              bottom-slots
              v-model="userForm.phone"
              label="Phone"
              :rules="[rules.phone]"
            >
              <template v-slot:prepend>
                <q-avatar icon="call" />
              </template>
              <template v-slot:append v-if="userForm.phone">
                <q-icon
                  name="close"
                  @click="userForm.phone = ''"
                  class="cursor-pointer"
                />
              </template>
            </q-input>
          </div>
          <!-- 住址 -->
          <div class="input col-12">
            <q-input
              bottom-slots
              v-model="userForm.address"
              label="Address"
              :rules="[rules.text]"
            >
              <template v-slot:prepend>
                <q-avatar icon="home" />
              </template>
              <template v-slot:append v-if="userForm.address">
                <q-icon
                  name="close"
                  @click="userForm.address = ''"
                  class="cursor-pointer"
                />
              </template>
            </q-input>
          </div>
          <!-- 密碼 -->
          <div class="input col-12">
            <q-input
              bottom-slots
              v-model="userForm.password"
              label="Password"
              :rules="[rules.length]"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-lock-reset" />
              </template>
              <template v-slot:append>
                <q-icon
                  name="close"
                  @click="userForm.password = ''"
                  class="cursor-pointer"
                />
              </template>
            </q-input>
          </div>
          <div class="col-12 flex justify-center">
            <q-btn class="submit_btn q-px-xl q-py-md" color="primary" label="確認修改" type="submit" />
          </div>
        </div>
      </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import validator from 'validator'
import { useUserStore } from '../../stores/user.js'
import { apiAuth } from '../../boot/axios.js'
import Swal from 'sweetalert2'

const user = useUserStore()
const { avatars, email, phone, address, birth, gender } = storeToRefs(user)

const rules = {
  phone (phone) {
    return validator.isMobilePhone(phone, 'zh-TW') || '手機號碼格式錯誤'
  },
  length (value) {
    return (
      (value.length >= 4 && value.length <= 12) || '長度必須為 4 ~ 12 個字'
    )
  },
  text (value) {
    return (
      (value.length >= 1 && value.length <= 20) || '填寫內容後才能購物哦'
    )
  }
}
const userForm = reactive({
  phone: phone.value || '',
  address: address.value || '',
  birth: birth.value || '',
  gender: gender.value,
  password: '',
  image: undefined,
  loading: false
})
const onSubmit = async () => {
  userForm.loading = true
  try {
    const { data } = await apiAuth.patch('/users/editMyself', {
      phone: userForm.phone,
      address: userForm.address,
      birth: userForm.birth,
      gender: userForm.gender,
      password: userForm.password
    })
    userForm.phone = data.result.phone
    userForm.address = data.result.address
    userForm.birth = data.result.birth
    userForm.gender = data.result.gender
    userForm.password = data.result.password
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '修改成功'
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
  userForm.loading = false
}
</script>

<style lang="scss">
#vipMember{
  padding-bottom: 30vh;
  .bg {
    background: #F6F1EB;
    padding-top: -10rem;
    border: 1px solid rgba(255, 255, 255, 0);
  }
  .container{
    width: 80%;
    margin: auto;
  }
}
</style>
