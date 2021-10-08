import Vue from 'vue'
import App from './App.vue'
import compositionApi from '@vue/composition-api'

Vue.config.productionTip = false
Vue.use(compositionApi)

new Vue({
  render: h => h(App),
}).$mount('#app')
