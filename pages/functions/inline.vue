<template lang="pug">
div
  p.menu-label inline queries
  hr
  .box
    .media-content
      .content
        p
          strong @gjmoribot img (search keyword)
          | &nbsp;
          small {{ $t('functions.inline.img.header') }}
        br
        p {{ $t('functions.inline.img.content') }}
  .box
    .media-content
      .content
        p
          strong @gjmoribot search (search keyword)
          | &nbsp;
          small {{ $t('functions.inline.search.header') }}
        br
        p {{ $t('functions.inline.search.content') }}
  .box
    .media-content
      .content
        p
          strong @gjmoribot youtube (search keyword)
          | &nbsp;
          small {{ $t('functions.inline.youtube.header') }}
        br
        p {{ $t('functions.inline.youtube.content') }}
  .box
    .media-content
      .content
        p
          strong @gjmoribot help
          | &nbsp;
          small {{ $t('functions.inline.help.header') }}
        br
        p {{ $t('functions.inline.help.content') }}
</template>

<script>
import buildmeta from '~/assets/buildmeta'

export default {
  components: {
    
  },
  head () {
    const title = 'Inline Queries :: Functions :: MoriBot'
    const { meta, link } = buildmeta({
      title,
      url: 'https://moribot.mori.space/functions/inline',
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