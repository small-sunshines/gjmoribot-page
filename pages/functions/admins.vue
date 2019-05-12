<template lang="pug">
div
  p.menu-label admins
  hr
  Box
    p(slot="header")
      strong /welcome
      | &nbsp;
      small {{ $t('functions.admins.welcome.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.admins.welcome.content') }}
  Box
    p(slot="header")
      strong /leave
      | &nbsp;
      small {{ $t('functions.admins.leave.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.admins.leave.content') }}
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
    const title = this.$t('OG.introduce.siteName')
    const { meta, link } = buildmeta({
      title,
      url: 'https://kuriyama.mori.space/functions/admins',
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