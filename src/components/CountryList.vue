<template>
    <section>
        <h2>Country list</h2>

        <p v-if="error">
            <strong>Error loading countries:</strong>
            {{ error }}
        </p>

        <el-autocomplete
            v-else
            value-key="name"
            v-model="country"
            placeholder="Search for a country..."
            :fetch-suggestions="search"
        />
    </section>
</template>

<script>
import axios from 'axios';

const API_URL = 'https://api.myjson.com/bins/16i597';

// https://www.usatoday.com/story/news/world/2017/09/25/trumps-new-travel-ban-applies-eight-countries-heres-why/699962001/
const NO_FLY_LIST = [
    'TD',
    'IR',
    'LY',
    'KP',
    'SO',
    'SY',
    'VE',
    'YE',
];

export default {
    data() {
        return {
            country: '',
            countries: [],
            error: '',
        };
    },
    mounted() {
        this.getCountries();
    },
    methods: {
        async getCountries() {
            try {
                const { data } = await axios.get(API_URL);
                this.countries = data.filter(country => !NO_FLY_LIST.includes(country.code));
            } catch (e) {
                this.error = e.message;
            }
        },
        search(query, results) {
            results(query ? this.countries.filter(country =>
                country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) : this.countries);
        },
    },
};
</script>
