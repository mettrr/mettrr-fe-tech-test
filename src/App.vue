<template>
    <div id="app">
        <h1>{{msg}}</h1>
        <img id='mettrr__logo' src="./assets/mettrr-logo.png">
         <router-view/>
    </div>
</template>

<script>
import CountryList from './components/country-list/country-list.vue';

export default {
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
  font-family: "Nunito Sans", sans-serif;
  #app {
    margin: 0 auto;
    width: 300px;
    text-align: center;
    #mettrr__logo {
      width: 300px;
      animation: animate-rotate 5s ease-in-out infinite;
    }
  } 
}
@keyframes animate-rotate {
    0% { transform: rotate(0deg) rotateX(0deg);}
    100% { transform: rotate(360deg) rotateX(360deg);}
}
</style>