/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);
Axios.defaults.baseURL = 'https://fe-task.getsandbox.com/';

export default new Vuex.Store({
  state: {
    initialData: 'start this shit now',
    performanceData: '',
  },
  getters: {
    performanceData: (state) => state.performanceData,
  },
  mutations: {
    setPerformanceData(state, payload) {
      state.performanceData = payload;
    },
  },
  actions: {
    getPerformanceData({ commit }) {
      return new Promise((resolve, reject) => {
        Axios.get('performance')
          .then(res => {
            commit('setPerformanceData', res.data);
            resolve(res);
          }).catch(err => {
            reject(err);
          });
      });
    },
  },
});
/* eslint-disable */