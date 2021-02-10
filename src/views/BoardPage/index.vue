<template lang="pug">
  .board(
    v-if="board"
  )
    .board-header.mt-3.mb-3
      h1(
        class="font-weight-bold"
      )
        | {{board.name}}
    .board-content
      .board-list
        List(
          v-if="board.tasklist.length"
          :key="list.id"
          v-for="list in board.tasklist"
          :title="list.name"
        )
        AddList
</template>

<script>
import { mapState } from 'vuex'
import List from '@/components/List'
import AddList from '@/components/AddList'
export default {
  components: {
    List,
    AddList
  },
  computed: {
    ...mapState({
      board: state => state.taskList.board
    })
  },
  mounted () {
    const id = this.$route.params.id
    this.$store.dispatch('getBoard', id)
    if (!this.board) {
      return this.$router.push({ name: 'NotFound' })
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.board
  display flex
  flex-direction column
  height 100%
  &-header
    display flex
    justify-content space-between
  &-content
    position relative
    flex 1 1 0
  &-list
    display flex
    flex-wrap nowrap
    user-select none
    margin-bottom: 8px
    overflow-x auto
    overflow-y hidden
    padding-bottom 8px
    position absolute
    top 0
    right 0
    bottom 0
    left 0
</style>
