<template>
    <div id="app">
        <div class="dropdown">
            <div class="dropdown__title">
                List of Countries
                <i class="dropdown__icon fas fa-chevron-circle-down"></i>
            </div>
            <ul class="dropdown__list">
                <li v-for="(country) in countries"
                class="dropdown__item">
                    {{ country.name }}
                </li>
            </ul>
        </div>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'CountryList',
        data() {
            return {
                countries: [],
                // The following no fly list is based on this article, found by literally google searching "country no fly list" https://www.politico.com/interactives/2017/trump-travel-ban-country-list-map/ In a real world scenario, I would request a no fly list or, better yet, an endpoint to a no fly list.
                noFlyList: [
                    'TD',
                    'KP',
                    'VE',
                    'IR',
                    'LY',
                    'SO',
                    'SY',
                    'YE',
                ],
                countriesEndPoint: 'https://api.myjson.com/bins/16i597',
            };
        },
        created() {
            axios.get(this.countriesEndPoint)
                .then((r) => {
                    for (let i = 0; i < r.data.length; i += 1) {
                        if (!this.noFlyList.includes(r.data[i].code)) {
                            this.countries.push(r.data[i]);
                        }
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    };
</script>

<style lang="scss">
    body {
        font-family: 'Nunito Sans', sans-serif;

        #app {
            margin: 0 auto;
            width: 300px;
        }
    }

    .dropdown {
        box-sizing: border-box;
        padding: .75em;
        background-color: #b4ffaa;
        border: 1px solid;
        position: relative;
        cursor: default;

        &:hover {
            .dropdown {
                &__list {
                    max-height: 300px;
                    overflow: scroll;
                }

                &__icon {
                    transform: rotate(0deg);
                }
            }
        }

        &__title {
            font-weight: bold;
            font-size: 1.25em;
        }

        &__icon {
            float: right;
            transform: rotate(-90deg);
            transition: transform .3s;
        }

        &__list {
            position: absolute;
            top: 48px;
            left: 0;
            box-sizing: border-box;
            max-height: 0;
            list-style: none;
            border: 1px solid;
            overflow: hidden;
            margin: 0;
            padding: 0;
            transition: visibility 0s, max-height .3s ease-in;
        }

        &__item {
            padding: 1em;
            margin: 0 1em;
            border-bottom: 1px solid #cecece;
        }
    }
</style>