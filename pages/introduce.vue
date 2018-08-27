<template lang="pug">
div
  p.menu-label introuduce
  hr
  .content
    figure.image#mainimg
      img.is-rounded(src="~/static/mori2.jpg")
    h3 안녕하세요. 모리입니다.
    br
    p 모리봇을 만들자고 결심을 했을 당시, 다른 봇이
      |  자주 꺼졌던 것을 계기로 제작되었습니다.
    br
    p 모리는 <b>GJ부</b>라는 만화에 등장하는 등장인물입니다.
    p 캐릭터의 저작권은 원작자에게 있습니다.
    br
    p
      fa-icon(pack="fab" name="github")
      | &nbsp; 
      a(href="https://git.mori.space/small-sunshine/gjmoribot" target="_blank") https://git.mori.space/small-sunshine/gjmoribot
</template>

<style scoped>
#mainimg {
  width: 10em;
  height: auto;
  margin-bottom: 2em;
}
</style>

<script>
import buildmeta from '~/assets/buildmeta'

const title = 'Introduce :: MoriBot'
const { meta, link } = buildmeta({
  title,
  url: 'https://moribot.mori.space/introduce',
  siteName: 'MoriBot Homepage',
  desc: '모리봇을 소개하는 페이지입니다.',
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