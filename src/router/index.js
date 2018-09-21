import Vue from 'vue';
import Router from 'vue-router';
import CountryListComponent from '../components/country-list/CountryListComponent.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/country-list',
            name: 'Country List',
            component: CountryListComponent,
        },
    ],
});
