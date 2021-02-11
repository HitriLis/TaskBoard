<template lang="pug">
  .task-card
    .task-card-header
      ButtonVariant(
        @click="$emit('deleteTask', task)"
        :icon="'x-circle'"
        :variant="'danger'"
      )
    .task-card-content
      .task-content
        .task-content__name
          | {{task.name}}
        b-form-checkbox(
          :checked="task.complet"
          @change="$emit('update', $event)"
        )
</template>

<script>
import ButtonVariant from '@/components/ButtonVariant'
export default {
  components: {
    ButtonVariant
  },
  props: {
    task: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="stylus" scoped>
.task-card
  background-color #fff
  border-radius 3px
  margin-bottom 8px
  max-width 300px
  min-height 20px
  position relative
  &-header
    display flex
    justify-content flex-end
    padding 5px
.task-content
  display flex
  justify-content space-between
  padding: 5px 10px;
  &__name
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
</style>
