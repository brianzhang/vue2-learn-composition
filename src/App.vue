<template>
  <div id="app">
    <Header />
    <index />
  </div>
</template>

<script>
import Index from './components/Index.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    Index
  }
}
</script>

<style lang="less" src="./styles/index.less"></style>
