<template>
    <auto-complete v-if="countryData.length > 0" :suggestions="allowedCountryList" v-model="selection" />
</template>

<script>
    import { HTTP } from '../plugins/axios';
    import NO_FLY_LIST from '../assets/noFlyList.json';
    import AutoComplete from '../components/BasicComponents/AutoComplete.vue';

    export default {
        name: 'CountryList',
        components: { AutoComplete },
        data() {
            return {
                selection: '',
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

