import Vue from 'vue';
import Router from 'vue-router';
import CountryList from '../components/CountryList.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/countryList',
            name: 'CountryList',
            component: CountryList,
        },
    ],
});
