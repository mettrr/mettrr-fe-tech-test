<template>
    <div class="list-country__container">
        <h3>{{msg}}</h3>  
            <h4>No Fly Country</h4> 
       <div class="md-layout md-gutter">
            
            <div class="md-layout-item">
                <p>Newly Added</p>
                 <ul>
                     <li>Chad</li>
                     <li>North Korea</li>
                     <li>Venezuela</li>
                    
                 </ul>
            </div>
            <div class="md-layout-item">
                <p>Remained</p>
                <ul>
                    <li>Iran</li>
                    <li>Libya</li>
                    <li>Somalia</li>
                    <li>Syria</li>
                    <li>Yemen</li>
                    
                </ul>
            </div>
            <div class="md-layout-item">
                <p>Removed</p>
                <ul>
                    <li>Iraq</li>
                    <li>Sudan</li>
                
                
                </ul>
            </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item">
               
                 
                 
                 
                 
                <md-field>
                    <label for="country">Country</label>
                <md-select  name="country" id="country" placeholder="Select a country" v-if="countries && countries.length">
                    <md-option v-for="country in countries" :key="country.code" v-if="country.code !== 'IR' && 
                        country.code !== 'LY' &&
                        country.code !== 'SO' &&
                        country.code !== 'SY' &&
                        country.code !== 'VE' &&
                        country.code !== 'KP' &&
                        country.code !== 'TD' &&
                        country.code !== 'YE'" :value="country.code">&nbsp;{{country.code}} ||
                        {{country.name}}</md-option>
                    
                </md-select>
                </md-field>
            </div>
        </div>
    </div>
    
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'CountryList',
        data() {
            return {
                msg: 'List country without the "No Fly" countries',
                countries: [],
                countriesNoFly: [],
                errors: [],
            };
        },
        // Fetches countries when the component is created.
        created() {
            axios.get('https://api.myjson.com/bins/16i597')
                .then(response => {
                // JSON responses are automatically parsed.
                    this.countries = response.data;
                })
                .catch(e => {
                    this.errors.push(e);
                });
        },
    };
</script>

<style scoped>



</style>