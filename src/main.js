import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import CountryList from './components/CountryList/CountryList.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: App },
    { path: '/country-list', component: CountryList },
];

const router = new VueRouter({
    routes,
});

/* eslint-disable no-new */
new Vue({
    router,
}).$mount('#app');
