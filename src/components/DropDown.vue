<template>
    <div class="dropdown">
        <div
            class="dropdown-selected"
            ref="dropdown"
            @click="open = !open"
        >
            <div
                class="dropdown-menu_result selected"
                v-if="!!selected.code"
                :title="`[${selected.code}] ${selected.name}`"
                :key="selected.code"   
            >
                <span class="dropdown-menu_result--code">[{{ selected.code }}] </span>
                <span class="dropdown-menu_result--name">{{ selected.name }}</span>
            </div> 
            <div
                class="dropdown-menu_result--none"
                v-else
            >Select a country</div>              
            <div
                class="dropdown-arrow"
                :class="{ active: open }"
            ></div>
        </div>
        <div
            v-show="open"
            class="dropdown-menu"
            ref="dropdownMenu"
        >
            <div class="dropdown-menu_input-container">
                <input
                    class="dropdown-menu_input"
                    type="text"
                    placeholder="Search for a country or code"
                    v-model="searchQuery"
                >
            </div>
            <div
                class="dropdown-menu_results"
                v-if="queriedCountries.length"
            >
                <div
                    class="dropdown-menu_result"
                    v-for="country in queriedCountries"
                    :title="`[${country.code}] ${country.name}`"
                    :class="{ selected: isSelected(country.code) }"
                    :key="country.code"
                    @click="toggleSelectCountry(country)"
                >
                    <span class="dropdown-menu_result--code">{{ country.code }}</span>
                    <span class="dropdown-menu_result--name">{{ country.name }}</span>
                </div>
            </div>
            <div
                v-else
                class="dropdown-menu_results dropdown-menu_results--none"
            >
                No results found. Please try again
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
            open: false,
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
            this.searchQuery = '';
            this.selected = this.selected.name !== country.name ? country : {
                code: '',
                name: '',
            };
            if (this.selected) this.open = false;
        },
    },
    computed: {
        queriedCountries() {
            return this.countries
                .filter(({ code, name }) => (
                    name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    code.toLowerCase().includes(this.searchQuery.toLowerCase())
                ));
        },
    },
};
</script>

<style lang="scss" scoped>
$mettrr--color: #7551ff;

.dropdown {
    text-align: left;

    &-selected {

        > .dropdown-menu_result {
            margin-right: 20px;
        }
    }

    &-menu {
        border: 2px solid $mettrr--color;
        border-top: none;

        &_input {
            box-sizing: border-box;
            border: 2px solid rgba($mettrr--color, .3);
            padding: 0 10px;
            margin-bottom: 10px;
            line-height: 40px;
            height: 40px;
            width: 100%;
            font-size: 15px;
            transition: all .3s;

            &-container {
                padding: 10px 10px 0;;
            }

            &:focus {
                outline: none;
                border-color: $mettrr--color;
                box-shadow: inset 0 -3px 0 $mettrr--color;
            }
        }

        &_results {
            padding: 10px;
            max-height: 300px;
            overflow: auto;
        }

        &_result {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 5px 10px;

            &:hover {
                background: rgba($mettrr--color, .2);
            }

            &.selected {
                border-radius: 1em;
                color: $mettrr--color;
                border: 2px solid $mettrr--color;
                transition: all .3s;
                margin-left: 0;
                color: #fff;
                background: $mettrr--color;

                &:hover {
                    background: lighten($mettrr--color, 5%);
                }
            }

            &--name {
                margin-left: 10px;
                font-weight: bold;
            }

            &--code {
                font-style: italic;
                font-size: 12px;
            }
        }
    }

    &-selected {
        cursor: pointer;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        min-height: 45px;
        padding: 10px;
        border-bottom: 1px solid #afafaf;
    }

    &-arrow {
        margin-left: auto;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 12px 8px 0 8px;
        border-color:  $mettrr--color transparent transparent transparent;            
        transition: all .3s;

        &.active {
            border-width: 0 8px 12px 8px;
            border-color: transparent transparent $mettrr--color transparent;
        }
    }
}
</style>
