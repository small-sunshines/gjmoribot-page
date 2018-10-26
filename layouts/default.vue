<template lang="pug">
#__main
  Header
  .ad
    <!-- moribot-header -->
    adsbygoogle(ad-slot="1034759899")
    p google AD
  .container
    .columns
      aside.column.is-hidden-mobile.is-3.section
        p.menu-label Menu
        hr
        Sidebar
      .column.is-9.section
        nuxt
  .ad
    <!-- moribot-footer -->
    adsbygoogle(ad-slot="7015620981")
    p google AD
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

div.ad {
    margin-top: 0.8em;
    margin-bottom: 0.8em;
    width: 100%;
    min-height: 60px;
    position: relative;
}
div.ad p {
    font-size: 0.8em;
    margin: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 4em;
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
    document.getElementsByClassName("loader-wrapper")[0].style.display = 'none'
  }
}
</script>
