import { reactive } from '@vue/composition-api'

export default () => {
  const state = reactive({
    title: 'Hello Composition Api',
    num1: 0,
    num2: 0
  })
  const inputValue = (val) => {
    console.log(val)
    state.title = val
  }
  const total = () => {
    return 0
   }
  return {
    state,
    total,
    inputValue,
  }
}