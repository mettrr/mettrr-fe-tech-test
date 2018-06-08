<!--
Technically, I didn't use a select, I used a text input field, that behaves like a select.

My solution to the poor UX of having a giant search was to add filtering as you type.
I could have then introduced lazy-loading of search results, to only load when scrolled down further.

In the spirit of this challenge, I didn't want to just find a vue library capable of doing it

in a real environment I would have used a pre-built component.

I was really tempted to install Vuetify because I think it's form elements are well designed.

-->

<template>
    <auto-complete :suggestions="allowedCountryList" v-model="selection" />
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
                endpoint: '/bins/16i597',
                selection: '',
                countryData: [],
            };
        },
        created() {
            HTTP
                .get(this.endpoint)
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

