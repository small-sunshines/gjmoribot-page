<template lang="pug">
div
  p.menu-label introuduce
  hr
  .content
    figure.image#mainimg
      img.is-rounded(src="~/static/mori2.jpg")
    h3 안녕하세요. 모리입니다.
    br
    p 모리봇을 만들자고 결심을 했을 당시, 다른 봇이
      |  자주 꺼졌던 것을 계기로 제작되었습니다.
    br
    p 모리는 <b>GJ부</b>라는 만화에 등장하는 등장인물입니다.
    p 캐릭터의 저작권은 원작자에게 있습니다.
    br
    p
      fa-icon(pack="fab" name="github")
      | &nbsp; 
      a(href="https://git.mori.space/small-sunshine/gjmoribot" target="_blank") https://git.mori.space/small-sunshine/gjmoribot
</template>

<style scoped>
#mainimg {
  width: 10em;
  height: auto;
  margin-bottom: 2em;
}
</style>

<script>
export default {
  components: {
  }
}
</script>