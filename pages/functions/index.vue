<template lang="pug">
div
  p.menu-label functions index
  hr
  .box
    .media-content
      .content
        strong {{ $t('functions.index.command.title') }}
        hr
        p {{ $t('functions.index.command.content') }}
        br
        nuxt-link.button.is-info(to="/functions/commands") {{ $t('functions.index.go') }}
  .box
    .media-content
      .content
        strong {{ $t('functions.index.chatCommand.title') }}
        hr
        p {{ $t('functions.index.chatCommand.content') }}
        br
        nuxt-link.button.is-info(to="/functions/chat_commands") {{ $t('functions.index.go') }}
  .box
    .media-content
      .content
        strong {{ $t('functions.index.admin.title') }}
        hr
        p {{ $t('functions.index.admin.content') }}
        br
        nuxt-link.button.is-info(to="/functions/admins") {{ $t('functions.index.go') }}
  .box
    .media-content
      .content
        strong {{ $t('functions.index.inline.title') }}
        hr
        p {{ $t('functions.index.inline.content') }}
        br
        nuxt-link.button.is-info(to="/functions/inline") {{ $t('functions.index.go') }}
</template>

<script>
import buildmeta from '~/assets/buildmeta'

const title = 'Functions :: MoriBot'
const { meta, link } = buildmeta({
  title,
  url: 'https://moribot.mori.space/functions',
  siteName: 'MoriBot Homepage',
  desc: '모리봇의 기능을 소개하는 페이지입니다.',
  image: null,
  width: null,
  height: null,
  author: 'small_sunshine',
  twitterCreator: '@jioo0224'
}, [
  {hid: 'theme-color', name: 'theme-color', content: '#37AEE2'}
], null)

export default {
  components: {
    
  },
  head () {
    return {
      title,
      meta,
      link
    }
  }
}
</script>