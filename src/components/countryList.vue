<template>
    <div class="country-list-container">
        <!-- <section class="dropdown-simple">
            <select v-model="selected">
                <option disabled value="">Please select a destination</option>
                <option class="tile" :value="country.name" :key="key" v-for="(country,key) in countries">
                    <span>{{ country.name }} - {{ country.code }}</span>
                </option>
            </select>
            <p class="secondary" v-if="selected">Thank you for choosing to fly to {{ selected }}.</p>
        </section>
        <hr> -->
        <section class="dropdown-search">
            <label>Start searching to select your country <small>({{ filterFlyZones.length }} of {{ countries.length }} destinations available)</small></label>
            <multiselect
                :value="selected"
                :options="filterFlyZones"
                :close-on-select="true"
                :clear-on-select="false"
                :custom-label="nameWithCode"
                placeholder="Select one"
                label="name"
                track-by="name"
                @input="updateValueAction">
            </multiselect>
        </section>
        <section class="results">
            <p class="secondary" v-if="!selected"></p>
            <p class="secondary" v-else>Thank you for choosing to fly to {{ selected.name }}.</p>
        </section>
    </div>
</template>


<script>
    import axios from 'axios';
    import Multiselect from 'vue-multiselect';
    import { mapGetters, mapActions, mapState } from 'vuex';

    export default {
        components: {
            Multiselect,
        },

        computed: {
            ...mapState(['countries', 'selected']),
            ...mapGetters(['filterFlyZones']),
        },
        methods: {
            ...mapActions(['updateValueAction']),
            nameWithCode({ name, code }) {
                return `${name} - (${code})`;
            },
        },
    };
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
    .country-list-container {
        display: grid;
        grid-template-columns: 1fr;
        .dropdown-search {
            width: 100%;
            text-align: left;
            .multiselect {
                padding-top: 3px;
            }
        }
    }
    
    @media only screen and (min-width: 768px) {
        .dropdown-search {
            max-width: 600px;
            text-align: left;
        }
    }
</style>