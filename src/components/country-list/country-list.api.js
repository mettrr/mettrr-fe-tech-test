import axios from 'axios';
import { apiEndPoint } from '../../config/config';

export const getCountry = () => {
    const promise = new Promise((resolve, reject) => {
        axios
            .get(`${apiEndPoint}`)
            .then(countries => resolve(countries.data))
            .catch(error => reject(error));
    });
    return promise;
};
