<template lang="pug">
div
  p.menu-label introuduce
  hr
  .content
    figure.image#mainimg
      img.is-rounded(src="~/static/mori2.jpg")
    h3 {{ $t('introduce.hello') }}
    br
    h6 {{ $t('introduce.content[0]') }}
    br
    p {{ $t('introduce.content[1]') }}
    p {{ $t('introduce.content[2]') }}
    br
    a.button.is-large.is-git(href="https://git.mori.space/small-sunshine/gjmoribot" target="_blank")
      p
        fa-icon(pack="fab", name="git" size="lg")
        | &nbsp; {{ $t('introduce.git') }}
</template>

<style scoped>
#mainimg {
  width: 10em;
  height: auto;
  margin-bottom: 2em;
}
a.button.is-git {
  background-color: #fff;
  color: #000;
  border-radius: 10px;
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