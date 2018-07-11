import { shallow, createLocalVue } from 'vue-test-utils';
import CountryList from '../../../src/components/CountryList.vue';

const localVue = createLocalVue();

describe('CountryList.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(CountryList, {
            localVue,
        });
    });

    it('Renders', () => {
        expect(wrapper.html()).toContain('<h1>Country List</h1>');
    });
});
