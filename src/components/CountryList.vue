<template>
    <h1>Test</h1>
</template>

<script>
    import { HTTP } from '../plugins/axios';
    import NO_FLY_LIST from '../assets/noFlyList.json';

    export default {
        name: 'CountryList',
        data() {
            return {
                name: 'asdf',
                countryData: [],
            };
        },
        created() {
            HTTP
                .get('/bins/16i597')
                .then((response) => {
                    this.countryData = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        computed: {
            allowedCountryList() {
                return this.countryData
                    .filter((country) => !NO_FLY_LIST.includes(country.name))
                    .map(item => item);
            },
        },
    };
</script>

