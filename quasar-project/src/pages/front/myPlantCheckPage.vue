<template>
  <q-page class="bg q-mx-auto" style="padding-top: 100px; padding-bottom: 25vh;width: 80%;">
    <div class="row">
<!-- 購物車列表 -->
      <div id="myPlantCart" class="col-12 col-md-8 q-py-xl">
        <!-- list -->
        <div style="max-width: 100%">
          <div class="q-pa-md q-gutter-md">
            <q-item clickable v-ripple class="text-center">
              <q-item-section class="fontW5">商品</q-item-section>
              <q-item-section class="fontW5">名稱</q-item-section>
              <q-item-section class="fontW5">單價</q-item-section>
              <q-item-section class="fontW5">數量</q-item-section>
              <q-item-section class="fontW5">小計</q-item-section>
              <q-item-section class="fontW5">編輯</q-item-section>
            </q-item>
            <q-separator />
            <!-- 購物車的商品們 -->
            <q-item clickable class="text-center q-my-xl" style="background: #fff;" v-for="(tree, idx) in cart" :key="tree._id">
              <q-item-section>
                <img :src="tree.t_id.image" :aspect-ratio="1" :width="150" :height="150"
                  style="object-fit: cover; margin: auto;">
              </q-item-section>
              <q-item-section>{{ tree.t_id.name }}</q-item-section>
              <q-item-section>{{ tree.t_id.price }} 元</q-item-section>
              <q-item-section>
                <div class="count">
                {{ tree.quantity }}
              </div>
              </q-item-section>
              <q-item-section>
                {{ tree.quantity * tree.t_id.price }}
              </q-item-section>
              <q-item-section>
                <q-btn label="取消" @click="updatePlantCart(idx, tree.quantity * -1)" icon="delete"></q-btn>
              </q-item-section>
              <q-item-section v-if="cart.length === 0">目前沒有商品</q-item-section>
            </q-item>

          </div>
        </div>
      </div>
<!-- 結帳區域 -->
      <div id="cartTotal" class="col-12 col-md-3">
        <h4 style="font-weight: 600;">結帳</h4>
        <q-separator />
        <br>
        <div>
          總金額
          <h3 style="font-weight:500; text-align: right;">
            {{ totalPrice }} 元
          </h3>
        </div>
        <br>
        <q-btn color="primary" label="結帳" @click="onCheckoutBtnClick" style="width: 100%;"/>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios.js'
import { useUserStore } from '../../stores/user.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = useUserStore()
const { editPlantCart, treecheckout } = user

const cart = reactive([])

const updatePlantCart = async (idx, quantity) => {
  await editPlantCart({ _id: cart[idx].t_id._id, quantity })
  cart[idx].quantity += quantity
  if (cart[idx].quantity <= 0) {
    cart.splice(idx, 1)
  }
}

const onCheckoutBtnClick = async () => {
  await treecheckout()
  router.push('/vip/plant')
}

const totalPrice = computed(() => {
  return cart.reduce((total, current) => {
    return total + (current.t_id.price * current.quantity)
  }, 0)
})

// const canCheckout = computed(() => {
//   return cart.length > 0 && !cart.some(product => {
//     return !product.p_id.sell
//   })
// });

;(async () => {
  try {
    const { data } = await apiAuth.get('/users/plantCart')
    cart.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得購物車失敗'
    })
  }
})()
</script>

<style lang="scss">
$breakpoint-sm: 540px;
$breakpoint-md: 750px;
$breakpoint-xl: 1024px;

@mixin sm {
  @media (max-width: $breakpoint-sm) {
    @content;
  }
}

@mixin md {
  @media (max-width: $breakpoint-md) {
    @content;
  }
}

@mixin xl {
  @media (max-width: $breakpoint-xl) {
    @content;
  }
}
#myPlantCart{
  padding-top: 5rem;
  .bg {
  background: #F6F1EB;
  padding-top: -10rem;
}
  .fontW5{
  font-weight: 1000;
}
.count{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  .remove{
  width: 5%;
  background: #6a6a6a;
  color: #fff;
  margin: 0;
  border: none;
}
.num{
  width: 20%;
  margin: 0 1vw;
  padding: 0;
}
.add{
  width: 5%;
  background: #6a6a6a;
  color: #fff;
  margin: 0;
  border: none;
}
}
}

#cartTotal{
  margin-left: 5vw;
  padding: 2rem 2rem;
}

</style>
