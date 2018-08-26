<template lang="pug">
div
  p.menu-label KaorukoBot
  hr
  .content
    figure.image#mainimg
      img.is-rounded(src="~/static/kaoruko.jpg")
    h3 "아바바바바바바바바바바"
    br
    p 카오루코봇은 모리봇의 디스코드 이식판으로, 현재 제작중에 있습니다.
    p 캐릭터는 코믹 걸즈의 모에타 카오루코로 정하였습니다.
    br
    p
      fa-icon(pack="fab" name="github")
      | &nbsp; 
      a(href="https://git.mori.space/small-sunshine/kaorukoBot" target="_blank") https://git.mori.space/small-sunshine/kaorukoBot
    br
    a.button.is-large.is-discord(disabled)
      p
        fa-icon(pack="fab", name="discord" size="lg")
        | &nbsp; KaorukoBot Comming soon!!
    
</template>

<style scoped>
#mainimg {
  width: 17em;
  height: auto;
  margin-bottom: 2em;
  margin-left: 0em;
}
a.button.is-discord {
  background-color: #7289DA;
  color: #fff;
  border-radius: 10px;
  
}
a.button.is-discord p {
  font-size: 0.8em;
}
</style>

<script>
export default {
  components: {
  }
}
</script>