import Vuex from 'vuex'
import LRU from 'lru-cache'


const createStore = () => {
  return new Vuex.Store({
    state: {
      showDay: 0,
      cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15 //15min
      })
    }
  })
}

export default createStore
