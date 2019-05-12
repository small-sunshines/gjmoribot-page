<template lang="pug">
header
  nav.navbar.is-info(role="navigation", aria-label="main navigation")
    .navbar-brand
      nuxt-link.navbar-item(:to="localePath('index')")
        img(src="~/static/icon.png")
        p(style="margin-left: 0.5em;") {{ $t('header.brands') }}
      a.navbar-burger(
        role="button"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
        @click="display = !display"
        :class="{ 'is-active': display }"
      )
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")
    .navbar-menu(
      :class="{ 'is-active': display }"
    )
      .navbar-start
        nuxt-link.navbar-item(:to="localePath('index')") 
          fa(:icon="['fas', 'home']")
          | &nbsp; {{ $t('header.home') }}
        nuxt-link.navbar-item(:to="localePath('introduce')")
          fa(:icon="['fas', 'robot']")
          | &nbsp; {{ $t('header.kuriyamabot') }}
        b-dropdown(position="is-bottom-left" aria-role="menu" :mobile-modal="true")
          a.navbar-item.is-info(slot="trigger" role="button")
            fa(:icon="['fas', 'wrench']")
            span &nbsp; {{ $t('header.functions') }}
            b-icon(icon="menu-down")
          b-dropdown-item(aria-role="menu-item" custom paddingless)
            nuxt-link.navbar-item(:to="localePath('functions-commands')") 
              fa(:icon="['fas', 'terminal']")
              span &nbsp; {{ $t('header.commands') }}
          b-dropdown-item(aria-role="menu-item" custom paddingless)
            nuxt-link.navbar-item(:to="localePath('functions-chatcommands')")
              fa(:icon="['fas', 'comment']")
              span &nbsp; {{ $t('header.chatcommands') }}
          b-dropdown-item(aria-role="menu-item" custom paddingless)
            nuxt-link.navbar-item(:to="localePath('functions-admins')") 
              fa(:icon="['fas', 'unlock-alt']")
              span &nbsp; {{ $t('header.admins') }}
          b-dropdown-item(aria-role="menu-item" custom paddingless)
            nuxt-link.navbar-item(:to="localePath('functions-inline')")
              fa(:icon="['fas', 'signal']")
              span &nbsp; {{ $t('header.inlinequery') }}
        nuxt-link.navbar-item(:to="localePath('running')")
          fa(:icon="['fas', 'server']")
          | &nbsp; {{ $t('header.server') }}
        nuxt-link.navbar-item(:to="localePath('kaorukobot')")
          fa(:icon="['fab', 'discord']")
          | &nbsp; {{ $t('header.kaorukobot') }}
      .navbar-end
        b-dropdown(position="is-bottom-left" aria-role="menu" :mobile-modal="true")
          a.navbar-item.is-info(slot="trigger" role="button")
            fa(:icon="['fas', 'language']")
            span &nbsp; {{ $t('header.changelang') }}
            b-icon(icon="menu-down")
          b-dropdown-item(
            aria-role="menu-item"
            custom
            paddingless
            v-for="locale in availableLocales"
            :key="locale.code"
          )
            nuxt-link.navbar-item(
              :to="switchLocalePath(locale.code)"
            ) {{ locale.name }}
            // nuxt-link.navbar-item(:to="switchLocalePath('jp')") 🇯🇵 日本語
            // nuxt-link.navbar-item(:to="switchLocalePath('cn')") 🇨🇳 中国
            // nuxt-link.navbar-item(:to="switchLocalePath('ru')") 🇷🇺 русский
</template> 

<style scoped lang='scss'>
  $telegram: #37AEE2;

  .navbar.is-info {
    background-color: $telegram;
  }
  .navbar-item img {
    border-radius: 5px;
  }

  @media screen and (min-width: 1088px) {
    .navbar-item.is-info {
      background-color: $telegram;
      color: #fff;
    }
    .navbar-end {
      margin-right: 0.4em;
    }
  }
</style>

<script>
// https://jsfiddle.net/tbonz/80jkq0Ls/

export default {
  data() {
    return {
      display: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

