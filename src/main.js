import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'
import './plugins/tinymce'
import store from './store'
// 共同初始化包
import './assets/CSS/Common.css'
import './assets/CSS/scrollbar.css'

// Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
// Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs
Vue.config.productionTip = false

new Vue({
  router,  //使用
  store,
  render: h => h(App)
}).$mount('#app')
