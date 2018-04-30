<template>
    <div>
        <h2>Country List</h2>
        <router-link to="/">Home</router-link>
        <div class="dropdown">
            <div class="dropdown-selected-item" 
                v-on:click="toggleDropdownList"
            >
                <p v-if="selectedListItem">{{ selectedListItem.name }}</p>
            </div>
            <ul class="dropdown-list"
                v-bind:class="{active: dropdownListIsActive}"
            >
                <li v-for="(country, index) in countryList" 
                    :key="`fruit=${index}`"
                    v-on:click="setSelectedListItem(country)">
                    {{ country.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import getCountryListExceptNoFlyList from '../data/getCountryListExceptNoFlyList';

export default {
    data() {
        return {
            countryList: [],
            selectedListItem: false,
            dropdownListIsActive: false,
            hasError: false,
            errorMessage: '',
        };
    },
    mounted() {
        const self = this;
        getCountryListExceptNoFlyList().then((list) => {
            self.countryList = list;
            [self.selectedListItem = 0] = list;
        }).catch((err) => {
            self.hasError = true;
            self.errorMessage = err.message;
        });
    },
    methods: {
        toggleDropdownList() {
            this.dropdownListIsActive = !this.dropdownListIsActive;
        },
        setSelectedListItem(country) {
            this.selectedListItem = country;
            this.dropdownListIsActive = false;
        },
    },
};
</script>

<style lang="scss">
    .dropdown {
        position: relative;
        margin-top: 5px;

        .dropdown-selected-item {
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0,0,0,.15);
            padding: 1px 0;
            border-radius: 4px;

            p {
                margin: 3px 0;
            }
        }

        .dropdown-list {
            margin: 0;
            padding: 0;
            list-style: none;
            display: none;
            position: absolute;
            top: 130%;
            box-shadow: 0 2px 8px rgba(0,0,0,.15);
            border-radius: 4px;

            &.active {
                display: block;
                max-height: 200px;
                overflow-y: scroll;
            }

            &::-webkit-scrollbar {
                width: 6px;
                background-color: #F5F5F5;
            }

            &::-webkit-scrollbar-thumb {
                background-color: #000000;
            }

            li {
                padding: 6px 0;
                cursor: pointer;

                &:hover {
                    background-color: #F5F5F5;
                }
            }
        }   
    }
</style>