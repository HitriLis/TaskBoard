<template lang="pug">
  .list-wrapper
    .list.list-content
      .list-heade
        | {{title}}
</template>

<script>

export default {
  components: {
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.list
  background-color #ebecf0
  border-radius 3px
  box-sizing border-box
  display flex
  flex-direction column
  max-height 100%
  position relative
  white-space normal
  &-wrapper
    width 272px
    margin 0 4px
    height 100%
    box-sizing border-box
    flex 0 0 auto
  &-heade
    flex 0 0 auto
    padding 10px 8px
    position relative
    min-height 20px
</style>
