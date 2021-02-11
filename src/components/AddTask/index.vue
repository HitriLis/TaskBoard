<template lang="pug">
  .task-add
    b-button(
      v-if="!edit"
      block
      variant="outline-dark"
      @click="edit=true"
    )
      | Добавить карточку
    .task-add__action(
      v-else
    )
      b-form-input(
        size="sm"
        v-model="name"
        @keyup.enter="addList"
        placeholder="Ввести заголовок карточки"
      )
      .action
        b-button(
          variant="success"
          class="mr-2"
          @click="addTask"
        )
          | Добавить карточку
        b-button(
          variant="primary"
          @click="close"
        )
          | Закрыть
</template>

<script>
import ButtonVariant from '@/components/ButtonVariant'

export default {
  components: {
    ButtonVariant
  },
  props: {
    item: {
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
    close () {
      this.edit = false
    },
    addTask () {
      this.$emit('addTask', this.name)
      this.close()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .task-add
    padding 5px
    &__action
      .action
        display flex
        justify-content flex-start
        margin-top 8px
</style>
