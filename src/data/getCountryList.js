import axios from 'axios';

export default () => new Promise((resolve, reject) => {
    axios.get('https://api.myjson.com/bins/16i597').then((response) => {
        resolve(response.data);
    }).catch((err) => {
        reject(err);
    });
});
