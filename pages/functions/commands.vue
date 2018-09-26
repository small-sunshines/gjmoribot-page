<template lang="pug">
div
  p.menu-label commands
  hr
  .box
    .media-content
      .content
        p
          strong /start
          | &nbsp;
          small {{ $t('functions.commands.start.header') }}
          | &nbsp;
          tag(type="master")
          | &nbsp;
          tag(type="beta")
      br
      p {{ $t('functions.commands.start.content') }}
  .box
    .media-content
      .content
        p
          strong /help
          | &nbsp;
          small {{ $t('functions.commands.help.header') }}
          | &nbsp;
          tag(type="master")
          | &nbsp;
          tag(type="beta")
        br
        p {{ $t('functions.commands.help.content') }}
  .box
    .media-content
      .content
        p
          strong /img
          | &nbsp;
          small {{ $t('functions.commands.img.header') }}
          | &nbsp;
          tag(type="master")
          | &nbsp;
          tag(type="beta")
        br
        p {{ $t('functions.commands.img.content') }}
  .box
    .media-content
      .content
        p
          strong /google
          | &nbsp;
          small {{ $t('functions.commands.google.header') }}
          | &nbsp;
          tag(type="master")
          | &nbsp;
          tag(type="beta")
        br
        p {{ $t('functions.commands.google.content') }}
  .box
    .media-content
      .content
        p
          strong /uptime
          | &nbsp;
          small {{ $t('functions.commands.uptime.header') }}
          | &nbsp;
          tag(type="master")
          | &nbsp;
          tag(type="beta")
        br
        p {{ $t('functions.commands.uptime.content') }}
  .box
    .media-content
      .content
        p
          strong /lang
          | &nbsp;
          small {{ $t('functions.commands.lang.header') }}
          | &nbsp;
          tag(type="master")
          | &nbsp;
          tag(type="beta")
        br
        p {{ $t('functions.commands.lang.content') }}
  .box
    .media-content
      .content
        p
          strong /me
          | &nbsp;
          small {{ $t('functions.commands.me.header') }}
          | &nbsp;
          tag(type="master")
          | &nbsp;
          tag(type="beta")
        br
        p {{ $t('functions.commands.me.content') }}
  .box
    .media-content
      .content
        p
          strong /whatanime
          | &nbsp;
          small {{ $t('functions.commands.whatanime.header') }}
          | &nbsp;
          tag(type="master")
          | &nbsp;
          tag(type="beta")
        br
        p {{ $t('functions.commands.whatanime.content') }}
        br
        p
          | {{ $t('functions.commands.whatanime.api') }} &nbsp;
          a.button.is-info(href="https://whatanime.ga/" target="_blank")
            | {{ $t('functions.commands.whatanime.go') }}
  .box
    .media-content
      .content
        p
          strong /msginfo
          | &nbsp;
          small {{ $t('functions.commands.msginfo.header') }}
          | &nbsp;
          tag(type="master")
          | &nbsp;
          tag(type="beta")
        br
        p {{ $t('functions.commands.msginfo.content') }}
  .box
    .media-content
      .content
        p
          strong /homepage
          | &nbsp;
          small {{ $t('functions.commands.homepage.header') }}
          | &nbsp;
          tag(type="master")
          | &nbsp;
          tag(type="beta")
        br
        p {{ $t('functions.commands.homepage.content') }}
        
</template>

<script>
import buildmeta from '~/assets/buildmeta'
import tag from '~/components/Tag.vue'

export default {
  components: {
    tag
  },
  head () {
    const title = 'Commands :: Functions :: MoriBot'
    const { meta, link } = buildmeta({
      title,
      url: 'https://moribot.mori.space/',
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