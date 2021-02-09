<template lang="pug">
  div
    b-card(
      bg-variant="dark"
      text-variant="white"
      class="text-center"
      header-tag="header"
    )
      template(#header)
        .card-action-header
          button.colse(
            @click="deleteBoard"
          )
            b-icon(icon="x-circle" aria-hidden="true" )
      router-link(
        :to="{ name: 'boards', params: {id: board.id}}"
      )
        | {{board.title}}
      b-card-text  {{board.title}}
</template>

<script>
export default {
  props: {
    board: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    deleteBoard () {
      this.$store.dispatch('deleteBoard', this.board.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.card-action-header
  display flex
  justify-content flex-end
.colse
  background transparent
  border  0
  outline 0
  color #fff
</style>
