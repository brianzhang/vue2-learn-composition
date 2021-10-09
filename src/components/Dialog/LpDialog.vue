<template>
  <div class="dialog-view" ref="confirmDialog">
    <h3>{{title}}</h3>
    <div>{{content}}</div>
    <div>
      <button @click="sureConfirmHandler">确定</button>
      <button @click="closeConfirmHandler">取消</button>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: [String],
    content: {
      type: String,
      default: '确定关闭吗？'
    }
  },
  setup() {
    const status = ref(-1)
    const confirmDialog = ref(null)
    const removeVmNodeElement = ()=> {
      confirmDialog.value.parentNode.removeChild(confirmDialog.value)
    }
    const closeConfirmHandler = ()=> {
      status.value = 0
      removeVmNodeElement()
    }
    const sureConfirmHandler = ()=> {
      status.value = 1
      removeVmNodeElement()
    }
    return {
      status,
      confirmDialog,
      sureConfirmHandler,
      closeConfirmHandler,
      removeVmNodeElement
    }
  },
})
</script>
