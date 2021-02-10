export default {
  state: {
    boards: []
  },
  getters: {},
  mutations: {
    ADD_NEW_BOARD (state, payload) {
      state.boards.push(payload)
    },
    DELETE_BOARD (state, id) {
      state.boards = state.boards.filter(e => e.id !== id)
    },
    UPDATE_BOARD (state, { id, name }) {
      state.boards.map(e => {
        if (e.id === id) {
          return Object.assign(e, { name })
        }
      })
    },
    UPDATE_BOARD_LIST (state, payload) {
      state.boards.map(e => {
        if (e.id === payload.id) {
          return Object.assign(e, payload)
        }
      })
      console.log(state)
    }
  },
  actions: {
    deleteBoard ({ commit }, id) {
      commit('DELETE_BOARD', id)
    },
    addBoard ({ commit }, item) {
      commit('ADD_NEW_BOARD', item)
    },
    updateBoard ({ commit }, payload) {
      commit('UPDATE_BOARD', payload)
    }
  }
}
