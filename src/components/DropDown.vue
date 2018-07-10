<template>
    <div class="dropdown">
        <input
            class="dropdown-input"
            type="text"
            placeholder="Search for a country"
            v-model="searchQuery"
        >
        <div
            class="dropdown-results"
        >
            <div
                class="dropdown-selected"
            >
                <div class="dropdown-title">Selected: </div>
                <div
                    class="dropdown-result selected"
                    v-if="!!selected.code"
                    :title="`[${selected.code}] ${selected.name}`"
                    :key="selected.code"  
                    @click="toggleSelectCountry(selected)"  
                >
                    <span class="dropdown-result_code">[{{ selected.code }}] </span>
                    <span class="dropdown-result_name">{{ selected.name }}</span>
                </div> 
                <div
                    class="dropdown-result_none"
                    v-else
                >No country selected</div>              
            </div>
            <div
                class="dropdown-result"
                v-for="country in queriedCountries"
                :title="`[${country.code}] ${country.name}`"
                :class="{ selected: isSelected(country.code) }"
                :key="country.code"
                @click="toggleSelectCountry(country)"
            >
                <span class="dropdown-result_name">{{ country.name }}</span>
                <span class="dropdown-result_code">{{ country.code }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropDown',
    props: {
        countries: {
            type: Array,
            default: [],
        },
    },
    data() {
        return {
            searchQuery: '',
            selected: {
                code: '',
                name: '',
            },
        };
    },
    methods: {
        isSelected(code) {
            return this.selected.code === code;
        },
        toggleSelectCountry(country) {
            this.selected = this.selected.name !== country.name ? country : {
                code: '',
                name: '',
            };
        },
    },
    computed: {
        queriedCountries() {
            return this.countries
                .filter(({ name }) => name.toLowerCase().includes(this.searchQuery.toLowerCase()));
        },
    },
};
</script>

<style lang="scss" scoped>
$mettrr--color: #7551ff;

.dropdown {
    text-align: left;

    &-input {
        box-sizing: border-box;
        border: 2px solid rgba($mettrr--color, .3);
        padding: 0 10px;
        line-height: 40px;
        height: 40px;
        width: 100%;
        font-size: 15px;
        transition: all .3s;

        &:focus {
            outline: none;
            border-color: $mettrr--color;
            box-shadow: inset 0 -3px 0 $mettrr--color;
        }
    }

    &-results {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        max-height: 300px;
        overflow: auto;
    }

    &-selected {
        display: flex;
        align-items: center;
        flex: 0 0 100%;
        min-height: 45px;
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #afafaf;

        .dropdown-result {
            display: flex;
            align-items: center;
            margin: 0 1em;

            &_code {
                margin-right: 1em;
            }
        }
    }

    &-result {
        cursor: pointer;
        margin: 3px;
        padding: 5px 10px;
        border-radius: 1em;
        color: $mettrr--color;
        border: 2px solid $mettrr--color;
        transition: all .3s;

        &:hover {
            background: rgba($mettrr--color, .2);
        }

        &.selected {
            color: #fff;
            background: $mettrr--color;

            &:hover {
                background: lighten($mettrr--color, 5%);
            }
        }

        span {
            display: block;
        }

        &_name {
            font-weight: bold;
        }

        &_code {
            font-style: italic;
            font-size: 12px;
        }

        &_none {
            margin-left: 10px;
        }
    }
}
</style>
