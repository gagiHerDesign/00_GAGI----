import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api, apiAuth } from '../boot/axios.js'
import Swal from 'sweetalert2'
import router from '../router/routes'

export const useUserStore = defineStore('user', () => {
  const _id = ref('')
  const token = ref('')
  const account = ref('')
  const phone = ref('')
  const address = ref('')
  const gender = ref(0)
  const birth = ref('')
  const email = ref('')
  const cart = ref(0)
  const plantCart = ref(0)
  const role = ref(0)

  const isLogin = computed(() => {
    return token.value.length > 0
  })
  const isAdmin = computed(() => {
    return role.value === 1
  })
  const avatars = computed(() => {
    return `https://source.boringavatars.com/beam/256/${account.value}?colors=BABA9D,303030,FFBEBE,FFFDB8,E1EEE4`
  })
  const login = async (form) => {
    try {
      const { data } = await api.post('/users/login', form)
      token.value = data.result.token
      account.value = data.result.account
      email.value = data.result.email
      cart.value = data.result.cart
      plantCart.value = data.result.plantCart
      role.value = data.result.role
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '登入成功'
      })
      router.push('/')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }
  const logout = async () => {
    try {
      await apiAuth.delete('/users/logout')
      token.value = ''
      account.value = ''
      role.value = 0
      cart.value = 0
      plantCart.value = 0
      router.push('/vip')
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '登出成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }
  const getUser = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/me')
      account.value = data.result.account
      email.value = data.result.email
      cart.value = data.result.cart
      plantCart.value = data.result.plantCart
      role.value = data.result.role
    } catch (error) {
      logout()
    }
  }
  async function getMyself () {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/myself')
      _id.value = data.result._id
      email.value = data.result.email
      phone.value = data.result.phone
      role.value = data.result.role
    } catch (error) {
      logout()
    }
  }
  // const getAllUsers = async () => {
  //   try {
  //     const { data } = await apiAuth.get('/users/allusers')
  //     account.splice(0, account.length, ...data.result)
  //   } catch (error) {
  //     Notify.create({
  //       message: '資料取得失敗',
  //       textColor: 'secondary',
  //       color: 'white',
  //       icon: 'mdi-emoticon-dead-outline',
  //       caption: error?.response?.data?.message || '發生錯誤'
  //     })
  //   }
  // }
  const editUser = async (form) => {
    try {
      await apiAuth.patch('/users/edituser', form)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  const editCart = async ({ _id, quantity }) => {
    // 表示還沒有登入
    if (token.value.length === 0) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: '請先登入'
      })
      router.push('/')
      return
    }
    try {
      const { data } = await apiAuth.post('/users/cart', { p_id: _id, quantity: parseInt(quantity) })
      cart.value = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '加入購物車成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }
  const editPlantCart = async ({ _id, quantity }) => {
    // 表示還沒有登入
    if (token.value.length === 0) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: '請先登入'
      })
      router.push('/')
      return
    }
    try {
      const { data } = await apiAuth.post('/users/plantCart', { t_id: _id, quantity: parseInt(quantity) })
      plantCart.value = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '加入茶樹願望清單成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }
  const checkout = async () => {
    try {
      await apiAuth.post('/orders')
      cart.value = 0
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '結帳成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }
  const treecheckout = async () => {
    try {
      await apiAuth.post('/myplants')
      plantCart.value = 0
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '結帳成功'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  return {
    _id, token, account, email, phone, address, gender, birth, cart, plantCart, role, login, isLogin, isAdmin, avatars, logout, getUser, getMyself, editUser, editCart, checkout, editPlantCart, treecheckout
  }
}, {
  persist: {
    key: '230203',
    paths: ['token']
  }
})
