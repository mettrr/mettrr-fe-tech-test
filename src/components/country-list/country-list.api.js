import axios from 'axios';
import { countryRoute } from '../../config';

export const getCountry = () => {
    const promise = new Promise((resolve, reject) => {
        axios
            .get(`${countryRoute}`)
            .then(countries => resolve(countries.data))
            .catch(error => reject(error));
    });
    return promise;
};
