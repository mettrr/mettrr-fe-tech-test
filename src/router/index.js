import Vue from 'vue';
import Router from 'vue-router';
import CountryList from '../components/country-list/country-list.vue';
import App from '../App.vue';

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'entry',
            component: null,
        },
        {
            path: '/country-list',
            name: 'countrylist',
            component: CountryList,
        },
    ],
});
