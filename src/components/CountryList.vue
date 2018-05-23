<template>
    <div class="countryList">
        <v-select :options="countries"></v-select>
        <p class="countryList__error" v-if="countriesError">Oops, something went wrong... please try again later!</p>
    </div>
</template>

<script>
export default {
    name: 'countryList',
    data() {
        return {
            countries: [],
            countriesError: false,
        };
    },
    created() {
        this.$http
            .get('https://api.myjson.com/bins/16i597')
            .then((resp) => {
                const countries = resp.data;
                const noFlyList = ['SY', 'IR', 'YE', 'SO', 'SD', 'LY'];
                countries.forEach((country) => {
                    if (!noFlyList.includes(country.code)) {
                        this.countries.push({ label: country.name, value: country.code });
                    }
                });
            })
            .catch((err) => {
                console.log(err);
                this.countriesError = true;
            });
    },
};
</script>

<style lang="scss" scoped>
    .countryList {
        &__error {
            font-weight: bold;
            color: #c63a45;
        }
    }
</style>
