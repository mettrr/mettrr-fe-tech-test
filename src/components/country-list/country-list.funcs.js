import { NOFLYLIST } from '../../config';

export const removeNoFly = (countries) => {
    const newCountries = countries.filter(country => !NOFLYLIST.includes(country.code));
    return newCountries;
};
