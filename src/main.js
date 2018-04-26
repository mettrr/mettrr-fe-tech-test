import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import vSelect from 'vue-select';
import App from './App.vue';
import router from './router';
import store from './store/store';

Vue.use(Vuetify);
Vue.component('v-select', vSelect);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
