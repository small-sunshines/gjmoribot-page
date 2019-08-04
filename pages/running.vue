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
          td 2 vCore (Vultr)
        tr
          td
            fa(:icon="['fas', 'memory']")
            | &nbsp; RAM
          td 4GB
        tr
          td
            fa(:icon="['fas', 'hdd']")
            | &nbsp; Storage
          td 80 GB SSD
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
    const title = this.$t('OG.running.siteName')
    const { meta, link } = buildmeta({
      title,
      url: 'https://kuriyama.mori.space/running',
      siteName: this.$t('OG.running.siteName'),
      desc: this.$t('OG.running.desc'),
      image: null,
      width: null,
      height: null,
      author: 'dalbodeule',
      twitterCreator: '@dalbodeule'
    }, [
      {hid: 'theme-color', name: 'theme-color', content: '#37AEE2'}
    ], null)
    
    return { title, meta, link }
  }
}
</script>