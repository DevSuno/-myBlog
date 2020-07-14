// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import index from'./pages/Index/template.vue'
import my from'./pages/My/template.vue'


Vue.config.productionTip = false


new Vue({
  router,
  components: {App},
  template: '<App/>'

}).$mount('#app')

