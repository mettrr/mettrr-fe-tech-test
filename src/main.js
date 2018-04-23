import Vue from 'vue';
import App from './App.vue';
import CountryList from './CountryList.vue';

const routes = {
    '/': App,
    '/country-list': CountryList,
};

/* eslint-disable no-new */
new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname,
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || App;
        },
    },
    render(h) { return h(this.ViewComponent); },
});
