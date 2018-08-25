<template lang="pug">
div
  p.menu-label.is-hidden-touch index
  hr
  figure.image#mainimg
    img.is-rounded(src="~/static/mori1.png")
  p 안녕하세요. 모리입니다.
</template>

<style scoped>
#mainimg {
  width: 30em;
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