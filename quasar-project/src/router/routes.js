const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: '',
        component: () => import('src/pages/front/IndexPage.vue'),
        meta: {
          title: '購物網',
          login: false,
          admin: false
        }
      },
      {
        path: '/story',
        name: 'story',
        component: () => import('src/pages/front/StoryPage.vue'),
        meta: {
          title: '購物網 | 品牌理念',
          login: false,
          admin: false
        }
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('src/pages/front/ProductPage.vue'),
        meta: {
          title: '購物網 | 商品總覽',
          login: false,
          admin: false
        }
      },
      {
        path: '/contents/:id',
        name: 'contents',
        component: () => import('src/pages/front/ContentPage.vue'),
        meta: {
          title: '購物網 | 商品介紹',
          login: false,
          admin: false
        }
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('src/pages/front/CartPage.vue'),
        meta: {
          title: '購物網 | 購物車',
          login: true,
          admin: false
        }
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('src/pages/front/TestPage.vue'),
        meta: {
          title: '購物網 | test',
          login: false,
          admin: false
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
        name: '',
        component: () => import('src/pages/admin/AdminHome.vue'),
        meta: {
          title: '管理中心 | 首頁',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin/member',
        name: '/admin/member',
        component: () => import('src/pages/admin/AdminMember.vue'),
        meta: {
          title: '管理中心 | 會員管理',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin/order',
        name: '/admin/order',
        component: () => import('src/pages/admin/AdminOrder.vue'),
        meta: {
          title: '管理中心 | 訂單管理',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin/plant',
        name: '/admin/plant',
        component: () => import('src/pages/admin/AdminPlant.vue'),
        meta: {
          title: '管理中心 | 茶樹狀態',
          login: true,
          admin: true
        }
      },
      {
        path: '/admin/product',
        name: '/admin/products',
        component: () => import('src/pages/admin/AdminProduct.vue'),
        meta: {
          title: '管理中心 | 商品管理',
          login: true,
          admin: true
        }
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
        component: () => import('src/pages/vip/VipHome.vue'),
        meta: {
          title: '會員中心 | 首頁',
          login: true,
          admin: false
        }
      },
      {
        path: '/vip/member',
        name: 'member',
        component: () => import('src/pages/vip/VipMember.vue'),
        meta: {
          title: '會員中心 | 會員資料',
          login: true,
          admin: false
        }
      },
      {
        path: '/vip/order',
        name: 'order',
        component: () => import('src/pages/vip/VipOrder.vue'),
        meta: {
          title: '會員中心 | 訂單紀錄',
          login: true,
          admin: false
        }
      },
      {
        path: '/vip/plant',
        name: 'plant',
        component: () => import('src/pages/vip/VipPlant.vue'),
        meta: {
          title: '會員中心 | 茶樹狀態',
          login: true,
          admin: false
        }
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
