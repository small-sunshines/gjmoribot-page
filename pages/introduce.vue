<template lang="pug">
div
  p.menu-label introuduce
  hr
  .content
    figure.image#mainimg
      img.is-rounded(src="~/static/kuriyama2.jpg")
    Vue-markdown {{ $t('introduce.content')}}
    br
    a.button.is-large.is-git(href="https://github.com/small-sunshines/kuriyamabot" target="_blank")
      p
        fa(:icon="['fab', 'git']" size="lg")
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
import VueMarkdown from 'vue-markdown'

import buildmeta from '~/assets/buildmeta'

export default {
  components: {
    VueMarkdown
  },
  head () {
    const title = this.$t('OG.introduce.siteName')
    const { meta, link } = buildmeta({
      title,
      url: 'https://kuriyama.mori.space/introduce',
      siteName: this.$t('OG.introduce.siteName'),
      desc: this.$t('OG.introduce.desc'),
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