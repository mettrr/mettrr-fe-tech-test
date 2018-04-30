<template>
    <div>
        <h2>Country List</h2>
        <router-link to="/">Home</router-link>
        <ol>
            <li v-for="country in countryList">
                {{ country.name }}
            </li>
        </ol>
    </div>
</template>

<script>
import getCountryList from '../data/getCountryList';

export default {
    data() {
        return {
            countryList: [],
        };
    },
    mounted() {
        const self = this;
        getCountryList().then((res) => {
            self.countryList = res.data;
        }).catch((err) => {

        });
    },
};
</script>

<style lang="sass" scoped>

</style>