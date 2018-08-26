<template lang="pug">
div
  p.menu-label.is-hidden-touch index
  hr
  figure.image#mainimg
    img.is-rounded(src="~/static/mori1.png")
  p 안녕하세요. 모리입니다.
  br
  a.button.is-large.is-telegram(href="https://t.me/gjmoribot" target="_blank")
    p
      fa-icon(pack="fab", name="telegram" size="lg")
      | &nbsp; MoriBot with Telegram
</template>

<style scoped>
#mainimg {
  width: 30em;
  height: auto;
  margin-bottom: 2em;
}
a.button.is-telegram {
  background-color: #37AEE2;
  color: #fff;
  border-radius: 10px;
}
</style>


<script>

export default {
  components: {
    
  }
}
</script>