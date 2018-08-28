<template lang="pug">
#__main
  Header
  .container
    .columns
      // https://codepen.io/andreich1980/pen/OmobJQ
      aside.column.is-hidden-mobile.is-3.section
        p.menu-label Menu
        hr
        aside.menu
          p.menu-label Home
          ul.menu-list
            li
              nuxt-link(to="/") Home
          p.menu-label Introduce
          ul.menu-list
            li
              nuxt-link(to="/introduce") MoriBot
          p.menu-label Functions
          ul.menu-list
            li
              nuxt-link(to="/functions/commands") 명령어
            li
              nuxt-link(to="/functions/chat_commands") Chat Command
            li
              nuxt-link(to="/functions/admins") 어드민 기능
            li
              nuxt-link(to="/functions/inline") Inline Query
          p.menu-label Environment
          ul.menu-list
            li
              nuxt-link(to="/running") 구동 환경
          p.menu-label Discord
          ul.menu-list
            li
              nuxt-link(to="/kaorukobot") KaorukoBot
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
