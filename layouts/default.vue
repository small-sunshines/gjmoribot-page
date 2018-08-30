<template lang="pug">
#__main
  Header
  .container
    .columns
      aside.column.is-hidden-mobile.is-3.section
        p.menu-label Menu
        hr
        Sidebar
      .column.is-9.section
        nuxt
  Footer
</template>

<style>
/* https://github.com/jgthms/bulma/issues/449#issuecomment-406454327 */
@media screen and (max-width: 1024px) {
  .columns {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: {
    Header,
    Footer,
    Sidebar
  },
  mounted () {
    document.getElementById("loader-wrapper").style.display = 'none'
  }
}
</script>
