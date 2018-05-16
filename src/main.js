import Vue from 'vue';
import { Autocomplete } from 'element-ui';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Autocomplete);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
