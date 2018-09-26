<template lang="pug">
  span.tag(:class="className") {{ message }}
</template>

<script>
export default {
  props: ['type'],
  data () {
    switch (this.type) {
      case 'beta':
        return {
          className: 'is-info',
          message: 'Beta'
        }
        break
      case 'master':
        return {
          className: 'is-primary',
          message: 'Master'
        }
        break
      default:
        thorw(this.type + ' is not beta/master')
    }
  }
}
</script>
