
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用 mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// 使用 mint-ui
Vue.use(Mint)
Vue.config.productionTip = false


//使用zepto
import Zepto from "zepto"


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
