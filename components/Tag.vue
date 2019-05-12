<template lang="pug">
  span.tag(:class="classes") {{ message }}
</template>

<script>
export default {
  props: ['type'],
  data () {
    switch (this.type) {
      case 'beta':
        return {
          classes: 'has-background-info has-text-white',
          message: 'Beta'
        }
        break
      case 'master':
        return {
          classes: 'has-background-success has-text-white',
          message: 'Master'
        }
        break
      default:
        thorw(this.type + ' is not beta/master')
    }
  }
}
</script>
