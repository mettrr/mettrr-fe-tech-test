import Vue from 'vue';
import Router from 'vue-router';
import CountryList from '../components/CountryList.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/country-list',
            name: 'CountryList',
            component: CountryList,
        },
    ],
});
