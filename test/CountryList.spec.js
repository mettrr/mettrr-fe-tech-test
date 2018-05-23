import { expect } from 'chai';
import { mount } from 'avoriaz';
import axios from 'axios';
import moxios from 'moxios';
import CountryList from '../src/components/CountryList.vue';

describe('CountryList.vue', () => {
    beforeEach(() => {
        moxios.install(axios);
    });

    afterEach(() => {
        moxios.uninstall(axios);
    });

    it('has a root element with class countryList', () => {
        const component = mount(CountryList);
        expect(component.is('.countryList')).to.equal(true);
    });

    it('retrieves a successful response from the API', (done) => {
        moxios.stubRequest('https://api.myjson.com/bins/16i597', {
            status: 200,
            response: [
                { name: 'Afghanistan', code: 'AF' },
                { name: 'Åland Islands', code: 'AX' },
                { name: 'Albania', code: 'AL' },
            ],
        });

        const component = mount(CountryList);

        moxios.wait(() => {
            expect(component.data().countries.length)
                .to.equal(3);
            done();
        });
    });
});
