<template lang="pug">
header
  nav.navbar.is-info(role="navigation", aria-label="main navigation")
    .navbar-brand
      nuxt-link.navbar-item(:to="localePath('index')")
        img(src="~/static/icon.png")
        p(style="margin-left: 0.5em;") MoriBot
      a.navbar-burger(role="button" aria-label="menu" aria-expanded="false"
        @click="showNav = !showNav" :class="{ 'is-active': showNav }")
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")
    .navbar-menu(:class="{ 'is-active': showNav }" @click="toggleNav()")
      .navbar-start
        nuxt-link.navbar-item(:to="localePath('index')") 
          fa-icon(:icon="['fas', 'home']")
          | &nbsp; {{ $t('header.home') }}
        nuxt-link.navbar-item(:to="localePath('introduce')")
          fa-icon(:icon="['fas', 'robot']")
          | &nbsp; {{ $t('header.moribot') }}
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link
            fa-icon(:icon="['fas', 'wrench']")
            | &nbsp; {{ $t('header.functions') }}
          .navbar-dropdown
            nuxt-link.navbar-item(:to="localePath('functions-commands')") 
              fa-icon(:icon="['fas', 'terminal']")
              | &nbsp; {{ $t('header.commands') }}
            nuxt-link.navbar-item(:to="localePath('functions-chatcommands')")
              fa-icon(:icon="['fas', 'comment']")
              | &nbsp; {{ $t('header.chatcommands') }}
            nuxt-link.navbar-item(:to="localePath('functions-admins')") 
              fa-icon(:icon="['fas', 'unlock-alt']")
              | &nbsp; {{ $t('header.admins') }}
            nuxt-link.navbar-item(:to="localePath('functions-inline')")
              fa-icon(:icon="['fas', 'signal']")
              | &nbsp; {{ $t('header.inlinequery') }}
        nuxt-link.navbar-item(:to="localePath('running')")
          fa-icon(:icon="['fas', 'server']")
          | &nbsp; {{ $t('header.server') }}
        nuxt-link.navbar-item(:to="localePath('kaorukobot')")
          fa-icon(:icon="['fab', 'discord']")
          | &nbsp; {{ $t('header.kaorukobot') }}
      .navbar-end
        .navbar-item.has-dropdown.is-hoverable.is-right
          a.navbar-link
            fa-icon(:icon="['fas', 'language']")
            | &nbsp; {{ $t('header.changelang') }}
          .navbar-dropdown
            nuxt-link.navbar-item(:to="switchLocalePath('ko')") 🇰🇷 한국어
            nuxt-link.navbar-item(:to="switchLocalePath('en')") 🇺🇸 English
            // nuxt-link.navbar-item(:to="switchLocalePath('jp')") 🇯🇵 日本語
            // nuxt-link.navbar-item(:to="switchLocalePath('cn')") 🇨🇳 中国
            // nuxt-link.navbar-item(:to="switchLocalePath('ru')") 🇷🇺 русский
</template> 

<style scoped>
  .navbar-item img {
    border-radius: 5px;
  }
  .navbar-brand .navbar-burger span {
    color: #fff;
  }
</style>

<script>
// https://jsfiddle.net/tbonz/80jkq0Ls/

export default {
  data() {
    return {
      showNav: false
    }
  },
  methods: {
    toggleNav () {
      this.showNav = !this.showNav
    }
  }
}
</script>

