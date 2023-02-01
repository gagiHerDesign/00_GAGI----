
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('src/pages/front/IndexPage.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('src/pages/front/LoginPage.vue'),
        meta: {
          title: '購物網 | 登入'
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('src/pages/front/RegisterPage.vue'),
        meta: {
          title: '購物網 | 註冊'
        }
      },
      {
        path: 'story',
        name: 'story',
        component: () => import('src/pages/front/StoryPage.vue'),
        meta: {
          title: '購物網 | 品牌理念'
        }
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('src/pages/front/ProductPage.vue'),
        meta: {
          title: '購物網 | 商品總覽'
        }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('src/pages/front/CartPage.vue'),
        meta: {
          title: '購物網 | 購物車'
        }
      }

    ]
  },
  {
    path: '/admin',
    component: () => import('src/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('src/pages/admin/AdminHome.vue')
      },
      {
        path: 'member',
        name: 'member',
        component: () => import('src/pages/admin/AdminMember.vue')
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('src/pages/admin/AdminOrder.vue')
      },
      {
        path: 'plant',
        name: 'plant',
        component: () => import('src/pages/admin/AdminPlant.vue')
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('src/pages/admin/AdminProduct.vue')
      }
    ]

  },
  {
    path: '/vip',
    component: () => import('src/layouts/VipLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('src/pages/vip/VipHome.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('src/pages/vip/VipCart.vue')
      },
      {
        path: 'member',
        name: 'member',
        component: () => import('src/pages/vip/VipMember.vue')
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('src/pages/vip/VipOrder.vue')
      },
      {
        path: 'plant',
        name: 'plant',
        component: () => import('src/pages/vip/VipPlant.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
