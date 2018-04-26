import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        countryList: null,
    },
    getters: {
        getCountryList(state) {
            return state.countryList;
        },
    },
    mutations: {
        setCountryList(state, countryList) {
            this.state.countryList = countryList;
        },
    },
    actions: {
        setCountryList({ commit }, countryList) {
            commit('setCountryList', countryList);
        },
    },
});
