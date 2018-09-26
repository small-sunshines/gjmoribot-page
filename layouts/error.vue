<template lang="pug">
div
  p.menu-label 404 NOT FOUND
  hr
  .content
    h3 {{ $t('not_found.content') }}
    br
    br
    nuxt-link.button.is-large.is-info(:to="localePath('index')")
      | {{ $t('not_found.button') }}
</template>

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
