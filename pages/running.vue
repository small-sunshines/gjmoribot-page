<template lang="pug">
div
  p.menu-label running
  hr
  .content
    h1 {{ $t('running.env') }}
    table
      tbody
        tr
          td 
            fa(:icon="['fas', 'microchip']")
            | &nbsp; CPU
          td Vultr VCPU 1Core
        tr
          td
            fa(:icon="['fas', 'memory']")
            | &nbsp; RAM
          td Vultr VRAM 1GB
        tr
          td
            fa(:icon="['fas', 'hdd']")
            | &nbsp; SSD
          td Vultr SSD 25GB
        tr
          td
            fa(:icon="['fab', 'docker']")
            | &nbsp; Docker
          td Yes

</template>

<script>
import buildmeta from '~/assets/buildmeta'

export default {
  components: {
    
  },
  head () {
    const title = 'Running :: KuriyamaBot'
    const { meta, link } = buildmeta({
      title,
      url: 'https://kuriyama.mori.space/running',
      siteName: this.$t('OG.running.siteName'),
      desc: this.$t('OG.running.desc'),
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