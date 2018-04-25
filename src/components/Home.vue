<template>
    <div>
        <div class="container">
            <h1>{{ msg }}</h1>
            <img src="../assets/mettrr-logo.png"> 
        </div> 
    </div>
</template>

<script>


export default {
    data() {
        return {
            msg: 'Mettrr Tech Test',
        };
    },
};

</script>

<style lang="scss">
    .container {
        margin-top: 60px;
        width: 100%;
        h1 {
            text-align: center;
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            font-size: 36px;

        }
        img {
            width: 100%;
            max-width: 300px;
            display: block;
            margin: 0px auto;
        }
    }
</style>
