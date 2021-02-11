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
    },
    DELETE_LIST_ITEM (state, id) {
      state.board.tasklist = state.board.tasklist.filter(e => e.id !== id)
    },
    CREATE_TASK (state, { task, itemId }) {
      state.board.tasklist.map(e => {
        if (e.id === itemId) {
          return e.task.push(task)
        }
      })
    },
    UPDATE_TASK (state, { task, itemId }) {
      state.board.tasklist.map(e => {
        if (e.id === itemId) {
          e.task.map(item => {
            if (item.id === task.id) {
              return Object.assign(item, task)
            }
          })
        }
      })
    },
    DELETE_TASK (state, { task, itemId }) {
      state.board.tasklist.map(e => {
        if (e.id === itemId) {
          e.task = e.task.filter(e => e.id !== task.id)
        }
      })
    }
  },
  actions: {
    getBoard ({ commit, rootState }, id) {
      commit('SET_BOARD', rootState.dashboard.boards.find(e => e.id === id))
    },
    addList ({ commit, state }, item) {
      commit('ADD_LIST', item)
      commit('UPDATE_BOARD_LIST', state.board)
    },
    deleteListItem ({ commit, state }, id) {
      commit('DELETE_LIST_ITEM', id)
      commit('UPDATE_BOARD_LIST', state.board)
    },
    createTask ({ commit }, task) {
      commit('CREATE_TASK', task)
    },
    updateTask ({ commit }, task) {
      commit('UPDATE_TASK', task)
    },
    deleteTask ({ commit }, task) {
      commit('DELETE_TASK', task)
    }
  }
}
