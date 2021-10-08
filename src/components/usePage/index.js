import { reactive, watch, watchEffect, getCurrentInstance } from '@vue/composition-api'

export default () => {
  // vue 实例
  const vm = getCurrentInstance()
  console.log(vm)
  const state = reactive({
    title: 'Hello Composition Api',
    num1: 0,
    num2: 0,
    total1: 0,
    total2: 0
  })
  const inputValue = (val) => {
    console.log(val)
    state.title = val
  }
  // 多监听
  const stop = watch([() => state.num1, () => state.num2], ([num1, num2], [prevNum1, prevNum2]) => {
    console.log('watch: ', prevNum1, prevNum2)
    state.num1 = Number(num1)
    state.num2 = Number(num2)
    state.total1 = Number(num1) + Number(num2)
  })
  // 单监听
  watch(() => state.total1, (oldVal, newValue) => {
    console.log('watch total1', oldVal, newValue)
  })
  // 副作用监听
  const stop2 = watchEffect(() => {
    state.total2 = state.total1 + Math.PI
  })
  return {
    stop,
    stop2,
    state,
    inputValue,
  }
}