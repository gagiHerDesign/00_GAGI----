<template>
  <q-page class="bg">
    <div class="container">
      <h6 style="font-weight: 600;">商品管理</h6>

      <q-btn label="新增商品" color="primary" @click="openMenu(-1)" size="15px" class="q-px-xl q-py-xs"
        />
      <q-dialog v-model="form.dialog" persistent>

        <div id="q-app" style="min-height: 50vh; max-width: 500px;background: #FFFEF2; margin: auto;font-weight: 100;">
          <q-toolbar>
            <q-toolbar-title>
            </q-toolbar-title>
            <q-btn icon="close" flat round dense v-close-popup />
          </q-toolbar>
          <div class="q-mx-auto q-py-md q-px-xl" style="min-width: 400px;">
            <p style="font-weight: 600;font-size: calc(15px + 1vw);">{{ form._id.length > 0 ? '編輯商品' : '新增商品' }}</p>
            <q-form @submit="submit" class="q-gutter-md">
              <!-- 新增圖片 -->
              <div>
                <v-image-input v-model="form.image" style="margin: 2rem;" />
                <q-img v-if="form.image" :src="form.image" style="width: 80%" />
                <q-tooltip anchor="center right" self="center left" :offset="[-200, 10]">
                  <strong>點擊新增圖片 : </strong>
                  <li>大小限制2mb</li>
                  <li>僅限上傳一張圖片</li>
                </q-tooltip>
              </div>

              <!-- 商品名稱 -->
              <q-input class="wid" filled v-model="form.name" label="商品名稱" :rules="[rules.required]" />
              <!-- 商品價格 -->
              <q-input class="wid" filled v-model="form.price" label="商品價格" :rules="[rules.required, rules.price]" />
              <!-- 商品說明 -->
              <q-input class="wid" filled v-model="form.description" label="商品說明" clearable type="textarea"
                color="red-12" @keydown="processTextareaFill" @focus="processTextareaFill" :rules="[rules.required]" />
              <!-- 商品容量 -->
              <q-input class="wid" filled v-model="form.volume" label="商品容量" :rules="[rules.required]" />
              <!-- 商品分類 -->
              <q-select class="wid" filled v-model="form.category" :options="categories" label="商品分類"
                :rules="[rules.required]" />
              <!-- 上架 -->
              <q-checkbox v-model="form.sell" label="上架商品" />
              <div class="text-center" style="margin-top: 3rem;">
                <!-- 送出 -->
                <q-btn label="送出" type="submit" :loading="loading" color="secondary"
                  style="width: 100%; padding: 1rem; font-weight: 300;" />
              </div>
            </q-form>

          </div>
        </div>
      </q-dialog>
      <!-- list -->
      <div style="max-width: 100%">
        <div class="q-pa-md q-gutter-md">
          <q-item clickable v-ripple class="text-center">
            <q-item-section>商品名稱</q-item-section>
            <q-item-section>商品價格</q-item-section>
            <q-item-section>商品名稱</q-item-section>
            <q-item-section>上架狀態</q-item-section>
            <q-item-section>商品分類</q-item-section>
            <q-item-section>管理/編輯</q-item-section>
          </q-item>
          <q-separator />
          <!-- 下面的商品們 -->
          <q-item clickable v-ripple class="text-center" style="background: #fff;" v-for="(product, idx) in products"
            :key="product._id">
            <q-item-section>
              <img :src="product.image" :aspect-ratio="1" :width="150" :height="150"
                style="object-fit: cover; margin: auto;">
            </q-item-section>
            <q-item-section>{{ product.name }}</q-item-section>
            <q-item-section>{{ product.price }} 元</q-item-section>
            <q-item-section>
              <q-toggle :label="` ${product.sell ? '有' : '未'} 上架`" v-model="product.sell" checked-icon="check"
                color="green" unchecked-icon="clear" style="position: absolute;
          left: 54%;" />
            </q-item-section>
            <q-item-section>{{ product.category }}</q-item-section>
            <q-item-section>
              <div>
                <q-btn round color="secondary" size="20px" icon="save_as" @click="openMenu(idx)" />
              </div>
            </q-item-section>
          </q-item>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { apiAuth } from '../../boot/axios.js'
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'

const loading = ref(false)
const categories = ['淨膚保養', '沐浴清潔', '空間香氛']
const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  price (value) {
    return value >= 0 || '價格錯誤'
  }
}

const products = reactive([])
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: undefined,
  sell: false,
  category: '',
  volume: '',
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
    form.category = ''
    form.volume = ''
    form.loading = false
    form.idx = -1
  } else {
    form._id = products[idx]._id
    form.name = products[idx].name
    form.price = products[idx].price
    form.description = products[idx].description
    form.image = products[idx].image
    form.sell = products[idx].sell
    form.category = products[idx].category
    form.volume = products[idx].volume
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
  fd.append('category', form.category)
  fd.append('volume', form.volume)

  try {
    // 要新增
    if (form._id.length === 0) {
      // 回傳一個JSON格式
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      products[form.idx] = data.result
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
(async () => {
  try {
    const { data } = await apiAuth.get('/products/all')
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
  border: 1px solid rgba(255, 255, 255, 0);
}

.container {
  width: 80%;
  margin: auto;
}

.cancel {
  position: absolute;
  top: 8%;
  left: 66%;
  transform: translate(-50%, -50%);
  z-index: 9000;
}

.wid {
  width: 85%;
  margin: auto;
}
</style>
