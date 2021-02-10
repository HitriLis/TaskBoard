<template lang="pug">
  .list-add(
    :class="{active:edit}"
  )
    b-button(
      v-if="!edit"
      block
      variant="outline-dark"
      @click="edit=true"
    )
      | Добавьте еще одну колонку
    .list-add__action(
      v-else
    )
      b-form-input(
        id="input-small"
        size="sm"
        v-model="name"
        @keyup.enter="addList"
        placeholder="Ввести заголовок списка"
      )
      .action
        b-button(
          variant="success"
          @click="addList"
        )
          | Добавить список
        b-button(variant="primary") Primary
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
  data () {
    return {
      edit: false,
      name: ''
    }
  },
  computed: {
  },
  methods: {
    addList () {
      this.edit = false
      const list = {
        id: Date.now(),
        name: this.name,
        task: []
      }
      this.$store.dispatch('addList', list)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .list-add
    align-self self-start
    width 272px
    margin 0 4px
    flex 0 0 auto
    padding 5px
    border-radius 3px
    &.active
      background-color #ebecf0
  .action
    display flex
    justify-content flex-start
    margin-top 5px
</style>
