<template>
  <div id="app">
    <Header />
    <TestPage />
    <index />
    <Footer />
  </div>
</template>

<script setup>
import Index from './components/Index.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import TestPage from './components/TestPage.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    TestPage,
    Index,
    Footer
  }
}
</script>

<style lang="less" src="./styles/index.less"></style>
