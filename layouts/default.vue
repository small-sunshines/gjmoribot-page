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
          p.menu-label
            fa-icon(pack="fas" name="home")
            | &nbsp;Home
          ul.menu-list
            li
              nuxt-link(to="/")
                fa-icon(pack="fas" name="home")
                | &nbsp; Home
          p.menu-label
            fa-icon(pack="fas" name="robot")
            | &nbsp; Introduce
          ul.menu-list
            li
              nuxt-link(to="/introduce")
                fa-icon(pack="fas" name="robot")
                | &nbsp; MoriBot
          p.menu-label
            fa-icon(pack="fas" name="wrench")
            | &nbsp; Functions
          ul.menu-list
            li
              nuxt-link(to="/functions/commands")
                fa-icon(pack="fas" name="terminal")
                | &nbsp; 명령어
            li
              nuxt-link(to="/functions/chat_commands")
                fa-icon(pack="fas" name="comment")
                | &nbsp; Chat Command
            li
              nuxt-link(to="/functions/admins")
                fa-icon(pack="fas" name="unlock-alt")
                | &nbsp; 어드민 기능
            li
              nuxt-link(to="/functions/inline")
                fa-icon(pack="fas" name="signal")
                | &nbsp; Inline Query
          p.menu-label
            fa-icon(pack="fas" name="server")
            | &nbsp; Environment
          ul.menu-list
            li
              nuxt-link(to="/running")
                fa-icon(pack="fas" name="server")
                | &nbsp; 구동 환경
          p.menu-label
            fa-icon(pack="fab" name="discord")
            | &nbsp; Discord
          ul.menu-list
            li
              nuxt-link(to="/kaorukobot")
                fa-icon(pack="fab" name="discord")
                | &nbsp; KaorukoBot
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
