import Vue from 'vue';
import vSelect from 'vue-select';
import App from './App.vue';
import router from './router';

Vue.component('v-select', vSelect);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
