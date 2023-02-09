<template>
  <q-page class="bg">
    <div class="container">
      <h6 style="font-weight: 600;">商品管理</h6>

      <q-btn label="新增商品" color="primary" @click="openMenu = true"
      size="15px"
      class="q-px-xl q-py-xs"
      style="position: absolute; top: 10%; left: 80%; transform: translate(-50%, -50%);"
      ></q-btn>
      <q-dialog v-model="openMenu">
        <div id="q-app" style="min-height: 50vh; background: #FFFEF2; margin: auto;font-weight: 100;">
          <div class="cancel">
            <img src="../../assets/img/logo/XX.svg" size="50px" v-close-popup>
          </div>
          <div class="q-mx-auto q-py-lg" style="max-width: 500px">
            <h6 style="font-weight: 600;">新增商品</h6>
            <q-form @submit="addProduct" class="q-gutter-md">
              <!-- 新增圖片 -->
              <div>
                <v-image-input v-model="form.image" style="margin: 2rem;">
                </v-image-input>
                <q-tooltip anchor="center right" self="center left" :offset="[-200, 10]">
                  <strong>點擊新增圖片 : </strong>
                  <li>大小限制2mb</li>
                  <li>僅限上傳一張圖片</li>
                </q-tooltip>
              </div>

              <!-- 商品名稱 -->
              <q-input filled v-model="form.name" label="商品名稱"/>
              <!-- 商品價格 -->
              <q-input filled v-model="form.price" label="商品價格" />
              <!-- 商品說明 -->
              <q-input filled v-model="form.description" label="商品說明" />
              <!-- 商品分類 -->
              <q-select filled v-model="form.category" :options="categories" label="商品分類" />
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
      <!-- 表格template -->
      <div class="q-pa-md">
        <q-table :rows="rows" :columns="columns" row-key="name" />
      </div>
      <!-- list -->
      <div class="q-pa-md" style="max-width: 100%">
    <div class="q-pa-md q-gutter-md">
      <q-item clickable v-ripple style="background: #fff;" v-for="(product, idx) in products" :key="product._id">
        <q-item-section><img :src="product.image" :aspect-ratio="1" :width="200"></q-item-section>
        <q-item-section>{{ product.name }}</q-item-section>
        <q-item-section>Single line item</q-item-section>
        <q-item-section>
          <q-btn color="primary" icon="mdi-pencil" variant="text" @click="openDialog(idx)"/>
        </q-item-section>
      </q-item>
    </div>
  </div>

    </div>
  </q-page>
</template>

<script setup>
// import { apiAuth } from '../../boot/axios.js'
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'

const openMenu = ref(false)

const categories = ['淨膚保養', '沐浴清潔', '空間香氛']

const products = reactive([])
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: undefined,
  sell: false,
  category: '',
  valid: false,
  loading: false
})

const openDialog = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.price = 0
    form.description = ''
    form.image = undefined
    form.sell = false
    form.category = ''
    form.valid = false
    form.loading = false
    form.idx = -1
  } else {
    form._id = products[idx]._id
    form.name = products[idx].name
    form.price = products[idx].price
    form.description = products[idx].description
    form.image = undefined
    form.sell = products[idx].sell
    form.category = products[idx].category
    form.valid = false
    form.loading = false
    form.idx = idx
  }
  form.dialog = true
}

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
]

const addProduct = async () => {
  try {
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '新增成功'
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
}

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
.cancel{
  position: absolute;
  top: 15%;
  left: 68%;
  transform: translate(-50%, -50%);
  z-index: 9000;
}
</style>
