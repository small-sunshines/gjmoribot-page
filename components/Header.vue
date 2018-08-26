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
        nuxt-link.navbar-item(to="/") Home
        nuxt-link.navbar-item(to="/introduce") MoriBot
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link 기능들
          .navbar-dropdown
            nuxt-link.navbar-item(to="/functions/commands") 명령어
            nuxt-link.navbar-item(to="/functions/chat_commands") Chat Command
            nuxt-link.navbar-item(to="/functions/admins") 어드민 기능
            nuxt-link.navbar-item(to="/functions/inline") Inline Query
        nuxt-link.navbar-item(to="/running") 구동 환경
        nuxt-link.navbar-item(to="/kaorukobot") KaorukoBot
      .navbar-end
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

