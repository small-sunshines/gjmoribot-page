<template lang="pug">
div
  p.menu-label chat commands
  hr
  Box
    span(slot="header")
      strong img 
      span {{ $t('functions.chatcommands.img.header') }}
      |  
      tag(type="master")
      |  
      tag(type="beta")
    VueMarkdown(slot="content") {{ $t('functions.chatcommands.img.content') }}
  Box
    span(slot="header")
      strong search 
      span {{ $t('functions.chatcommands.search.header') }}
      |  
      tag(type="master")
      |  
      tag(type="beta")
    VueMarkdown(slot="content") {{ $t('functions.chatcommands.search.content') }}
</template>

<script>
import VueMarkdown from 'vue-markdown'

import buildmeta from '~/assets/buildmeta'

import Box from '~/components/Box.vue'
import Tag from '~/components/Tag.vue'

export default {
  components: {
    VueMarkdown,
    Tag,
    Box
  },
  head () {
    const title = this.$t('OG.introduce.siteName')
    const { meta, link } = buildmeta({
      title,
      url: 'https://kuriyama.mori.space/functions/chat_commands',
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