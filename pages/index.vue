<template lang="pug">
div
  p.menu-label index
  hr
  .content
    figure.image#mainimg
      img.is-rounded(src="~/static/mori1.png")
    h3 안녕하세요. 모리입니다.
    br
    a.button.is-large.is-telegram(href="https://t.me/gjmoribot" target="_blank")
      p
        fa-icon(pack="fab", name="telegram" size="lg")
        | &nbsp; MoriBot with Telegram
</template>

<style scoped>
#mainimg {
  width: 20em;
  height: auto;
  margin-bottom: 2em;
  margin-left: 0em;
}
a.button.is-telegram {
  background-color: #37AEE2;
  color: #fff;
  border-radius: 10px;
}
</style>


<script>
import buildmeta from '~/assets/buildmeta'

const title = 'MoriBot'
const { meta, link } = buildmeta({
  title,
  url: 'https://moribot.mori.space/',
  siteName: 'MoriBot Homepage',
  desc: '모리봇 홈페이지입니다.',
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