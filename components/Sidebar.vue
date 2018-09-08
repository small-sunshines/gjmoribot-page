<template lang="pug">
// https://codepen.io/andreich1980/pen/OmobJQ
aside.menu
  p.menu-label
    fa-icon(pack="fas" name="home")
    | &nbsp; {{ $t('sidebar.home') }}
  ul.menu-list
    li
      nuxt-link(to="/")
        fa-icon(pack="fas" name="home")
        | &nbsp; {{ $t('sidebar.home') }}
  p.menu-label
    fa-icon(pack="fas" name="robot")
    | &nbsp; {{ $t('sidebar.introduce') }}
  ul.menu-list
    li
      nuxt-link(to="/introduce")
        fa-icon(pack="fas" name="robot")
        | &nbsp; {{ $t('sidebar.bot') }}
  p.menu-label
    fa-icon(pack="fas" name="wrench")
    | &nbsp; {{ $t('sidebar.functions') }}
  ul.menu-list
    li
      nuxt-link(to="/functions/commands")
        fa-icon(pack="fas" name="terminal")
        | &nbsp; {{ $t('sidebar.command') }}
    li
      nuxt-link(to="/functions/chat_commands")
        fa-icon(pack="fas" name="comment")
        | &nbsp; {{ $t('sidebar.chatCommand') }}
    li
      nuxt-link(to="/functions/admins")
        fa-icon(pack="fas" name="unlock-alt")
        | &nbsp; {{ $t('sidebar.admin') }}
    li
      nuxt-link(to="/functions/inline")
        fa-icon(pack="fas" name="signal")
        | &nbsp; {{ $t('sidebar.inline') }}
  p.menu-label
    fa-icon(pack="fas" name="server")
    | &nbsp; {{ $t('sidebar.env') }}
  ul.menu-list
    li
      nuxt-link(to="/running")
        fa-icon(pack="fas" name="server")
        | &nbsp; {{ $t('sidebar.server') }}
  p.menu-label
    fa-icon(pack="fab" name="discord")
    | &nbsp; {{ $t('sidebar.discord') }}
  ul.menu-list
    li
      nuxt-link(to="/kaorukobot")
        fa-icon(pack="fab" name="discord")
        | &nbsp; {{ $t('sidebar.kaorukoBot') }}
</template>
