<template lang="pug">
  button.custom-button(
    @click="$emit('click')"
  )
    b-icon(
      :icon="icon"
      aria-hidden="true"
      :variant="variant"
      :scale="scale"
    )
</template>

<script>

export default {
  components: {
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: ''
    },
    scale: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .custom-button
    background transparent
    border  0
    outline 0
    color #fff
</style>
