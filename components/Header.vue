<template lang="pug">
header
  nav.navbar.is-info(role="navigation", aria-label="main navigation")
    .navbar-brand
      nuxt-link.navbar-item(to="/")
        img(src="~/static/icon.png")
        p(style="margin-left: 0.5em;") MoriBot
      a.navbar-burger(role="button" aria-label="menu" aria-expanded="false"
        @click="showNav = !showNav" :class="{ 'is-active': showNav }")
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")
    .navbar-menu(:class="{ 'is-active': showNav }")
      .navbar-start
        nuxt-link.navbar-item(to="/") 
          fa-icon(pack="fas" name="home")
          | &nbsp; Home
        nuxt-link.navbar-item(to="/introduce")
          fa-icon(pack="fas" name="robot")
          | &nbsp; MoriBot
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link
            fa-icon(pack="fas" name="wrench")
            | &nbsp; 기능들
          .navbar-dropdown
            nuxt-link.navbar-item(to="/functions/commands") 
              fa-icon(pack="fas" name="terminal")
              | &nbsp; 명령어
            nuxt-link.navbar-item(to="/functions/chat_commands")
              fa-icon(pack="fas" name="comment")
              | &nbsp; Chat Command
            nuxt-link.navbar-item(to="/functions/admins") 
              fa-icon(pack="fas" name="unlock-alt")
              | &nbsp; 어드민 기능
            nuxt-link.navbar-item(to="/functions/inline")
              fa-icon(pack="fas" name="signal")
              | &nbsp; Inline Query
        nuxt-link.navbar-item(to="/running")
          fa-icon(pack="fas" name="server")
          | &nbsp; 구동 환경
        nuxt-link.navbar-item(to="/kaorukobot")
          fa-icon(pack="fab" name="discord")
          | &nbsp; KaorukoBot
      .navbar-end
        .navbar-item.has-dropdown.is-hoverable.is-right
          a.navbar-link
            fa-icon(pack="fas", name="language")
            | &nbsp; 언어 변경
          .navbar-dropdown
            a.navbar-item 🇰🇷 한국어
            a.navbar-item 🇺🇸 English
            // a.navbar-item 🇯🇵 日本語
            // a.navbar-item 🇨🇳 中国
            // a.navbar-item 🇷🇺 русский
</template>

<style scoped>
  .navbar-item img {
    border-radius: 5px;
  }
</style>

<script>
// https://jsfiddle.net/tbonz/80jkq0Ls/

export default {
  data() {
    return {
      showNav: false
    }
  }
}
</script>

