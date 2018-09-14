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

export default {
  components: {
    
  },
  head () {
    const title = 'Functions :: MoriBot'
    const { meta, link } = buildmeta({
      title,
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