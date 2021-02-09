<template lang="pug">
div
  b-container(
    class="d-flex justify-content-between mt-3"
  )
    h1(
      class="font-weight-bold"
    )
      | Персональные доски
    b-button(
      v-b-modal.add-new-board
      variant="primary"
      size="lg"
      @click="hideModal"
    )
      | Новая Доска
      b-icon(
        icon="plus-circle"
        class="ml-3"
      )
  b-card-group(
    deck
    v-if="boards.length"
  )
    b-container
      b-row
        b-col(
          v-for="board in boards"
          :key="board.id"
          cols="4"
          class="mt-3"
        )
          CardBoard(
            :board="board"
          )
  b-container(
    v-else
    class="d-flex justify-content-center mt-3"
  )
    h2(
      class="font-weight-bold"
    )
      | Персональные доски
  AddBoardModal
</template>

<script>
import AddBoardModal from '@/components/Modal/AddBoardModal'
import CardBoard from '@/components/Card/CardBoard'
import { mapState } from 'vuex'
export default {
  components: {
    AddBoardModal,
    CardBoard
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
