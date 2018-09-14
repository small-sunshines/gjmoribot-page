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
            fa-icon(pack="fas" name="microchip")
            | &nbsp; CPU
          td Intel i3-2100
        tr
          td
            fa-icon(pack="fas" name="memory")
            | &nbsp; RAM
          td DDR3-10600 4GB 1ea, DDR3-12800 4GB 1ea
        tr
          td
            fa-icon(pack="fas" name="hdd")
            | &nbsp; SSD
          td TAMMUZ RX631 64GB
        tr
          td
            fa-icon(pack="fas" name="hdd")
            | &nbsp; HDD
          td MARSHAL MAL21000SA-T54 2.5in 1TB
        tr
          td
            fa-icon(pack="fas" name="plug")
            | &nbsp; Power
          td MICRONICS CYCLONE III
        tr
          td
            fa-icon(pack="fab" name="docker")
            | &nbsp; Docker
          td Yes

</template>

<script>
import buildmeta from '~/assets/buildmeta'

export default {
  components: {
    
  },
  head () {
    const title = 'Running :: MoriBot'
    const { meta, link } = buildmeta({
      title,
      url: 'https://moribot.mori.space/running',
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