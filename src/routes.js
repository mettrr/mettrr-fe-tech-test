import introText from './components/introText.vue';
import countryList from './components/countryList.vue';

export default [
    { path: '/', component: introText },
    { path: '/country-list', component: countryList },
];
