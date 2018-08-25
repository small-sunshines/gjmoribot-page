<template lang="pug">
div
  Header
  .main
    nuxt
  Footer
</template>

<style>
html, body, #__nuxt {
  height: 100%;
}

#__nuxt {
  min-height: 100%;
}

.is-fullheight.columns {
    height: calc(100vh - ( 3.25rem - .75rem ) );
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
