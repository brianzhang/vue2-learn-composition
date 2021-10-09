import LpDialog from './LpDialog.vue';
import Vue from 'vue'
// import { toRef, watch } from '@vue/composition-api'

export default (options) => {
  Vue.component('lp-dialog', {
    render: (createVNode, hack) => {
      console.log(hack)
      return createVNode(LpDialog, options)
    }
  })
  // console.log(vNode)
}