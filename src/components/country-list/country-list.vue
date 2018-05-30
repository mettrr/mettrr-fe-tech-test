<template>
    <div class='countryList__Container'>
        <div class='collapse' v-on:click="dropDown">
            <p>{{ title }}</p>
            <img :class="[collapse ? '--collapse' : '']"
                class='caret__Image' src='../../assets/arrow-64.png' />
        </div>
        <p class='error__Msg' 
            v-if="fetchError">Oops! Error in Fetching country data...</p>
            <ul class='countryList'
                v-if="!fetchError"
                :class="[collapse ? '--collapse-list' : '']">
                <li :class="[collapse ? '--animate' : '']"
                v-for="country in countries" 
                :key="country.code">{{country.name}}</li>
            </ul>
    </div>
    
</template>
<script>

import { getCountry } from './country-list.api';
import { removeNoFly } from './country-list.funcs';

export default {
    name: 'countryList__Container',
    data() {
        return {
            countries: [],
            title: 'Click Me',
            collapse: false,
            fetchError: false,
        };
    },
    created() {
        getCountry()
            .then(countries => {
                this.countries = removeNoFly(countries);
            })
            .catch(error => {
                this.fetchError = true;
            });
    },
    methods: {
        dropDown() {
            this.collapse = !this.collapse;
        },
    },

};
</script>
<style lang="scss">
$border: 1px solid lighten(grey, 40%);

.collapse {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    border: $border;
    color: gray;
    font-weight: 400;
}
.caret__Image {
    height: 20px;
    width: 20px;
    transform: rotate(0deg);
    transition: 0.5s all ease;

    &.--collapse {
        transform: rotate(90deg);
    }
}

ul {
    list-style-type: none; 
    margin: 0;
    padding: 0;
    background: lighten(blue, 50%);
    overflow-y: scroll;
    border: $border;
    height: 0px;
    transition: 0.5s all ease-out;

    &.--collapse-list {
        height: 400px;
        display: block;
    }
}
ul li {
    text-align: left;
    margin: 0.1rem 0;
    padding: 0.7rem;
    font-size: 1rem;
    color: grey;
    font-weight: 200;
    letter-spacing: 0.5px;
    transform: translateY(-40px);
    transition: 0.5s all ease-in;
    border-left: 3px solid grey;
    border-bottom: 1px solid grey;
    &:hover {
        background: linear-gradient(45deg,lighten(grey, 10%), lighten(grey, 60%));  
        color: white; 
        font-weight: 400;
    }
    &.--animate {
        transform: translateY(0);
    }
}
.error__Msg {
    color: lighten(red, 30%);
    font-weight: 400;
    font-size: 1.5rem;
}
</style>