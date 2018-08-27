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
          small 봇을 시작하는 명령어
        br
        p 모리봇을 사용하실 때 사용하실 명령어입니다. 간단한 도움말이 출력됩니다.
  .box
    .media-content
      p
        strong /help
        | &nbsp;
        small 도움말을 볼 수 있는 명령어
      br
      p 모리봇에 있는 명령어들의 도움말을 볼 수 있습니다.
  .box
    .media-content
      p
        strong /img
        | &nbsp;
        small 이미지를 검색하는 명령어
      br
      p 구글에서 이미지를 검색하는 명령어입니다.
  .box
    .media-content
      p
        strong /google
        | &nbsp;
        small 구글에 검색하는 명령어
      br
      p 구글에 검색할 수 있는 명령어입니다.
  .box
    .media-content
      p
        strong /uptime
        | &nbsp;
        small 작동시간 보는 명령어
      br
      p 이 봇이 작동된 시간을 확인할 수 있습니다.
  .box
    .media-content
      p
        strong /lang
        | &nbsp;
        small 사용할 언어를 바꾸는 명령어
      br
      p 이 봇에서 사용할 언어를 바꿉니다.
  .box
    .media-content
      p
        strong /me
        | &nbsp;
        small 자신의 정보를 보는 명령어들의
      br
      p 자신의 정보를 볼 수 있는 명령어입니다.
  .box
    .media-content
      p
        strong /whatanime
        | &nbsp;
        small 스크린샷으로 애니메이션 검색
      br
      p 애니메이션의 스크린샷으로 무슨 애니메이션인지 찾아볼 수 있습니다.
      br
      p
        a.button.is-primary(href="https://whatanime.ga/" target="_blank") whatanime.ga
        | &nbsp; 의 API를 사용합니다.
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
}, null, null)

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