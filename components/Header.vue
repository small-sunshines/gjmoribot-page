<template lang="pug">
header
  nav.navbar(role="navigation", aria-label="main navigation")
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
      .navbar-end
</template>

<style>
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

