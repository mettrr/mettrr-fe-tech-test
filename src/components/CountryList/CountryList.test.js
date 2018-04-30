import Vue from 'vue';
import CountryList from './CountryList.vue';

describe('CountryList', () => {
    test('toggleDropdownList() toggles the dropdown list', () => {
        expect(CountryList.data().dropdownListIsActive).toBeFalsy();
        CountryList.toggleDropdownList();
        expect(CountryList.data().dropdownListIsActive).toBeTruthy();
    });
});