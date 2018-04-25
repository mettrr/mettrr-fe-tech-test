<template>
    <div>
        <h1>{{ msg }}</h1>
        <img src="../assets/mettrr-logo.png">
        <nav>
            <ul>
                <li><router-link to="/">About</router-link></li>
                <li><router-link to="/country-list">Go to country list</router-link></li>
            </ul>
        </nav>
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

<style lang="scss" scoped>
    nav {
        display: grid;
        justify-content: center;
        align-items: center;
        ul {
            list-style: none;
            padding: 0;
            li {
                display: inline;
                padding: 0 1rem;
            }
        }
    }
</style>
