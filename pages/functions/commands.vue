<template lang="pug">
div
  p.menu-label commands
  hr
  .box
    .media-content
      .content
        p
          strong /start
          | &nbsp;
          small {{ $t('functions.commands.start.header') }}
      br
      p {{ $t('functions.commands.start.content') }}
  .box
    .media-content
      .content
        p
          strong /help
          | &nbsp;
          small {{ $t('functions.commands.help.header') }}
        br
        p {{ $t('functions.commands.help.content') }}
  .box
    .media-content
      .content
        p
          strong /img
          | &nbsp;
          small {{ $t('functions.commands.img.header') }}
        br
        p {{ $t('functions.commands.img.content') }}
  .box
    .media-content
      .content
        p
          strong /google
          | &nbsp;
          small {{ $t('functions.commands.google.header') }}
        br
        p {{ $t('functions.commands.google.content') }}
  .box
    .media-content
      .content
        p
          strong /uptime
          | &nbsp;
          small {{ $t('functions.commands.uptime.header') }}
        br
        p {{ $t('functions.commands.uptime.content') }}
  .box
    .media-content
      .content
        p
          strong /lang
          | &nbsp;
          small {{ $t('functions.commands.lang.header') }}
        br
        p {{ $t('functions.commands.lang.content') }}
  .box
    .media-content
      .content
        p
          strong /me
          | &nbsp;
          small {{ $t('functions.commands.me.header') }}
        br
        p {{ $t('functions.commands.me.content') }}
  .box
    .media-content
      .content
        p
          strong /whatanime
          | &nbsp;
          small {{ $t('functions.commands.whatanime.header') }}
        br
        p {{ $t('functions.commands.whatanime.content') }}
        br
        p
          | {{ $t('functions.commands.whatanime.api') }} &nbsp;
          a.button.is-primary(href="https://whatanime.ga/" target="_blank")
            | {{ $t('functions.commands.whatanime.go') }}
        
</template>

<script>
import buildmeta from '~/assets/buildmeta'

const title = 'Commands :: Functions :: MoriBot'
const { meta, link } = buildmeta({
  title,
  url: 'https://moribot.mori.space/',
  siteName: 'MoriBot Homepage',
  desc: '모리봇의 명령어를 소개하는 페이지입니다.',
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