<template lang="pug">
// https://codepen.io/andreich1980/pen/OmobJQ
aside.menu
  p.menu-label
    fa-icon(:icon="['fas', 'home']")
    | &nbsp; {{ $t('sidebar.home') }}
  ul.menu-list
    li
      nuxt-link(:to="localePath('index')")
        fa-icon(:icon="['fas', 'home']")
        | &nbsp; {{ $t('sidebar.home') }}
  p.menu-label
    fa-icon(:icon="['fas', 'robot']")
    | &nbsp; {{ $t('sidebar.introduce') }}
  ul.menu-list
    li
      nuxt-link(:to="localePath('introduce')")
        fa-icon(:icon="['fas', 'robot']")
        | &nbsp; {{ $t('sidebar.bot') }}
  p.menu-label
    fa-icon(:icon="['fas', 'wrench']")
    | &nbsp; {{ $t('sidebar.functions') }}
  ul.menu-list
    li
      nuxt-link(:to="localePath('functions-commands')")
        fa-icon(:icon="['fas', 'terminal']")
        | &nbsp; {{ $t('sidebar.command') }}
    li
      nuxt-link(:to="localePath('functions-chatcommands')")
        fa-icon(:icon="['fas', 'comment']")
        | &nbsp; {{ $t('sidebar.chatCommand') }}
    li
      nuxt-link(:to="localePath('functions-admins')")
        fa-icon(:icon="['fas', 'unlock-alt']")
        | &nbsp; {{ $t('sidebar.admin') }}
    li
      nuxt-link(:to="localePath('functions-inline')")
        fa-icon(:icon="['fas', 'signal']")
        | &nbsp; {{ $t('sidebar.inline') }}
  p.menu-label
    fa-icon(:icon="['fas', 'server']")
    | &nbsp; {{ $t('sidebar.env') }}
  ul.menu-list
    li
      nuxt-link(:to="localePath('running')")
        fa-icon(:icon="['fas', 'server']")
        | &nbsp; {{ $t('sidebar.server') }}
  p.menu-label
    fa-icon(:icon="['fab', 'discord']")
    | &nbsp; {{ $t('sidebar.discord') }}
  ul.menu-list
    li
      nuxt-link(:to="localePath('kaorukobot')")
        fa-icon(:icon="['fab', 'discord']")
        | &nbsp; {{ $t('sidebar.kaorukoBot') }}
</template>
