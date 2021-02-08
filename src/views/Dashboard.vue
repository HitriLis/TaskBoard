<template lang="pug">
div
  b-button(
    v-b-modal.add-new-board
    variant="primary"
    size="lg"
    @click="hideModal"
  )
    | Новая Доска
    b-icon(
      icon="plus"
    )
  .content(
    v-if="boards.length"
    v-for="board in boards"
  )
    router-link(
      :to="{ name: 'boards', params: {id: board.id}}"
    )
      | {{board.title}}
  AddBoardModal
</template>

<script>
import AddBoardModal from '@/components/Modal/AddBoardModal'
import { mapState } from 'vuex'
export default {
  components: {
    AddBoardModal
  },
  computed: {
    ...mapState({
      boards: state => state.dashboard.board
    })
  },
  methods: {
    hideModal () {
      console.log('this.board')
    }
  }
}
</script>
