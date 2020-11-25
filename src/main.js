import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 共同初始化包
import './assets/CSS/Common.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
