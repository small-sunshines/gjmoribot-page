<template lang="pug">
div
  p.menu-label functions index
  hr
  Box
    strong(slot="header") {{ $t('functions.index.command.title') }}
    div(slot="content")
      p {{ $t('functions.index.command.content') }}
      br
      nuxt-link.button.is-info(to="/functions/commands") {{ $t('functions.index.go') }}
  Box
    strong(slot="header") {{ $t('functions.index.chatCommand.title') }}
    div(slot="content")
      p {{ $t('functions.index.chatCommand.content') }}
      br
      nuxt-link.button.is-info(to="/functions/chat_commands") {{ $t('functions.index.go') }}
  Box
    strong(slot="header") {{ $t('functions.index.admin.title') }}
    div(slot="content")
      p {{ $t('functions.index.admin.content') }}
      br
      nuxt-link.button.is-info(to="/functions/admins") {{ $t('functions.index.go') }}
  Box
    strong(slot="header") {{ $t('functions.index.inline.title') }}
    div(slot="content")
      p {{ $t('functions.index.inline.content') }}
      br
      nuxt-link.button.is-info(to="/functions/inline") {{ $t('functions.index.go') }}
</template>

<script>
import buildmeta from '~/assets/buildmeta'

import Box from '~/components/Box.vue'

export default {
  components: {
    Box
  },
  head () {
    const title = 'Functions :: KuriyamaBot'
    const { meta, link } = buildmeta({
      title,
      url: 'https://kuriyama.mori.space/functions',
      siteName: this.$t('OG.introduce.siteName'),
      desc: this.$t('OG.introduce.desc'),
      desc: '',
      image: null,
      width: null,
      height: null,
      author: 'small_sunshine',
      twitterCreator: '@jioo0224'
    }, [
      {hid: 'theme-color', name: 'theme-color', content: '#37AEE2'}
    ], null)

    return { title, meta, link }
  }
}
</script>