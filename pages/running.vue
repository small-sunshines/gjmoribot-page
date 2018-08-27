<template lang="pug">
div
  p.menu-label running
  hr
  .content
    h1 모리봇 구동환경
    table
      thead
        tr
          td 부품
          td 부품이름
      tbody
        tr
          td CPU
          td Intel i3-2100
        tr
          td RAM
          td DDR3-10600 4GB 1ea, DDR3-12800 4GB 1ea
        tr
          td SSD
          td TAMMUZ RX631 64GB
        tr
          td HDD
          td MARSHAL MAL21000SA-T54 2.5in 1TB
        tr
          td PSU
          td MICRONICS CYCLONE II
        tr
          td Docker
          td Yes

</template>

<script>
import buildmeta from '~/assets/buildmeta'

const title = 'Running :: MoriBot'
const { meta, link } = buildmeta({
  title,
  url: 'https://moribot.mori.space/running',
  siteName: 'MoriBot Homepage',
  desc: '모리봇의 구동환경을 소개하는 페이지입니다.',
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