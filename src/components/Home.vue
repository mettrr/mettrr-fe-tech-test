<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <p><a href="https://en.wikipedia.org/wiki/No_Fly_List" target="_blank">{{ desc }}</a></p>
        <img src="../assets/intro.jpg">
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                msg: 'Is there any "no fly list"?',
                desc: 'https://en.wikipedia.org/wiki/No_Fly_List',
            };
        },
    };
</script>

<!-- Add scoped attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home{
    img {
        width: 400px !important;
    }


    a {
        color: #000;
    }
}

</style>