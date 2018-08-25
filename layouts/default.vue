<template lang="pug">
#__main  
  Header
  section.main-content.columns.is-fullheight
    // https://codepen.io/andreich1980/pen/OmobJQ
    aside.column.is-hidden-mobile.is-3.section
      p.menu-label.is-hidden-touch Menu
    .column.is-9.section
      nuxt
  Footer
</template>

<style>
html, body, #__nuxt {
  height: 100%;
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
  },
  mounted () {
    document.getElementById("loader-wrapper").style.display = 'none'
  }
}
</script>
