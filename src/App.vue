<template>
    <div id="app">
        <!-- <app-header />
        <h1>{{ msg }}</h1>
        <img src="./assets/mettrr-logo.png">
        <router-view/> -->
        <v-app>
            <main>
                <v-container fluid>
                    <app-header></app-header>
                    <router-view/>
                </v-container>
            </main>
        </v-app>
    </div>

</template>

<script>
import Header from './components/Header.vue';

export default {
    components: {
        appHeader: Header,
    },
    name: 'MettrrTest',
    data() {
        return {
            msg: 'Mettrr Tech Test',
        };
    },
};
</script>

<style lang="scss">
    body {
        font-family: 'Nunito Sans', sans-serif;
        #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        }
    }
</style>
