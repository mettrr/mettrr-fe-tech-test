import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
    countries: [],
    selected: '',
};

const mutations = {
    ADD_COUNTRIES: (state, data) => {
        state.countries = [...state.countries, ...data];
    },
    UPDATE_VALUE(state, value) {
        state.selected = value;
    },
};

const actions = {
    getData: ({ commit }) => {
        axios.get('https://api.myjson.com/bins/16i597')
            .then(response => {
                const data = [...response.data];
                commit('ADD_COUNTRIES', data);
            })
            .catch(e => console.log(e));
    },
    updateValueAction({ commit }, value) {
        commit('UPDATE_VALUE', value);
    },
};

const getters = {
    filterFlyZones: state => state.countries.filter(country => !country.code.match(/^(LY|SO|YE|SY|KP|IQ)$/)),
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});
