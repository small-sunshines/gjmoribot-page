<template lang="pug">
div
  p.menu-label KaorukoBot
  hr
  .content
    figure.image#mainimg
      img.is-rounded(src="~/static/kaoruko.jpg")
    h3 {{ $t('kaorukobot.ababa')}}
    br
    p {{ $t('kaorukobot.content[0]') }}
    p {{ $t('kaorukobot.content[1]') }}
    br
    a.button.is-large.is-discord(disabled)
      p
        fa-icon(pack="fab", name="discord" size="lg")
        | &nbsp; KaorukoBot Comming soon!!
    br
    br
    a.button.is-large.is-git(href="https://git.mori.space/small-sunshine/kaorukoBot" target="_blank")
      p
        fa-icon(pack="fab", name="git" size="lg")
        | &nbsp; Explore to KaorukoBot
    
</template>

<style scoped>
#mainimg {
  width: 17em;
  height: auto;
  margin-bottom: 2em;
  margin-left: 0em;
}
a.button.is-discord {
  background-color: #7289DA;
  color: #fff;
  border-radius: 10px;
  
}
a.button.is-discord p {
  font-size: 0.8em;
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
    const title = 'KaorukoBot :: MoriBot'
    const { meta, link } = buildmeta({
      title,
      url: 'https://moribot.mori.space/kaorukobot',
      siteName: this.$t('OG.kaorukobot.siteName'),
      desc: this.$t('OG.kaorukobot.desc'),
      image: null,
      width: null,
      height: null,
      author: 'small_sunshine',
      twitterCreator: '@jioo0224'
    }, [
      {hid: 'theme-color', name: 'theme-color', content: '#7289DA'}
    ], null)
    
    return { title, meta, link }
  }
}
</script>