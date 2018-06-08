<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <img src="./assets/mettrr-logo.png">
        <router-view></router-view>
    </div>
</template>

<script>
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
  font-family: 'Nunito Sans', sans-serif;
  #app {
    margin: 0 auto;
    width: 300px;
    text-align: center;
    img {
      width: 300px;
    }
  }
}
</style>
