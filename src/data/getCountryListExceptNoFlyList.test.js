import getCountryListExceptNoFlyList from './getCountryListExceptNoFlyList';
import getCountryList from './getCountryList';

jest.mock('./getCountryList');

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

getCountryList.mockReturnValue(new Promise((resolve, reject) => {
    resolve(partialCountryList);
}));

test('It filters out countrys on the no fly list', (done) => {
    getCountryListExceptNoFlyList().then((res) => {
        expect(res).toHaveLength(3);
        expect(res.includes(partialCountryList[2])).toBeTruthy();
        expect(res.includes(partialCountryList[3])).toBeFalsy();
        done();
    });
});
