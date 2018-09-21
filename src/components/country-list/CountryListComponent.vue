<template>
    <div>
      <label>Select a country</label>
      <br><br>
      <select v-model="selectedCountry" class="form-control">
          <option selected disabled value="disabled">Country...</option>
          <option v-for="country in countries" v-bind:value="country.code" v-bind:key="country.code">
            {{ country.name }} ({{ country.code }})
          </option>
        </select>
    </div> 
</template>

<script>
import axios from 'axios';

export default {
    name: 'CountryListComponent',
    data() {
        return {
            countries: [],
            noFlyList: ['VE', 'SY', 'IR', 'SO', 'KR', 'YE'], // Those are the countries banned from the US
            selectedCountry: '',
            errors: [],
        };
    },
    methods: {
        getCountries() {
            const that = this;
            const apiUrl = 'https://api.myjson.com/bins/16i597';
            axios.get(apiUrl) // Getting values from the API with a GET method
                .then(response => {
                    console.log('response open', response);
                    response.data.forEach(element => {
                        if (!this.noFlyList.includes(element.code)) { // Needed to exclude the countries banned from the US
                            that.countries.push(element);
                        }
                    });
                })
                .catch(e => {
                    this.errors.push(e);
                });
        },
    },
    created() {
        this.getCountries(); // Getting counties from the API
    },
};
</script>

<style lang="scss">
    select {
        border: 1px solid #7550ff;
        height: 30px;
        outline: none;
    }
</style>