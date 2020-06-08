import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 访问路径‘/’重定向到路径‘/login’
    redirect: '/login'
  },
  {
    path: '/login',
    // 使用懒加载
    component: () => import('../components/login.vue')
  },
  {
    path: '/home',
    component: () => import('../components/home')
  }
  /* {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  } */
]

const router = new VueRouter({
  routes
})
/*
有些页面需要登陆才能访问，未登录就跳转到登录页面
通过全局路由导航守卫来控制页面访问权限
*/
router.beforeEach((to, from, next) => {
  console.log(to)
  if (['/', '/login'].includes(to.path)) return next()
  let tokenValue = window.sessionStorage.getItem('token')
  if (!tokenValue) {
    return next('/login')
  }
  next()
})
export default router
