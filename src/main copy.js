import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import routes from './routes'
Vue.use(ElementUI)

new Vue({
  routes,
  render: h => h(App),
}).$mount('#app')
