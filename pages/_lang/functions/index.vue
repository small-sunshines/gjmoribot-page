<template lang="pug">
div
  p.menu-label functions index
  hr
  .box
    .media-content
      .content
        strong 명령어
        p 모리봇의 명령어를 소개합니다!
        br
        nuxt-link.button.is-info(to="/functions/commands") 바로가기!
  .box
    .media-content
      .content
        strong Chat Command
        p 모리봇만의 Chat Command를 소개합니다!
        br
        nuxt-link.button.is-info(to="/functions/chat_commands") 바로가기!
  .box
    .media-content
      .content
        strong 어드민 기능
        p 모리봇의 어드민 기능을 소개합니다!
        br
        nuxt-link.button.is-info(to="/functions/admins") 바로가기!
  .box
    .media-content
      .content
        strong Inline Query
        p 모리봇의 Inline Query 기능을 소개합니다!
        br
        nuxt-link.button.is-info(to="/functions/inline") 바로가기!
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