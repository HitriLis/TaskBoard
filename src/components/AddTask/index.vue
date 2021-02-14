<template lang="pug">
  .task-add
    b-button(
      v-if="!edit"
      block
      variant="outline-dark"
      @click="edit=true"
    )
      | {{existItem ? 'Добавить еще карточку' : 'Добавить карточку'}}
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
        ButtonVariant(
          @click="close"
          :icon="'x-circle'"
          :variant="'danger'"
          :scale="2"
        )
</template>

<script>
import ButtonVariant from '@/components/ButtonVariant'
export default {
  components: {
    ButtonVariant
  },
  props: {
    existItem: {
      type: Boolean,
      default: false
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
      this.name = ''
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
