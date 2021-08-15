import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

const store = new VueX.Store({
  state: {
    isPlayed: false
  },
  mutations: {
    markVideoPlayed(state) {
      // 改变state
      state.isPlayed = false;
      // 设置storage
      window.localStorage.isPlayed = JSON.stringify(state.isPlayed);
    },
    setPlayStatus(state, status) {
      state.isPlayed = status;
    }
  },
  actions: {
    loadVideoStatus({ commit }) {
      //异步处理操作等
      let videoStatus = JSON.parse(window.localStorage.isPlayed);
      commit('setPlayStatus', videoStatus)
    }
  }
})

export default store;