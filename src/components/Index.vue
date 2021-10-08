<template>
  <div>
    <h1>Vue {{title}}</h1>
    <input v-model="title"/>
    <div>
      <input v-model="num1"/> + <input v-model="num2"/> = {{num1 + num2}}
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
