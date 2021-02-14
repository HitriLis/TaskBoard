<template lang="pug">
div
  b-modal(
    id="add-new-board"
    title="Новая Доска"
    hide-footer
    ref="newboard"
  )
    b-form-group(
      label="Название доски:"
      label-for="board-name"
    )
      b-form-input(
        id="board-name"
        v-model="name"
        placeholder="Придумайте название"
      )
    .action-modal
      b-button(
        class="mt-3"
        variant="danger"
        @click="hideModal"
      )
        | Отмена
      b-button(
        class="mt-3 ml-3"
        variant="success"
        @click="toggleModal"
        :disabled="!name"
      )
        | Сохранить
</template>

<script>

export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    hideModal () {
      this.$refs.newboard.hide()
      this.name = ''
    },
    toggleModal () {
      const board = {
        id: Date.now(),
        name: this.name,
        tasklist: []
      }
      this.$store.dispatch('addBoard', board)
      this.$refs.newboard.hide()
      this.name = ''
    }
  }
}
</script>

<style lang="stylus">
.action-modal
  display flex
  justify-content flex-end
</style>
