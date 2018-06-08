<template>
    <div style="position:relative" v-bind:class="{'open':openSuggestion}">
        <label for="search">{{ searchLabel }}</label>
        <input id="search" class="autocomplete" type="text" :value="value" @input="updateValue($event.target.value)" @keydown.enter='enter' @keydown.down='down' @keydown.up='up'>
        <div v-if="displayDropDown" class="autocomplete-items" style="width:100%">
            <div v-for="(suggestion, index) in matches" v-bind:class="{'active': isActive(index)}" @click="suggestionClick(index)">
                <a href="#">{{ suggestion.name }}
                    <small>{{ suggestion.code }}</small>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true,
        },
        suggestions: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            searchLabel: 'Enter country name',
            open: false,
            current: 0,
        };
    },
    computed: {
    // Filtering the suggestion based on the input
        matches() {
            // return this.suggestions.filter((obj) => obj.name.indexOf(this.value) >= 0);
            return this.suggestions.filter((suggestion, index) => {
                const regex = new RegExp(this.value, 'gi');
                return suggestion.name.match(regex);
            });
        },
        openSuggestion() {
            return this.selection !== '' &&
             this.matches.length !== 0 &&
             this.open === true;
        },
        displayDropDown() {
            return this.value !== '' && this.openSuggestion;
        },
    },
    methods: {
        updateValue(value) {
            if (this.open === false) {
                this.open = true;
                this.current = 0;
            }
            this.$emit('input', value);
        },
        // When enter pressed on the input
        enter() {
            this.$emit('input', this.matches[this.current].name);
            this.open = false;
        },
        // When up pressed while suggestions are open
        up() {
            if (this.current > 0) {
                this.current -= 1;
            }
        },
        // When up pressed while suggestions are open
        down() {
            if (this.current < this.matches.length - 1) {
                this.current += 1;
            }
        },
        // For highlighting element
        isActive(index) {
            return index === this.current;
        },
        // When one of the suggestion is clicked
        suggestionClick(index) {
            this.$emit('input', this.matches[index].name);
            this.open = false;
        },
    },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.autocomplete {
  position: relative;
  display: inline-block;
}
input {
  border: 1px solid transparent;
  background-color: #f1f1f1;
  padding: 10px;
  font-size: 16px;
}
input[type='text'] {
  background-color: #f1f1f1;
  width: 100%;
}
.autocomplete-items {
  text-align: left;
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  top: 100%;
  left: 0;
  right: 0;
}
.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #7551ff;
  border-bottom: 1px solid #d4d4d4;
}
.autocomplete-items div:hover {
  /*when hovering an item:*/
  background-color: #e9e9e9;
}
a {
  color: white;
  text-decoration: none;
}
</style>
