import { NOFLYLIST } from '../../config/config';

export const removeNoFly = (countries) => {
    const newCountries = countries.filter(country => !NOFLYLIST.includes(country.code));
    return newCountries;
};
