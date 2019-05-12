<template lang="pug">
  .box
    .media-content
      .content
        slot(name="header")
        hr
        slot(name="content")
</template>

<script>
export default {
  
}
</script>
