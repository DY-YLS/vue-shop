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
axios.defaults.baseURL = 'http://47.115.124.102:8888/api/private/v1/';
Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
