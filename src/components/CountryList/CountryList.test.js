import Vue from 'vue';
import VueRouter from 'vue-router';
import { shallow } from '@vue/test-utils';
import CountryList from './CountryList.vue';
import getCountryListExceptNoFlyList from '../../data/getCountryListExceptNoFlyList';

Vue.use(VueRouter);

const partialCountryList = [
    {
        name: 'Afghanistan',
        code: 'AF',
    },
    {
        name: 'Chile',
        code: 'CL',
    },
    {
        name: 'France',
        code: 'FR',
    },
    {
        name: 'Yemen',
        code: 'YE',
    },
];

jest.mock('../../data/getCountryListExceptNoFlyList');
getCountryListExceptNoFlyList.mockReturnValue(new Promise((resolve, reject) => {
    resolve(partialCountryList);
}));

describe('CountryList', () => {
    let cmp;

    beforeEach(() => {
        cmp = shallow(CountryList);
    });

    test('toggleDropdownList() toggles the dropdown list', () => {
        expect(cmp.vm.dropdownListIsActive).toBeFalsy();
        cmp.vm.toggleDropdownList();
        expect(cmp.vm.dropdownListIsActive).toBeTruthy();
    });

    test('setSelectedListItem() sets the correct list item', () => {
        expect(cmp.vm.selectedListItem).toBe(partialCountryList[0]);
        const countryObject = { name: 'Chile', code: 'CL' };
        cmp.vm.setSelectedListItem(countryObject);
        expect(cmp.vm.selectedListItem).toBe(countryObject);
    });

    test('getCountryItems() sets the items as data', () => {
        expect(cmp.vm.countryList).toHaveLength(4);
        expect(cmp.vm.countryList).toBe(partialCountryList);
    });
});