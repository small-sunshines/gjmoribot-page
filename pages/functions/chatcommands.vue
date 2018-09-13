<template lang="pug">
div
  p.menu-label chat commands
  hr
  .box
    .media-content
      p
        strong {img (search keyword)}
        | &nbsp;
        small {{ $t('functions.chatcommands.img.header') }}
      br
      p {{ $t('functions.chatcommands.img.content') }}
  .box
    .media-content
      p
        strong {search (search keyword)}
        | &nbsp;
        small {{ $t('functions.chatcommands.search.header') }}
      br
      p {{ $t('functions.chatcommands.search.content') }}
  .box
    .media-content
      p
        strong {{ $t('functions.chatcommands.example.header') }}
      br
      .content
        blockquote {{ $t('functions.chatcommands.example.content') }}
</template>

<script>
import buildmeta from '~/assets/buildmeta'

const title = 'Chat Commands :: Functions :: MoriBot'
const { meta, link } = buildmeta({
  title,
  url: 'https://moribot.mori.space/functions/chat_commands',
  siteName: 'MoriBot Homepage',
  desc: '모리봇의 Chat Command 기능을 소개하는 페이지입니다.',
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