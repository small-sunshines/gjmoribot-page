<template lang="pug">
div
  p.menu-label inline queries
  hr
  Box
    p(slot="header")
      strong @gjmoribot img (search keyword)
      | &nbsp;
      small {{ $t('functions.inline.img.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.inline.img.content') }}
  Box
    p(slot="header")
      strong @gjmoribot search (search keyword)
      | &nbsp;
      small {{ $t('functions.inline.search.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.inline.search.content') }}
  Box
    p(slot="header")
      strong @gjmoribot youtube (search keyword)
      | &nbsp;
      small {{ $t('functions.inline.youtube.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.inline.youtube.content') }}
  Box
    p(slot="header")
      strong @gjmoribot help
      | &nbsp;
      small {{ $t('functions.inline.help.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.inline.help.content') }}
</template>

<script>
import buildmeta from '~/assets/buildmeta'

import Box from '~/components/Box.vue'
import Tag from '~/components/Tag.vue'

export default {
  components: {
    Tag,
    Box
  },
  head () {
    const title = 'Inline Queries :: Functions :: KuriyamaBot'
    const { meta, link } = buildmeta({
      title,
      url: 'https://kuriyama.mori.space/functions/inline',
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