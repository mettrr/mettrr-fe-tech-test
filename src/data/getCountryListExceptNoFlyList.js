import getCountryList from './getCountryList';

const noFlyList = [
    'LY',
    'SO',
    'YE',
    'SY',
    'KP',
    'IQ',
];

export default () => new Promise((resolve, reject) => {
    getCountryList().then((res) => {
        resolve(res.filter(c => (noFlyList.indexOf(c.code) === -1)));
    }).catch((err) => {
        reject(err);
    });
});
