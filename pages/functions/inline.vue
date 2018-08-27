<template lang="pug">
div
  p.menu-label inline queries
  hr
  .box
    .media-content
      p
        strong @gjmoribot img (search keyword)
        | &nbsp;
        small 이미지를 검색하는 명령어
      br
      p 구글에서 이미지를 검색하는 명령어입니다.
  .box
    .media-content
      p
        strong @gjmoribot search (search keyword)
        | &nbsp;
        small 구글에 검색하는 명령어
      br
      p 구글에 검색할 수 있는 명령어입니다.
  .box
    .media-content
      p
        strong @gjmoribot youtube (search keyword)
        | &nbsp;
        small 유튜브에 검색하는 명령어
      br
      p 유튜브에서 동영상을 검색할 수 있는 명령어입니다.
  .box
    .media-content
      p
        strong @gjmoribot help
        | &nbsp;
        small 도움말을 볼 수 있는 명령어
      br
      p Inline Command의 도움말을 볼 수 있는 명령어입니다.
</template>

<script>
import buildmeta from '~/assets/buildmeta'

const title = 'Inline Queries :: Functions :: MoriBot'
const { meta, link } = buildmeta({
  title,
  url: 'https://moribot.mori.space/functions/inline',
  siteName: 'MoriBot Homepage',
  desc: '모리봇의 Inline Query 기능을 소개하는 페이지입니다.',
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