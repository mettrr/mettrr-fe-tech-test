import Vue from 'vue';
// import App from './App.vue';
import MettrrTest from './App.vue';
import router from './router';

/* eslint-disable no-new */
// new Vue({
//     el: '#app',
//     router,
//     render: h => h(App),
// });

new Vue({
    el: '#app',
    router,
    template: '<MettrrTest/>',
    components: { MettrrTest },
});
