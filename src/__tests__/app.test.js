import { mount, shallow } from 'vue-test-utils';
import CountryList from '../components/country-list/country-list.vue';
import { createRenderer } from 'vue-server-renderer';

describe('CountryList ', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = mount(CountryList);
    });

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

    it('renders li items', () => {
        //cant call the api
    })
})