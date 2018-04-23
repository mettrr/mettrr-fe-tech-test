<template>
    <div id="app"></div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'CountryList',
        data() {
            return {
                countries: [],
                // The following no fly list is based on this article, found by literally google searching "country no fly list" https://www.politico.com/interactives/2017/trump-travel-ban-country-list-map/ In a real world scenario, I would request a no fly list or, better yet, an endpoint to a no fly list.
                noFlyList: [
                    'TD',
                    'KP',
                    'VE',
                    'IR',
                    'LY',
                    'SO',
                    'SY',
                    'YE',
                ],
                countriesEndPoint: 'https://api.myjson.com/bins/16i597',
            };
        },
        created() {
            axios.get(this.countriesEndPoint)
                .then((r) => {
                    this.countries = r.data;

                    console.log(this.countries);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    };
</script>