import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Login = () => import('@/components/Login.vue')
// const NotFound = () => import('./views/404.vue')
let routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    // {
    //     path: '/404',
    //     component: NotFound
    // },
    //{ path: '/main', component: Main },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '首页',
    //     iconCls: 'el-icon-message',//图标样式class
    //     children: [
    //         // { path: '/main', component: Main, name: '主页', hidden: true },
    //         // { path: '/table', component: Table, name: 'Table' },
    //     ]
    // },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '导航二',
    //     iconCls: 'fa fa-id-card-o',
    //     children: [
    //         // { path: '/page4', component: Page4, name: '页面4' },
    //         // { path: '/page5', component: Page5, name: '页面5' }
    //     ]
    // },
    // {
    //     path: '*',
    //     hidden: true,
    //     redirect: { path: '/404' }
    // }
];

const router = new VueRouter({
    routes
  })
  
  router.beforeEach((to, from, next) => {
    let token = sessionStorage.getItem('token') || ''
    if (to.meta.requiresAuth) {
      if (token) {
        next()
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
    } else {
      next()
    }
  })

export default router;