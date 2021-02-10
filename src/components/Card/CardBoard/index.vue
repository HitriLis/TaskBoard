<template lang="pug">
  div
    b-card(
      bg-variant="dark"
      text-variant="white"
      class="text-center"
      header-tag="header"
      no-body
    )
      template(#header)
        .card-action-header
          .card-title
            | {{board.name}}
          .card-action
            button.edit(
              @click="edit = !edit"
            )
              b-icon(
                icon="pencil-fill"
                aria-hidden="true"
                :variant="edit ? 'danger': ''"
              )
            button.colse(
              @click="deleteBoard"
            )
              b-icon(
                icon="x-circle"
                aria-hidden="true"
              )
      b-card-body(
        class="card-content"
      )
        b-row(
          class="my-1"
          v-if="edit"
        )
          b-col(sm="10")
            b-form-input(
              id="input-small"
              size="sm"
              v-model="rename"
              @keypres.enter="updateBoard"
            )
          b-col(sm="2")
            button.edit(
              @click="updateBoard"
            )
              b-icon(
                icon="check"
                aria-hidden="true"
                variant="success"
                scale="2"
              )
        b-list-group(
          v-else
        )
          b-list-group-item(
            class="d-flex justify-content-between align-items-center custom-item"
          )
            | Всего колонок
            b-badge(
              variant="primary"
              pill
            )
              | {{board.tasklist.length}}
        router-link(
          v-if="!edit"
          :to="{ name: 'boards', params: {id: board.id}}"
          class="cover-link"
        )
</template>

<script>
export default {
  props: {
    board: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      edit: false,
      name: ''
    }
  },
  computed: {
    rename: {
      get () {
        return this.board.name
      },
      set (v) {
        this.name = v
      }
    }
  },
  methods: {
    deleteBoard () {
      this.$store.dispatch('deleteBoard', this.board.id)
    },
    updateBoard () {
      const id = this.board.id
      const name = this.name
      this.$store.dispatch('updateBoard', { id, name })
      this.edit = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.card-action-header
  display flex
  justify-content space-between
.colse
.edit
  background transparent
  border  0
  outline 0
  color #fff
.card-content
  position relative
.custom-item
  background transparent
  border-color #fff
.card
  &-action
    flex 0 0 auto
  &-title
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
</style>
