import Vuex from 'vuex'
import LRU from 'lru-cache'


const store = () => {
  return new Vuex.Store({
    state: {
      showDay: 0,
      cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15 //15min
      }),
      playerSetting: {
        autoplay: false,
        sources: [{
          type: 'video/mp4',
          src: 'http://vjs.zencdn.net/v/oceans.mp4'
        }],
        poster: '/logo.png',
        preload: 'auto',
        fluid: true
      }
    },
    mutations: {
      setPlayerSetting(state,_playerSetting) {
        // console.log(state,_playerSetting);
        state.playerSetting = _playerSetting;
      }
    }
  })
}

export default store
