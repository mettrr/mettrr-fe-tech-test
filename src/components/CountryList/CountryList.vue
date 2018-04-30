<template>
    <div>
        <h2>Country List</h2>
        <router-link to="/">Home</router-link>
        <div v-if="!hasError" class="panel-container">

            <div class="dropdown">
                <div class="dropdown-selected-item" 
                    v-on:click="toggleDropdownList">
                    <p v-if="selectedListItem">{{ selectedListItem.name }}</p>
                    <div v-if="isLoading" class="lds-dual-ring"></div>
                </div>
                <ul class="dropdown-list"
                    v-bind:class="{active: dropdownListIsActive}">
                    <li v-for="(country, index) in countryList" 
                        :key="`fruit=${index}`"
                        v-on:click="setSelectedListItem(country)">
                        {{ country.name }}
                    </li>
                </ul>
            </div>
            <h3 v-if="selectedListItem">You selected {{selectedListItem.name}}</h3>

        </div>
        <div v-else class="panel-container">

            Uh oh an error occured.
            {{errorMessage}}
            <button v-on:click="getCountryItems()">Retry?</button>

        </div>
    </div>
</template>

<script>
import getCountryListExceptNoFlyList from '../../data/getCountryListExceptNoFlyList';

export default {
    data() {
        return {
            countryList: [],
            selectedListItem: false,
            dropdownListIsActive: false,
            isLoading: true,
            hasError: false,
            errorMessage: '',
        };
    },
    mounted() {
        this.getCountryItems();
    },
    methods: {
        toggleDropdownList() {
            this.dropdownListIsActive = !this.dropdownListIsActive;
        },
        setSelectedListItem(country) {
            this.selectedListItem = country;
            this.dropdownListIsActive = false;
        },
        getCountryItems() {
            const self = this;

            // Reset feedback indicators
            self.isLoading = true;
            self.hasError = false;
            self.errorMessage = '';

            getCountryListExceptNoFlyList().then((list) => {
                self.isLoading = false;
                self.countryList = list;
                [self.selectedListItem = 0] = list;
            }).catch((err) => {
                self.isLoading = false;
                self.hasError = true;
                self.errorMessage = err.message;
            });
        },
    },
};
</script>

<style lang="scss">
    .panel-container {
        margin: 15px 0;
    }

    .dropdown {
        position: relative;
        margin-top: 15px;

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
            background-color: #fff;

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

            &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                background-color: #F5F5F5;
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

    .lds-dual-ring {
        display: inline-block;
        width: 20px;
        height: 20px;
    }

    .lds-dual-ring:after {
    content: " ";
        display: block;
        width: 12px;
        height: 12px;
        margin: 1px;
        border-radius: 50%;
        border: 5px solid rgba(117, 81, 255, 0.7);
        border-color: rgba(117, 81, 255, 0.7) transparent rgba(117, 81, 255, 0.7) transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>