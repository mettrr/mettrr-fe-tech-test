<template>
    <div>
        <div class="block_select">
            <h1> Country Select </h1>
            <v-select :options="options" xs6></v-select>
        </div>
    </div>
</template>

<script>

import CountryService from '../services/CountryService';

export default {
    data() {
        return {
            contryList: null,
            noFlyList: ['TD', 'KP', 'VE', 'IR', 'LY', 'SO', 'SY', 'YE'],
            options: [],
            selected: null,
        };
    },
    methods: {
        checkNoFlyList(country) {
            let checkFlg;
            if (this.noFlyList.indexOf(country) >= 0) {
                checkFlg = true;
            } else {
                checkFlg = false;
            }
            return checkFlg;
        },
        setSelectData(data) {
            data.forEach((country, index) => {
                if (!this.checkNoFlyList(country.code)) {
                    this.options.push({ id: country.code, label: country.name });
                }
            });
        },
    },
    async mounted() {
        this.contryList = (await CountryService.index()).data;
        console.log(this.contryList);
        this.setSelectData(this.contryList);
    },
};

</script>

<style lang="scss">
    .block_select {
        width: 100%;
        max-width: 400px;
        margin: 120px auto;
        h1 {
            font-size: 36px;
            margin-bottom: 24px;
        }
    }
</style>
