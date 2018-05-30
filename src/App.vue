<template>
    <div id="app">
        <h1>{{msg}}</h1>
        <img id='mettrr__logo' src="./assets/mettrr-logo.png">
        <CountryList></CountryList>
    </div>
</template>

<script>
import CountryList from './components/country-list/country-list.vue';

export default {
    name: 'MettrrTest',
    components: {
        CountryList,
    },
    data() {
        return {
            msg: 'Mettrr Tech Test',
        };
    },
};
</script>

<style lang="scss">
body {
  font-family: "Nunito Sans", sans-serif;
  #app {
    margin: 0 auto;
    width: 300px;
    text-align: center;
    #mettrr__logo {
      width: 300px;
      animation: animate 5s ease-in-out infinite;
    }
  } 
}
@keyframes animate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>