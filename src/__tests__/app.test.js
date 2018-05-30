import * as vTests from 'vue-test-utils';
import moxios from 'moxios';
import { mount } from 'avoriaz'
import { countryRoute } from '../config';
import { getCountry } from '../components/country-list/country-list.api';
import CountryList from '../components/country-list/country-list.vue';
import { createRenderer } from 'vue-server-renderer';
import axios from 'axios';

describe('CountryList ', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = vTests.mount(CountryList);
        moxios.install(axios);
    });
    afterEach(() => {
        moxios.uninstall(axios);
    })
    it('renders', () => {
        const renderer = createRenderer()

        renderer.renderToString(wrapper.vm, (err, str) => {
            if (err) throw new Error(err)
            expect(str).toMatchSnapshot()
        })
    })

    it('dropwdown function is called', () => {
        const saveMock = jest.fn()
        wrapper.vm.dropDown = saveMock
        wrapper.update()

        wrapper.find('.collapse').trigger('click')
        expect(saveMock.mock.calls.length).toBe(1)
    })

    it('valid api route', async () => {
        moxios.stubRequest(countryRoute, {
            status: 200,
            response: [
                {
                    "name": "Afghanistan",
                    "code": "AF"
                },
                {
                    "name": "Åland Islands",
                    "code": "AX"
                },
                {
                    "name": "Albania",
                    "code": "AL"
                },
                {
                    "name": "Algeria",
                    "code": "DZ"
                },
                {
                    "name": "American Samoa",
                    "code": "AS"
                },
            ]
        })
        let wrapper = mount(CountryList)

        const result = await getCountry()
        expect(result.length).toEqual(wrapper.data().countries.length)
    })
})