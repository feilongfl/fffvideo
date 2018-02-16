import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      showDay: 0
    },
    mutations: {
      increment(state, val) {
        console.log(val);
        state.showDay++
      }
    }
  })
}

export default createStore
