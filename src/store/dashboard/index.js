export default {
  state: {
    board: []
  },
  getters: {},
  mutations: {
    addBoard (state, payload) {
      state.board.push(payload)
    },
    deleteBoard (state, payload) {
      state.board.push(payload)
    }
  },
  actions: {}
}
