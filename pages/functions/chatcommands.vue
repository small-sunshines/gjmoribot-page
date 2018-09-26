<template lang="pug">
div
  p.menu-label chat commands
  hr
  .box
    .media-content
      .content
        p
          strong {img (search keyword)}
          | &nbsp;
          small {{ $t('functions.chatcommands.img.header') }}
          | &nbsp;
          tag(type="master")
          | &nbsp;
          tag(type="beta")
        br
        p {{ $t('functions.chatcommands.img.content') }}
  .box
    .media-content
      .content
        p
          strong {search (search keyword)}
          | &nbsp;
          small {{ $t('functions.chatcommands.search.header') }}
          | &nbsp;
          tag(type="master")
          | &nbsp;
          tag(type="beta")
        br
        p {{ $t('functions.chatcommands.search.content') }}
  .box
    .media-content
      .content
        p
          strong {{ $t('functions.chatcommands.example.header') }}
        br
        blockquote {{ $t('functions.chatcommands.example.content') }}
</template>

<script>
import buildmeta from '~/assets/buildmeta'
import tag from '~/components/Tag.vue'

export default {
  components: {
    tag    
  },
  head () {
    const title = 'Chat Commands :: Functions :: MoriBot'
    const { meta, link } = buildmeta({
      title,
      url: 'https://moribot.mori.space/functions/chat_commands',
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