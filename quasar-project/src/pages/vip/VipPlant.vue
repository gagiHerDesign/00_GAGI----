<template>
  <q-page id="vipPlant" class="bg" style="padding-bottom: 30vh;">
    <div class="container">
<div class="row q-gutter-md" style="width: 100%;margin-bottom: 5vh;">
  <div class="col-7">
    <h6 style="font-weight: 600;">園區位址</h6>
    <q-img src="../../assets/img/admin/treeProduct.png"/>
  </div>
  <div class="col-4">
    <h6 style="font-weight: 600;">現場直播畫面</h6>
    <iframe width="400" height="200" src="https://www.youtube.com/embed/gWi2Bvdy6L4" title="綠茵子推薦-實踐綠生活-26【農場篇】綠善生活農場介紹。麥可" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>
<h6 style="font-weight: 600;">認養茶樹詳情</h6>
  <div class="row q-gutter-xl"
  style="background: #fff;margin: auto; width:100%;"
  v-for="myplant in myplants" :key="myplant._id">
  <div class="col-10">
                <div class="flex q-my-lg">
                <q-img :ratio="1"
                style="width: 20%;"
                  src="../../assets/img/admin/tree-green.gif"/>
                  <div>
                    <p v-for="tree in myplant.trees" :key="tree._id" class="treeTitle text-orange">{{ tree.t_id.area }}</p>
                <p v-for="tree in myplant.trees" :key="tree._id" class="title treeTitle" style="font-size: 20px;">
                  {{ tree.t_id.name }}</p>
                  </div>
                </div>
                <q-separator/>
              </div>
                <div class="col-6">
                <p style="margin-top: 2rem;">領養開始日-----------------------------------------------------------------------------
                   {{ new Date(myplant.date).toLocaleDateString() }}</p>
                <p>領養結束日----------------------------------------------------------------------------- {{ new Date(myplant.end).toLocaleDateString() }}</p>
                <p>贈品出貨日----------------------------------------------------------------------------- {{ new Date(myplant.end).toLocaleDateString() }}</p>
                <h6 class="title">樹木現況<br></h6>
                <p v-for="tree in myplant.trees" :key="tree._id">
                  <q-avatar text-color="white" color="secondary" icon="nature" size="40px"></q-avatar> 樹苗狀態 -----------------------------------------------------------------------------
                  {{ tree.t_id.kid ? '小樹苗狀態' : '5年樹木' }}
                </p>
                <p v-for="tree in myplant.trees" :key="tree._id">
                  <q-avatar text-color="white" color="negative" icon="filter_vintage" size="40px"></q-avatar> 開花狀態 -----------------------------------------------------------------------------
                  {{ tree.t_id.flower ? '正在' : '沒有' }}開花
                </p>
                <p v-for="tree in myplant.trees" :key="tree._id">
                  <q-avatar text-color="white" color="primary" icon="done" size="40px"></q-avatar> 收成狀態 -----------------------------------------------------------------------------
                  {{ tree.t_id.harvest ? '已' : '尚未' }}收成
                </p>
                <h6 class="title">樹木年輪<br></h6>
                <p v-for="tree in myplant.trees" :key="tree._id">
                  {{ tree.t_id.description }}
                </p>
</div>

  <div class="col-3">
   <p class="title">贈品品項</p>
   <div class="flex">
   <p>洗碗精兩瓶</p>
   <q-img style="width: 50%; margin-left: 2rem;" src="../../assets/img/product/洗手瓶1(300).png"></q-img>
  </div>
   <p class="title">樹木年歲</p>
   <p>5歲</p>
   <q-img src="../../assets/img/admin/year.jpeg"></q-img>
  </div>

  </div>

        </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '../../boot/axios.js'
import Swal from 'sweetalert2'

const myplants = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/myplants')
    myplants.push(...data.result.map(order => {
      order.totalPrice = order.trees.reduce((total, current) => total + current.t_id.price * current.quantity, 0)
      return order
    }))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得訂單失敗'
    })
  }
})()
</script>
<style lang="scss">
#vipPlant{
.container{
  width: 80%;
  margin: auto;
}
.title{
  font-size: calc(12px + 0.5vw);
  font-weight: 700;
}
.treeTitle{
  margin: 2rem;
}
}

</style>
