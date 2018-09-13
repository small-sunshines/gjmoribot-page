<template lang="pug">
div
  p.menu-label index
  hr
  .content
    figure.image#mainimg
      img.is-rounded(src="~/static/mori1.png")
    h3 {{ $t('index.hello') }}
    br
    a.button.is-large.is-telegram(href="https://t.me/gjmoribot" target="_blank")
      p
        fa-icon(pack="fab", name="telegram" size="lg")
        | &nbsp; {{ $t('index.telegram') }}
    br
    br
    a.button.is-large.is-git(href="https://git.mori.space/small-sunshine/gjmoribot" target="_blank")
      p
        fa-icon(pack="fab", name="git" size="lg")
        | &nbsp; {{ $t('index.git') }}
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
a.button.is-git {
  background-color: #fff;
  color: #000;
  border-radius: 10px;
}
</style>


<script>
import buildmeta from '~/assets/buildmeta'

export default {
  components: {
    
  },
  head () {
    const title = 'MoriBot'
    const { meta, link } = buildmeta({
      title,
      url: 'https://moribot.mori.space/',
      siteName: this.$t('OG.index.siteName'),
      desc: this.$t('OG.index.desc'),
      image: null,
      width: null,
      height: null,
      author: 'small_sunshine',
      twitterCreator: '@jioo0224'
    }, [
      {hid: 'theme-color', name: 'theme-color', content: '#37AEE2'}
    ], null)

    return { title, meta, link }
  }
}
</script>