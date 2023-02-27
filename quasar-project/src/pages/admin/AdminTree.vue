<template>
  <q-page id="adminTree" class="bg">
    <div class="container">
      <h6 style="font-weight: 600;">茶樹資料</h6>

      <q-btn class="q-px-xl q-py-xs q-my-lg" label="新增茶樹" color="primary" size="15px" @click="openMenu(-1)" /><q-separator />
      <q-dialog v-model="form.dialog" persistent>

        <div id="q-app" style="min-height: 50vh; max-width: 500px;background: #FFFEF2; margin: auto;font-weight: 100;">
          <q-toolbar>
            <q-toolbar-title>
            </q-toolbar-title>
            <q-btn icon="close" flat round dense v-close-popup />
          </q-toolbar>
          <div class="q-mx-auto q-py-md q-px-xl" style="min-width: 400px;">
            <h6 style="font-weight: 600;">{{ form._id.length > 0 ? '編輯茶樹資料' : '新增茶樹資料' }}</h6>
            <q-form @submit="submit" class="q-gutter-md">
              <!-- 新增圖片 -->
              <div>
                <v-image-input v-model="form.image" style="margin: 2rem;" />
                <q-tooltip anchor="center right" self="center left" :offset="[-200, 10]">
                  <strong>點擊新增圖片 : </strong>
                  <li>大小限制2mb</li>
                  <li>僅限上傳一張圖片</li>
                </q-tooltip>
              </div>

              <!-- 商品名稱 -->
              <q-input class="wid" filled v-model="form.name" label="茶樹名稱" :rules="[rules.required]" />
              <!-- 商品價格 -->
              <q-input class="wid" filled v-model="form.price" label="茶樹價格" :rules="[rules.required, rules.price]" />
              <!-- 商品說明 -->
              <q-input class="wid" filled v-model="form.description" label="茶樹說明" clearable type="textarea" color="red-12"
                @keydown="processTextareaFill" @focus="processTextareaFill" :rules="[rules.required]" />
              <!-- 茶樹分區 -->
              <q-select class="wid" filled v-model="form.area" :options="areas" label="茶樹園區"
                :rules="[rules.required]" />
              <!-- 有無認養者 -->
              <q-toggle
                v-model="form.adopt"
                checked-icon="check"
                color="green"
                label="有無認養者"
                unchecked-icon="clear"
              />
              <!-- 樹苗 -->
              <q-toggle
                v-model="form.kid"
                checked-icon="check"
                color="green"
                label="樹苗狀態"
                unchecked-icon="clear"
              />
              <!-- 開花 -->
              <q-toggle
                v-model="form.flower"
                checked-icon="check"
                color="green"
                label="開花狀態"
                unchecked-icon="clear"
              />
              <!-- 收成 -->
              <q-toggle
                v-model="form.harvest"
                checked-icon="check"
                color="green"
                label="收成狀態"
                unchecked-icon="clear"
              />
              <!-- 是否上架 -->
              <q-toggle
                v-model="form.sell"
                checked-icon="check"
                color="green"
                label="上架狀態"
                unchecked-icon="clear"
              />
              <div class="text-center" style="margin-top: 3rem;">
                <!-- 送出 -->
                <q-btn label="送出" type="submit" :loading="loading" color="secondary"
                  style="width: 100%; padding: 1rem; font-weight: 300;" />
              </div>
            </q-form>

          </div>
        </div>
      </q-dialog>

      <div class="row q-my-md q-mx-auto q-gutter-xl">
      <q-card class="col-3 my-card" flat
      v-for="(tree, idx) in trees"
            :key="tree._id">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          :src="tree.image"
        />
        <q-card-section>
          <p class="text-orange">編號</p>
          <p style="font-weight: 600;font-size: 30px;">{{ tree.name }}</p>
          <p>{{ tree.area }} | {{tree.adopt ? '已' : '未'}}認養</p>
          <q-card-actions>
          <q-btn color="secondary" @click="openMenu(idx)" label="MORE"/>
        </q-card-actions>
        </q-card-section>

      </q-card-section>
    </q-card>
  </div>
    </div>
  </q-page>
</template>
<script setup>
import { apiAuth } from '../../boot/axios.js'
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'

const loading = ref(false)
const areas = ['A園區', 'B園區', 'C園區']
const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  price (value) {
    return value >= 0 || '價格錯誤'
  }
}

const trees = reactive([])
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: undefined,
  sell: false,
  adopt: false,
  kid: true,
  flower: false,
  harvest: false,
  area: '',
  loading: false
})

const openMenu = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.price = 0
    form.description = ''
    form.image = undefined
    form.sell = false
    form.adopt = false
    form.kid = true
    form.flower = false
    form.harvest = false
    form.area = ''
    form.loading = false
    form.idx = -1
  } else {
    form._id = trees[idx]._id
    form.name = trees[idx].name
    form.price = trees[idx].price
    form.description = trees[idx].description
    form.image = trees[idx].image
    form.sell = trees[idx].sell
    form.adopt = trees[idx].adopt
    form.kid = trees[idx].kid
    form.flower = trees[idx].flower
    form.harvest = trees[idx].harvest
    form.area = trees[idx].area
    form.loading = false
    form.idx = idx
  }
  form.dialog = true
}

const submit = async () => {
  form.loading = true

  // FormData的好處是可以新增和修改
  // fd.append(key, value)
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('price', form.price)
  fd.append('description', form.description)
  fd.append('image', form.image)
  fd.append('sell', form.sell)
  fd.append('adopt', form.adopt)
  fd.append('kid', form.kid)
  fd.append('flower', form.flower)
  fd.append('harvest', form.harvest)
  fd.append('area', form.area)

  try {
    // 要新增
    if (form._id.length === 0) {
      // 回傳一個JSON格式
      const { data } = await apiAuth.post('/trees', fd)
      trees.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/trees/' + form._id, fd)
      trees[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }

  form.loading = false
}

  // 立即執行的function
  ; (async () => {
  try {
    const { data } = await apiAuth.get('/trees/all')
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
@import '../../css/adminTree.scss';
</style>
