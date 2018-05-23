<template>
    <v-select :options="countries"></v-select>
</template>

<script>
export default {
    name: 'countryList',
    data() {
        return {
            countries: [],
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
            .catch(err => console.log(err));
    },
};
</script>

<style lang="scss" scoped>

</style>
