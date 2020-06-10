import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
/*导入全局样式表*/
import './assets/css/global.css'
/*导入初始化样式表*/
import './assets/css/reset.css'
/*全局导入字体图标*/
import './fonts/iconfont.css'
/*导入nprogress包对应的js和css*/
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
axios.defaults.baseURL = 'http://47.115.124.102:8888/api/private/v1/';
/*为每个请求添加一个拦截器，作用是在每个请求头中添加自定义变量为authorization的token信息*/
axios.interceptors.request.use(config=>{
  /*发送请求时，进度条开始*/
  NProgress.start()
  config.headers.authorization=window.sessionStorage.getItem('token')
  return config
})
axios.interceptors.response.use(config=>{
  /*请求完成后，进度条结束*/
  NProgress.done()
  return config
})
Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
