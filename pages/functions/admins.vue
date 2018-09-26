<template lang="pug">
div
  p.menu-label admins
  hr
  .box
    .media-content
      .content
        p
          strong /welcome
          | &nbsp;
          small {{ $t('functions.admins.welcome.header') }}
          | &nbsp;
          tag(type="master")
          | &nbsp;
          tag(type="beta")
        br
        p {{ $t('functions.admins.welcome.content') }}
  .box
    .media-content
      .content
        p
          strong /leave
          | &nbsp;
          small {{ $t('functions.admins.leave.header') }}
          | &nbsp;
          tag(type="master")
          | &nbsp;
          tag(type="beta")
        br
        p {{ $t('functions.admins.leave.content') }}
</template>

<script>
import buildmeta from '~/assets/buildmeta'
import tag from '~/components/Tag.vue'

export default {
  components: {
    tag    
  },
  head () {
    const title = 'Admins :: Functions :: MoriBot'
    const { meta, link } = buildmeta({
      title,
      url: 'https://moribot.mori.space/functions/admins',
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