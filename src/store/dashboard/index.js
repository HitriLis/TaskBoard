export default {
  state: {
    board: []
  },
  getters: {},
  mutations: {
    ADD_NEW_BOARD (state, payload) {
      state.board.push(payload)
    },
    DELETE_BOARD (state, id) {
      state.board = state.board.filter(e => e.id !== id)
    }
  },
  actions: {
    deleteBoard ({ commit }, id) {
      commit('DELETE_BOARD', id)
    },
    addBoard ({ commit }, item) {
      commit('ADD_NEW_BOARD', item)
    }
  }
}
