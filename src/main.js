import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import vSelect from 'vue-select';
import App from './App.vue';
import router from './router';

Vue.use(VueAxios, axios);
Vue.component('v-select', vSelect);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
