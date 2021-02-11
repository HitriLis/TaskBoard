<template lang="pug">
  .list-wrapper
    .list.list-content
      .list-heade
        | {{item.name}}
        ButtonVariant(
          @click="deleteList"
          :icon="'x-circle'"
          :variant="'danger'"
        )
      .list-cards
        draggable(
          v-model="item.task" group="people" @start="drag=true" @end="drag=false"
        )
          CardTask(
            v-for="item in item.task"
            :key="item.id"
            :task="item"
            @update="updateTask(item, $event)"
            @deleteTask="deleteTask"
          )
        AddTask(
          @addTask="createTask"
        )
</template>

<script>
import draggable from 'vuedraggable'
import ButtonVariant from '@/components/ButtonVariant'
import AddTask from '@/components/AddTask'
import CardTask from '@/components/Card/CardTask'
export default {
  components: {
    ButtonVariant,
    AddTask,
    CardTask,
    draggable
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
  },
  methods: {
    deleteList () {
      this.$store.dispatch('deleteListItem', this.item.id)
    },
    createTask (v) {
      const task = {
        id: Date.now(),
        name: v,
        complet: false
      }
      this.$store.dispatch('createTask', { task, itemId: this.item.id })
    },
    updateTask (item, e) {
      this.$store.dispatch('updateTask', { task: Object.assign(item, { complet: e }), itemId: this.item.id })
    },
    deleteTask (task) {
      this.$store.dispatch('deleteTask', { task, itemId: this.item.id })
    }
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
    display flex
    justify-content space-between
    flex 0 0 auto
    padding 10px 8px
    position relative
    min-height 20px
  &-cards
    margin 0 4px
    padding 0 4px
</style>
