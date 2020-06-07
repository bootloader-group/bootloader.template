import axios from 'axios';

export default async function () {
    let API_URL;
    await axios.get('/config.json')
        .then((response) => {
            API_URL = response.data['backend-url'];
        })
        .catch((error) => {
            console.log('Error getting config file: ', error);
        });

    return API_URL;
};