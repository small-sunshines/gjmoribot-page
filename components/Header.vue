<template lang="pug">
header
  nav.navbar.is-info(role="navigation", aria-label="main navigation")
    .navbar-brand
      nuxt-link.navbar-item(:to="$i18n.path('')")
        img(src="~/static/icon.png")
        p(style="margin-left: 0.5em;") MoriBot
      a.navbar-burger(role="button" aria-label="menu" aria-expanded="false"
        @click="showNav = !showNav" :class="{ 'is-active': showNav }")
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")
    .navbar-menu(:class="{ 'is-active': showNav }")
      .navbar-start
        nuxt-link.navbar-item(:to="$i18n.path('')") 
          fa-icon(pack="fas" name="home")
          | &nbsp; {{ $t('header.home') }}
        nuxt-link.navbar-item(:to="$i18n.path('introduce')")
          fa-icon(pack="fas" name="robot")
          | &nbsp; {{ $t('header.moribot') }}
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link
            fa-icon(pack="fas" name="wrench")
            | &nbsp; {{ $t('header.functions') }}
          .navbar-dropdown
            nuxt-link.navbar-item(:to="$i18n.path('functions/commands')") 
              fa-icon(pack="fas" name="terminal")
              | &nbsp; {{ $t('header.commands') }}
            nuxt-link.navbar-item(:to="$i18n.path('functions/chat_commands')")
              fa-icon(pack="fas" name="comment")
              | &nbsp; {{ $t('header.chatcommands') }}
            nuxt-link.navbar-item(:to="$i18n.path('functions/admins')") 
              fa-icon(pack="fas" name="unlock-alt")
              | &nbsp; {{ $t('header.admins') }}
            nuxt-link.navbar-item(:to="$i18n.path('functions/inline')")
              fa-icon(pack="fas" name="signal")
              | &nbsp; {{ $t('header.inlinequery') }}
        nuxt-link.navbar-item(:to="$i18n.path('running')")
          fa-icon(pack="fas" name="server")
          | &nbsp; {{ $t('header.server') }}
        nuxt-link.navbar-item(:to="$i18n.path('kaorukobot')")
          fa-icon(pack="fab" name="discord")
          | &nbsp; {{ $t('header.kaorukobot') }}
      .navbar-end
        .navbar-item.has-dropdown.is-hoverable.is-right
          a.navbar-link
            fa-icon(pack="fas", name="language")
            | &nbsp; {{ $t('header.changelang') }}
          .navbar-dropdown
            div(v-if="$i18n.locale !== 'ko'")
              nuxt-link.navbar-item(:to="$route.fullPath.replace(/\^\\/[\^\\/]+/, '')") 🇰🇷 한국어
            div(v-if="$i18n.locale !== 'en'")
              nuxt-link.navbar-item(:to="`/en` + $route.fullPath") 🇺🇸 English
            // div(v-if="$i18n.locale !== 'jp'")
              nuxt-link.navbar-item(:to="`/jp` + $route.fullPath") 🇯🇵 日本語
            // div(v-if="$i18n.locale !== 'cn'")
              nuxt-link.navbar-item(:to="`/cn` + $route.fullPath") 🇨🇳 中国
            // div(v-if="$i18n.locale !== 'ru'")
              nuxt-link.navbar-item(:to="`/ru` + $route.fullPath") 🇷🇺 русский
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

