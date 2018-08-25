<template lang="pug">
div
  Header
  .main
    nuxt
  Footer
</template>

<style scoped>
.main {
  min-height: 30em;
  background-color: #0099FF;
}
</style>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
