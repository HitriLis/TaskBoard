<template lang="pug">
  .home-page
    b-list-group(horizontal)
      b-list-group-item(
        class="item"
      )
        | Всего досок
        b-badge(
          class="item-badge"
          variant="primary"
          pill
        )
          | {{boards.length}}
      b-list-group-item(
        class="item"
      )
        | Всего колонок
        b-badge(
          class="item-badge"
          variant="primary"
          pill
        )
          | {{taskListCount}}
      b-list-group-item(
        class="item"
      )
        | Всего задач
        b-badge(
          class="item-badge"
          variant="primary"
          pill
        )
          | {{taskCount}}
      b-list-group-item(
        class="item"
      )
        | Всего завершенных задач
        b-badge(
          class="item-badge"
          variant="primary"
          pill
        )
          | {{taskCountComplet}}
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      boards: state => state.dashboard.boards
    }),
    taskListCount () {
      return this.boards.reduce((sum, current) => {
        return sum + current.tasklist.length
      }, 0)
    },
    taskCount () {
      return this.boards.reduce((sum, current) => {
        return sum + current.tasklist.reduce((sum, item) => { return sum + item.task.length }, 0)
      }, 0)
    },
    taskCountComplet () {
      return this.boards.reduce((sum, current) => {
        return sum + current.tasklist.reduce((sum, item) => { return sum + item.task.filter(e => e.complet).length }, 0)
      }, 0)
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-page
  display flex
  justify-content center
  margin-top 30px
.item
  &-badge
    margin-left 50px
</style>
