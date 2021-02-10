export default {
  state: {
    board: null
  },
  getters: {},
  mutations: {
    SET_BOARD (state, payload) {
      state.board = payload
    },
    ADD_LIST (state, payload) {
      state.board.tasklist.push(payload)
    }
  },
  actions: {
    getBoard ({ commit, rootState }, id) {
      commit('SET_BOARD', rootState.dashboard.boards.find(e => e.id === id))
    },
    addList ({ commit, state }, item) {
      commit('ADD_LIST', item)
      commit('UPDATE_BOARD_LIST', state.board)
    }
  }
}
