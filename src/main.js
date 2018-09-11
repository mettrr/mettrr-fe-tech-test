import Vue from 'vue';
import VueMaterial from '../node_modules/vue-material/dist/vue-material';
import '../node_modules/vue-material/dist/vue-material.min.css';
// Importing component called App
import App from './App.vue';
// Import the router setup
import router from './router';
// The next line tells Vue whether or not to show tips,
// and warnings in the developer console of your browser
Vue.config.productionTip = false;


Vue.use(VueMaterial);
/* eslint-disable no-new */
// New Vue instance created and mounted to the #app div in index.html
// then instantiated the App component
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
