import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import CountryList from '../components/CountryList.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/country-list',
            name: 'Country List',
            component: CountryList,
        },
    ],
});
