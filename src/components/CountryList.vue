<template>
    <h1>Country List</h1>
</template>

<script>
import axios from '../api';

export default {
    name: 'CountryList',
    data() {
        return {
            countryList: [],
        };
    },
    created() {
        axios.get('/16i597')
            .then((data) => {

            })
            .catch((err) => {

            });
    },
};
</script>

<style>

</style>
