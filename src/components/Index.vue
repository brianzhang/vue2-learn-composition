<template>
  <div class="container">
    <h1>Vue {{title}}</h1>
    <input v-model="title"/>
    <br />
    <br />
    <div>
      <input v-model="num1"/> + <input v-model="num2"/> = total1: {{total1}} | total2 * Math.PI: {{total2}}
    </div>
  </div>
</template>
<script>
import { defineComponent, toRefs } from '@vue/composition-api'
import useIndexPage from './usePage/index'

export default defineComponent({
  setup() {
    const { state, ...other } = useIndexPage()
    return {
      ...toRefs(state),
      ...other
    }
  },
})
</script>
