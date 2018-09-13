<template lang="pug">
div
  p.menu-label inline queries
  hr
  .box
    .media-content
      .content
        p
          strong @gjmoribot img (search keyword)
          | &nbsp;
          small {{ $t('functions.inline.img.header') }}
        br
        p {{ $t('functions.inline.img.content') }}
  .box
    .media-content
      .content
        p
          strong @gjmoribot search (search keyword)
          | &nbsp;
          small {{ $t('functions.inline.search.header') }}
        br
        p {{ $t('functions.inline.search.content') }}
  .box
    .media-content
      .content
        p
          strong @gjmoribot youtube (search keyword)
          | &nbsp;
          small {{ $t('functions.inline.youtube.header') }}
        br
        p {{ $t('functions.inline.youtube.content') }}
  .box
    .media-content
      .content
        p
          strong @gjmoribot help
          | &nbsp;
          small {{ $t('functions.inline.help.header') }}
        br
        p {{ $t('functions.inline.help.content') }}
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