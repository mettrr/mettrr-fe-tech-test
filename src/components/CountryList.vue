<template>
    <div class="country-list">
        <h1>Country List</h1>

        <div class="country-list--container">
            <LoadingSpinner
                :loading="loading"
            />
            <DropDown
                :countries="filteredCountries"
            />
        </div>
    </div>
</template>

<script>
import LoadingSpinner from './LoadingSpinner.vue';
import DropDown from './DropDown.vue';
import axios from '../api';
import noFlyList from '../lib/noFlyList';

export default {
    name: 'CountryList',
    components: {
        LoadingSpinner,
        DropDown,
    },
    data() {
        return {
            countryList: [],
            loading: false,
        };
    },
    created() {
        this.getCountryList();
    },
    methods: {
        getCountryList() {
            this.loading = true;
            axios.get('/16i597')
                .then((res) => {
                    this.countryList = res.data;
                })
                .catch((err) => {
                    console.log(err, err.stack);
                })
                .then(() => {
                    this.loading = false;
                });
        },
    },
    computed: {
        filteredCountries() {
            return this.countryList
                .filter(({ name }) => !noFlyList.includes(name));
        },
    },
};
</script>

<style lang="scss" scoped>
.country-list--container {
    position: relative;
    min-height: 300px;
}
</style>
