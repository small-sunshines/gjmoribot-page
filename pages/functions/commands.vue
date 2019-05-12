<template lang="pug">
div
  p.menu-label commands
  hr
  Box
    p(slot="header")
      strong /start
      | &nbsp;
      small {{ $t('functions.commands.start.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.commands.start.content') }}
  Box
    p(slot="header")
      strong /help
      | &nbsp;
      small {{ $t('functions.commands.help.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.commands.help.content') }}
  Box
    p(slot="header")
      strong /img
      | &nbsp;
      small {{ $t('functions.commands.img.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.commands.img.content') }}
  Box
    p(slot="header")
      strong /google
      | &nbsp;
      small {{ $t('functions.commands.google.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.commands.google.content') }}
  Box
    p(slot="header")
      strong /uptime
      | &nbsp;
      small {{ $t('functions.commands.uptime.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.commands.uptime.content') }}
  Box
    p(slot="header")
      strong /lang
      | &nbsp;
      small {{ $t('functions.commands.lang.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.commands.lang.content') }}
  Box
    p(slot="header")
      strong /me
      | &nbsp;
      small {{ $t('functions.commands.me.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.commands.me.content') }}
  Box
    p(slot="header")
      strong /whatanime
      | &nbsp;
      small {{ $t('functions.commands.whatanime.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.commands.whatanime.content') }}
  Box
    p(slot="header")
      strong /msginfo
      | &nbsp;
      small {{ $t('functions.commands.msginfo.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.commands.msginfo.content') }}
  Box
    p(slot="header")
      strong /homepage
      | &nbsp;
      small {{ $t('functions.commands.homepage.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.commands.homepage.content') }}
  Box
    p(slot="header")
      strong /weather
      | &nbsp;
      small {{ $t('functions.commands.weather.header') }}
      | &nbsp;
      tag(type="master")
      | &nbsp;
      tag(type="beta")
    p(slot="content") {{ $t('functions.commands.weather.content') }}
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
    const title = 'Commands :: Functions :: KuriyamaBot'
    const { meta, link } = buildmeta({
      title,
      url: 'https://kuriyama.mori.space/',
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