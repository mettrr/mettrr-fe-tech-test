<template>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import countryList from './components/countryList.vue';
    import appHeader from './components/appHeader.vue';
    import introText from './components/introText.vue';
    

    export default {
        components: {
            'app-header': appHeader,
            'country-list': countryList,
            'intro-text': introText,
        },

        name: 'MettrrTest',

        mounted() {
            this.$store.dispatch('getData');
        },

        data() {
            return {
                msg: 'Mettrr Tech Test',
            };
        },

    };
</script>

<style lang="scss">
    $primaryColor: #333;
    $secondaryColor: #808080;
    body {
        font-family: 'Nunito Sans', sans-serif;
        font-size: 1rem;
        color: $primaryColor;
        #app {
            position: relative;
            display: grid;
            margin: 0 auto;
            text-align: center;
            padding: 2rem;
            img {
                width: 300px;
                margin: auto;
            }
            section {
                margin: 2rem auto;
            }
            .secondary {
                color: $secondaryColor;
            }
            label {
                font-size: 1rem;
            }
        }
    }
</style>
