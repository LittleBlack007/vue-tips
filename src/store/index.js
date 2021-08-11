import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isPlayed: false
    },
    mutations: {
        markVideoPlayed(state){
            // 改变state
            state.isPlayed = true;
            // 设置storage
            window.localStorage.isPlayed = JSON.stringify(true);
        },
        setPlayStatus(state,status){
            state.isPlayed = status;
        }
    },
    actions:{
        loadVideoStatus({commit}){
            //异步处理操作等
            let videoStatus  = JSON.parse(window.localStorage.isPlayed);
            commit('setPlayStates',videoStatus)
        }
    }
})