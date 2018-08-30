<template lang="pug">
div
  p.menu-label admins
  hr
  .box
    .media-content
      .content
        p
          strong /welcome
          | &nbsp;
          small 입장메세지를 정할 수 있는 명령어
        br
        p 모리봇의 입장메세지를 정할 수 있는 명령어입니다.
  .box
    .media-content
      .content
        p
          strong /leave
          | &nbsp;
          small 퇴장메세지를 정할 수 있는 명령어
        br
        p 모리봇의 퇴장메세지를 정할 수 있는 명령어입니다.
</template>

<script>
import buildmeta from '~/assets/buildmeta'

const title = 'Admins :: Functions :: MoriBot'
const { meta, link } = buildmeta({
  title,
  url: 'https://moribot.mori.space/functions/admins',
  siteName: 'MoriBot Homepage',
  desc: '모리봇의 어드민 기능을 소개하는 페이지입니다.',
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